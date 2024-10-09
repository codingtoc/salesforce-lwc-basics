import { api, LightningElement } from "lwc";

export default class Child extends LightningElement {
  // public property
  @api
  firstName = "Sanjay";
}
