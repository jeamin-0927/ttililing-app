import axios from "axios";

import { IdialogueHistory } from "./interfaces/Idialogue";
import { Authorization } from "./models/Mauthorization";
import { Mdialogue } from "./models/Mdialogue";

export default class Dialogue extends Mdialogue {
  protected request = async (request: string) => {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        max_tokens: 300,
        messages: [
          {
            "role": "system",
            "content": `상황 : ${this.dialogueSubject}\n대화 내역 : ${this.dialogueMessage.toString()}`
          },
          {
            "role": "user",
            "content": request
          },
          {
            "role": "assistant",
            "content": `"user"의 대한 "assistant"의 답변과 "assistant"의 답변에 응답할 "user"의 추천 대답을 
              {
                response: "user의 제시문에 대한 assistant의 답변",
                recommend: "assistant의 답변에 응답할 user의 추천 대답"
              }
              형식의 json 형태로 답변하시오
            `
          }
        ]
      },
      {
        headers: Authorization
      }
    );
    return response.data;
  };
  /**입력받은 문자열에 대해 GPT-4가 답변한 문자열 반환 */
  answer = async (request: string) => {
    if(!this.checkSubject()) return "등록된 주제가 없습니다. 대화를 시작하기 위해 주제를 등록해 주세요.";
    this.dialogueMessage.push({
      index: this.dialogueMessage.length,
      role: "user",
      message: request,
      recommend: ""
    });
    return this.request(request).then(response => {
      const result = JSON.parse(response.choices[0].message.content);
      this.dialogueMessage.push({
        index: this.dialogueMessage.length,
        role: response.choices[0].message.role,
        message: result.response,
        recommend: result.recommend
      });
      return result;
      // return response.choices[0].message.content;
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