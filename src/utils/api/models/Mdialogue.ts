import { IdialogueMessage } from "../interfaces/Idialogue";

export class Mdialogue {
  dialogueMessage: IdialogueMessage[];
  dialogueSubject: string;
  constructor() {
    this.dialogueMessage = [];
    this.dialogueSubject = "";
  }
}