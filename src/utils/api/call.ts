import axios from "axios";

import Dialogue from "./dialogue";
import { Icall } from "./interfaces/Icall";
import { Authorization } from "./models/Mauthorization";
import { Mcall } from "./models/Mcall";

export default class Call extends Mcall {
  protected requestImage = async (request: string) => {
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations",
      {
        "prompt": request,
        "n": 1,
        "size": "1024x1024"
      },
      {
        headers: Authorization
      }
    );
    return response.data;
  };
  protected requestReceiver = async (request: string) => {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        max_tokens: 100,
        messages: [
          {
            "role": "system", 
            "content": `상황 : ${request}\n위 상황에 알맞는 전화 수신자(한국어) 하나와, ${request}에서의 {상황에 알맞는 전화 수신자 하나}를 영문으로 변환하여
                {
                  "receiver": "상황에 알맞는 전화 수신자 하나 (한국어)",
                  "depict": "영문으로 번역한 문장"
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
    return JSON.parse(response.data.choices[0].message.content);
  };
  /** */
  call = async (request: Dialogue): Promise<Icall> => {
    if(!request.checkSubject()) return {
      error: "등록된 주제가 없습니다. 대화를 시작하기 위해 주제를 등록해 주세요.",
      receiver: "",
      image: "" 
    };
    return await this.requestReceiver(request.dialogueSubject).then(async (response): Promise<Icall> => {
      return await this.requestImage(
        response.depict).then((image): Icall => {
        return {
          error: "",
          receiver: "띠링 " + response.receiver,
          image: image.data[0].url
        };
      });
    });
  };
  constructor() {
    super();
  }
}
