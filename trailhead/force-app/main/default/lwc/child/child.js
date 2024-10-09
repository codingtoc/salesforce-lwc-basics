import { api, LightningElement } from "lwc";

export default class Child extends LightningElement {
  uppercasedItemName = "default value";

  @api
  get itemName() {
    return this.uppercasedItemName;
  }
  set itemName(value) {
    this.uppercasedItemName = value.toUpperCase();
  }
}
