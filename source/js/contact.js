class contact {

  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);

    if (this.form) {
      this.url = this.form.getAttribute("action");
    }

    this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
    document.getElementById("response").innerHTML = "<h1 class='success'>"+translation.contact.success + "</h1>";

    setTimeout(() => {
      location.reload();
    }, 5000);
  }

  displayError() {
    document.getElementById("response").innerHTML = "<h1 class='error'>"+translation.contact.error+"</h1>";
  }

  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");

    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });

    return formObject;
  }

  onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = translation.contact.sending;
  }

  async sendForm(event) {
    try {
      this.onSubmission(event);
      
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getFormObject()),
      });
      this.displaySuccess();

    } catch(error) {
    this.displayError();
    throw new Error(error);
  }
}

init() {
  if (this.form) this.formButton.addEventListener("click", this.sendForm);
  return this;
}

}

var formSubmit = new contact({
  form: "[data-form]",
  button: "[data-button]"
});

formSubmit.init();
