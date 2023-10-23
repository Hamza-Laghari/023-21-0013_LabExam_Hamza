// Validate the form before submitting it
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
  
    if (name === '' || email === '' || phone === '' || message === '') {
      alert('Please fill in all required fields.');
      return false;
    }
  
    if (!/^[A-Za-z]+$/.test(name)) {
      alert('Please enter a valid name.');
      return false;
    }
  
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    if (!/^\d{10}$/.test(phone)) {
      alert('Please enter a valid phone number.');
      return false;
    }
  
    return true;
  }
  
  // Submit the form if it is valid
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    if (!validateForm()) {
      return;
    }
  
    // Send the form data to your server here
  });
  
