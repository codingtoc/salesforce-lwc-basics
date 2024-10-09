import { LightningElement } from "lwc";

export default class TodoApp extends LightningElement {
  todoList = [
    {
      Id: "1",
      Name: "Milk"
    },
    {
      Id: "2",
      Name: "Bread"
    }
  ];
}
