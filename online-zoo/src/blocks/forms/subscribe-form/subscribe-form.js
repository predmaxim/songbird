function validate(formId) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const form = document.querySelector(`#${formId}`);
  const emailField = form.querySelector('input[type="email"]');
  const submitButton = form.querySelector('input[type="submit"]');

  emailField.oninput = () => {
    if (reg.test(emailField.value) == false) {
      emailField.classList.add('error');
      submitButton.classList.add('error');
      submitButton.setAttribute('disabled', 'true')
      return false;
    }
    emailField.classList.remove('error');
    submitButton.classList.remove('error');
    submitButton.setAttribute('disabled', 'false')
    return true;
  }
}

validate('subscription-form')

export default {}