document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const serviceID = 'service_1dfc2tv';
      const templateID = 'template_y094bto';
      const user_id = 'iAI6zH2Z_0XoirgA7'; 
      const templateParams = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
      };
  
      emailjs.send(serviceID, templateID, templateParams, user_id)
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
          form.querySelector('.sent-message').style.display = 'block';
          // Optionally clear specific fields instead of resetting the entire form
          // form.name.value = '';
          // form.email.value = '';
          // form.subject.value = '';
          // form.message.value = '';
        }, function (error) {
          console.error('FAILED...', error);
          form.querySelector('.error-message').style.display = 'block';
        });
    });
  });
  