const tabs = {
  "주문": [
    [
      {
        "type": "btn",
        "icon": "🍜",
        "name": "짜장면 하나 배달 주문하기",
        "topic": "중국집에 짜장면 하나를 주문하는 상황이다."
      },
      {
        "type": "btn",
        "icon": "📦",
        "name": "홈쇼핑 전화 주문하기",
        "topic": "홈쇼핑을 보고 물건을 주문하는 상황이다."
      }
    ],
    [
      {
        "type": "btn",
        "icon": "🍕",
        "name": "파인애플 피자 2판 주문하기",
        "topic": "피자를 주문하는 상황이다."
      }
    ]
  ],
  "교환/환불": [
    [], [],
    [
      {
        "type": "btn",
        "icon": "🥾",
        "name": "신발 교환 규정 묻기",
        "topic": "나이키 고객 센터에 신발 교환 규정을 묻는 상황이다."
      },
    ],
    [
      {
        "type": "btn",
        "icon": "🧑‍💻",
        "name": "맥북 환불 규정 묻기",
        "topic": "맥북 환불 규정을 묻고 답한다."
      }
    ]
  ],
};

export type Tabs = typeof tabs;
export type Tab = keyof Tabs;

export default tabs;