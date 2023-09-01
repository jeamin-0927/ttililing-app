import axios from "axios";
import { OpenAI } from "openai";

import env from "@/../.env.json";

import { IdialogueHistory, IdialogueMessage } from "./interfaces/Idialogue";
// import { openai } from "./modules/configure";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY
});

class DialogueFlow {
  dialogueMessage: IdialogueMessage[];
  dialogueSubject: string;
  constructor() {
    this.dialogueMessage = [];
    this.dialogueSubject = "";
  }
}

export default class Dialogue extends DialogueFlow {
  protected request = async (request: string) => {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        max_tokens: 200,
        messages: [
          {
            "role": "system",
            "content": `상황 : ${this.dialogueSubject}\n대화 내역 : ${this.dialogueMessage.toString()}`
          },
          {
            "role": "user",
            "content": request
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + env.OPENAI_API_KEY
        }
      }
    );
    return response.data;
    // return await openai.chat.completions.create({
    //   model: "gpt-4",
    //   max_tokens: 200,
    //   messages: [
    //     {
    //       "role": "system",
    //       "content": `상황 : ${this.dialogueSubject}\n대화 내역 : ${this.dialogueMessage.toString()}`
    //     },
    //     {
    //       "role": "user",
    //       "content": request
    //     }
    //   ]
    // });
  };
  /**입력받은 문자열에 대해 GPT-4가 답변한 문자열 반환 */
  answer = async (request: string) => {
    if(!this.checkSubject()) return {
      "error": "등록된 주제가 없습니다. 대화를 시작하기 위해 주제를 등록해 주세요.",
      "answer": "",
      "recommend": ""
    };
    this.dialogueMessage.push({
      index: this.dialogueMessage.length,
      role: "user",
      message: request
    });
    return this.request(request).then(response => {
      this.dialogueMessage.push({
        index: this.dialogueMessage.length,
        role: response.choices[0].message.role,
        message: response.choices[0].message.content
      });
      return {
        "error": "",
        "answer": response.choices[0].message.content as string,
        "recommend": ""
      };
    }); 
  };
  /**대화기록 열람 */
  history = (): IdialogueHistory | string => {
    if(!this.checkSubject()) return "등록된 주제가 없습니다. 대화를 시작하기 위해 주제를 등록해 주세요.";
    return {
      subject: this.dialogueSubject,
      message: this.dialogueMessage
    };
  };
  /**대화주제 설정 */
  setSubject = (subject: string) => {
    this.dialogueSubject = subject;
  };
  /**대화주제가 있으면 true 없으면 false 반환 */
  checkSubject = (): boolean => {
    if(this.dialogueSubject === "") return false;
    return true;
  };
  constructor() {
    super();
  }
}


