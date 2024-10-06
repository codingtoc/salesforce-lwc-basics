import { LightningElement } from "lwc";

export default class CreateViewContactWithBC extends LightningElement {
  recordId;

  createContact(event) {
    this.recordId = event.detail.id;
  }
}
