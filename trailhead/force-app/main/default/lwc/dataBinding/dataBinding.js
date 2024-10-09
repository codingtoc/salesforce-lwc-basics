import { LightningElement } from "lwc";

export default class DataBinding extends LightningElement {
  firstName = "";
  lastName = "";

  handleClick(event) {
    let input = this.template.querySelectorAll("lightning-input");

    input.forEach((element) => {
      if (element.name === "fname") {
        this.firstName = element.value;
      } else if (element.name === "lname") {
        this.lastName = element.value;
      }
    });
  }
}
