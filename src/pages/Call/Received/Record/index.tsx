import React from "react";
import { ScrollView, View } from "react-native";
import { useRecoilValue } from "recoil";

import Chat from "@/components/Chat";
import Text from "@/components/Text";
import { CallingRecordSelector, SizeAtom } from "@/utils/states";

import styles from "./styles";

const Record = () => {
  const log = useRecoilValue(CallingRecordSelector);
  const size = useRecoilValue(SizeAtom);
  const scrollRef = React.useRef<ScrollView>(null);

  React.useEffect(() => {
    scrollRef.current?.scrollToEnd({
      animated: false,
    });
  }, [log.length]);

  return (
    <View style={{
      ...styles.container,
      height: size.height - 550,
    }}>
      {
        log.length ? (
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
        ) : (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>대화 기록이 없습니다.</Text>
          </View>
        )
      }
    </View>
  );
};

export default Record;