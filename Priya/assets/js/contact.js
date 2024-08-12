document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log("Form submission detected");

        const serviceID = "service_1dfc2tv";
        const templateID = "template_y094bto";
        const userID = "iAI6zH2Z_0XoirgA7"; 

        const templateParams = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        };

        console.log("Sending email with the following parameters:", templateParams);

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                form.querySelector('.sent-message').style.display = 'block';
                form.reset();
            }, function (error) {
                console.error('FAILED...', error);
                form.querySelector('.error-message').style.display = 'block';
            });
    });
});
