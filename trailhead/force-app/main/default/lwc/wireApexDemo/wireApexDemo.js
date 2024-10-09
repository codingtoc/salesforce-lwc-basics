import { api, LightningElement, wire } from "lwc";
import getContacts from "@salesforce/apex/ContactController.getContacts";

export default class WireApexDemo extends LightningElement {
  @api recordId;
  contacts;
  error;

  @wire(getContacts, { accId: "$recordId" })
  wireContact({ error, data }) {
    if (data) {
      this.contacts = data;
      this.error = undefined;
    } else if (error) {
      this.error = error;
      this.contacts = undefined;
    }
  }
}
