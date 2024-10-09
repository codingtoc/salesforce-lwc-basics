import { LightningElement } from "lwc";

export default class DataBinding extends LightningElement {
  greeting = "Sanjay";

  handleChange(event) {
    this.greeting = event.target.value;
  }
}
