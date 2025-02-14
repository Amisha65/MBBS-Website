document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("consultationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        
        let valid = true;

        let name = document.getElementById("fullName").value.trim();
        let nameError = document.getElementById("nameError");
        if (!/^[A-Za-z\s]+$/.test(name)) {
            nameError.textContent = "Only letters are allowed.";
            valid = false;
        } else {
            nameError.textContent = "";
        }

        let email = document.getElementById("email").value.trim();
        let emailError = document.getElementById("emailError");
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            emailError.textContent = "Enter a valid email address.";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        let phone = document.getElementById("phone").value.trim();
        let phoneError = document.getElementById("phoneError");
        if (!/^\d{10}$/.test(phone)) {
            phoneError.textContent = "Phone number must be 10 digits.";
            valid = false;
        } else {
            phoneError.textContent = "";
        }

        let country = document.getElementById("country").value;
        let countryError = document.getElementById("countryError");
        if (country === "") {
            countryError.textContent = "Please select a country.";
            valid = false;
        } else {
            countryError.textContent = "";
        }

        if (valid) {
            // Google Analytics Event Tracking
            gtag('event', 'form_submission', {
                'event_category': 'Lead',
                'event_label': 'MBBS Abroad'
            });

            // Facebook Pixel Event Tracking
            fbq('track', 'Lead');

            alert("Form submitted successfully!");
            form.reset(); 
        }
    });
});
