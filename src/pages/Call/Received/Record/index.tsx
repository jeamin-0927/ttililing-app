import React from "react";
import { ScrollView, View } from "react-native";
import { useRecoilValue } from "recoil";

import Chat from "@/components/Chat";
import { CallingRecordSelector, SizeAtom } from "@/utils/states";

import styles from "./styles";

const Record = () => {
  const log = useRecoilValue(CallingRecordSelector);
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