(function () {
    function validEmail(email) {
        const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }

    // get all data in form and return object
    function getFormData(form) {
        const elements = form.elements;

        const fields = Object.keys(elements).filter(function (k) {
            return (elements[k].name !== "honeypot");
        }).map(function (k) {
            if (elements[k].name !== undefined) {
                return elements[k].name;
                // special case for Edge's html collection
            } else if (elements[k].length > 0) {
                return elements[k].item(0).name;
            }
        }).filter(function (item, pos, self) {
            return self.indexOf(item) === pos && item;
        });

        const formData = {};
        fields.forEach(function (name) {
            const element = elements[name];

            // singular form elements just have one value
            formData[name] = element.value;

            // when our element has multiple items, get their values
            if (element.length) {
                const data = [];
                for (let i = 0; i < element.length; i++) {
                    let item = element.item(i);
                    if (item.checked || item.selected) {
                        data.push(item.value);
                    }
                }
                formData[name] = data.join(', ');
            }
        });

        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
        formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

        console.log(formData);
        return formData;
    }

    function handleFormSubmit(event) {
        event.preventDefault();           // we are submitting via xhr below
        const form = event.target;
        const data = getFormData(form);         // get the values submitted in the form

        if (data.email && !validEmail(data.email)) {   // if email is not valid show error
            const invalidEmail = form.querySelector(".email-invalid");
            if (invalidEmail) {
                invalidEmail.style.display = "block";
                return false;
            }
        } else {
            disableAllButtons(form);
            const url = form.action;
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            // xhr.withCredentials = true;
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function () {
                console.log(xhr.status, xhr.statusText);
                console.log(xhr.responseText);
                const submitButton = form.querySelector("#submit-button");
                console.log(submitButton);
                if (submitButton) {
                    submitButton.style.display = "none"; // hide button
                }
                const thankYouMessage = form.querySelector(".thank-you-msg");
                if (thankYouMessage) {
                    thankYouMessage.style.display = "block";
                }
            };
            // url encode form data for sending as post data
            const encoded = Object.keys(data).map(function (k) {
                return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
            }).join('&');
            xhr.send(encoded);
        }
    }

    function loaded() {
        // bind to the submit event of our form
        const forms = document.querySelectorAll("form.form");
        for (let i = 0; i < forms.length; i++) {
            forms[i].addEventListener("submit", handleFormSubmit, false);
        }
    }

    document.addEventListener("DOMContentLoaded", loaded, false);

    function disableAllButtons(form) {
        const buttons = form.querySelectorAll("#submit-button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    }
})();