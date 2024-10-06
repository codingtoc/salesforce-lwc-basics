import { LightningElement } from "lwc";
import { createRecord } from "lightning/uiRecordApi";

export default class CreateContactLDS extends LightningElement {
  contactName;
  contactEmail;
  contactPhone;

  contactNameChangeHandler(event) {
    this.contactName = event.target.value;
  }

  contactEmailChangeHandler(event) {
    this.contactEmail = event.target.value;
  }

  contactPhoneChangeHandler(event) {
    this.contactPhone = event.target.value;
  }

  createContact() {
    const fields = {
      LastName: this.contactName,
      Email: this.contactEmail,
      Phone: this.contactPhone
    };
    const recordInput = { apiName: "Contact", fields };
    createRecord(recordInput)
      .then((response) => {
        console.log("Contact has been created successfully ", response.id);
      })
      .catch((error) => {
        console.log(
          "Error occured while creating contact: ",
          error.body.message
        );
      });
  }
}
