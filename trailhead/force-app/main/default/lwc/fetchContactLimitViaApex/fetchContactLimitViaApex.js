import { LightningElement } from "lwc";
import getAllContacts from "@salesforce/apex/ContactManager.getContactWithParm";

export default class FetchContactLimitViaApex extends LightningElement {
  numberOfRecords;
  contacts;

  get responseReceived() {
    if (this.contacts) {
      return true;
    }
    return false;
  }

  numberOfContactChangeHandler(event) {
    this.numberOfRecords = event.target.value;
  }

  getContacts() {
    getAllContacts({ numberOfRecords: this.numberOfRecords })
      .then((response) => {
        this.contacts = response;
      })
      .catch((error) => {
        console.log("Error in retrieving contact records", error.body.message);
      });
  }
}
