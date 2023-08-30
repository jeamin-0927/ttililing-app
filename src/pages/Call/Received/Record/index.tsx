import React from "react";
import { ScrollView, View } from "react-native";
import { useRecoilValue } from "recoil";

import Chat from "@/components/Chat";
import { SizeAtom } from "@/utils/states";

import styles from "./styles";

const log = [
  {
    type: "other",
    text: "네에~ 띠링 중국집입니다. 주문하시겠어요?",
  },
  {
    type: "me",
    text: "아,, 저 띠링 짜장면 하나 시키려구요.",
  },
  {
    type: "other",
    text: "물론, 띠링 짜장면을 한 그릇 주문하시겠다는 건가요? 주문하실 때 어떤 옵션을 선택하실지, 그리고 배달이나 포장 등의 사항도 함께 알려주시면 도와드릴 수 있어요.",
  },
  {
    type: "other",
    text: "네에~ 띠링 중국집입니다. 주문하시겠어요?",
  },
  {
    type: "me",
    text: "아,, 저 띠링 짜장면 하나 시키려구요.",
  },
  {
    type: "other",
    text: "물론, 띠링 짜장면을 한 그릇 주문하시겠다는 건가요? 주문하실 때 어떤 옵션을 선택하실지, 그리고 배달이나 포장 등의 사항도 함께 알려주시면 도와드릴 수 있어요.",
  }
];

const Record = () => {
  const size = useRecoilValue(SizeAtom);
  const scrollRef = React.useRef<ScrollView>(null);
  return (
    <View style={{
      ...styles.container,
      height: size.height - 500,
    }}>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.record}

        onLayout={() => {
          scrollRef.current?.scrollToEnd({
            animated: false,
          });
        }}
      >
        {
          log.map((item, index) => {
            return item.type === "me" ? (
              <Chat 
                key={index}
                type="me"
                border
              >{item.text}</Chat>
            ) : (
              <Chat 
                key={index}
                type="other"
                border
              >{item.text}</Chat>
            );
          })
        }
      </ScrollView>
    </View>
  );
};

export default Record;