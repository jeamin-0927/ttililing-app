import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Animated, TextInput, TouchableOpacity, View } from "react-native";

import ChatIcon from "@/assets/icons/chat.svg";
import CallView from "@/components/CallView";
import Chat from "@/components/Chat";
import Text from "@/components/Text";
import colors from "@/utils/colors";

import { StackParamList as ParentsStackParamList } from "../types";

import styles from "./styles";

type props = NativeStackScreenProps<ParentsStackParamList, "Calling">;
const Calling = ({ navigation }: props) => {
  const [subject, setSubject] = React.useState<string>("");
  const inputRef = React.useRef<TextInput>(null);

  const startBtnfadeAnim = React.useRef(new Animated.Value(0)).current;
  const showBtn = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    if(subject) { 
      Animated.timing(startBtnfadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
    else {
      Animated.timing(startBtnfadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [subject]);

  return (
    <CallView navigation={navigation}>
      <View style={styles.top}>
        <Text style={styles.callStart}>전화 시작</Text>
        <Text style={styles.callWho}>대화 주제 정하기</Text>
      </View>

      <View style={styles.center}>
        <Chat type="other" border>안녕하세요! 🙂{"\n"}어떤 상황으로 전화 연습을 하고 싶나요?</Chat>

        <View style={styles.chat}>
          <View style={styles.white}>
            <View style={styles.textop}>
              <Text style={styles.texter}>“</Text>
              <TextInput
                ref={inputRef}
                style={styles.textInput}
                placeholder="대화 주제"
                placeholderTextColor={colors.gray400}
                onChangeText={setSubject}
                value={subject}
              />
              <Text style={styles.texter}>”를</Text>
            </View>
            <Text style={styles.texter}>주제로 전화해보고 싶어.</Text>
          </View>
        </View>

        <Animated.View style={{
          ...styles.startConversationParent,
          opacity: startBtnfadeAnim,
        }}>
          <TouchableOpacity 
            style={styles.startConversation}
            disabled={!subject}
            onPress={() => navigation.navigate("Received", {
              topic: subject,
            })}
          >
            <Text style={styles.startConversationText}>🤙  전화 시작하기  {">"}</Text>
          </TouchableOpacity>
        </Animated.View>
        
      </View>

      <Animated.View style={{
        opacity: showBtn,
      }}>
        <TouchableOpacity 
          style={styles.showkeybord}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          onPress={() => {
            inputRef.current?.focus();
            console.log("키보드 띄우기");
            Animated.timing(showBtn, {
              toValue: 0,
              duration: 500,
              useNativeDriver: true,
            }).start();
          }}
        >
          <ChatIcon/>
          <Text style={styles.showkeybordText}>키보드 띄우기</Text>
        </TouchableOpacity>
      </Animated.View>
    </CallView>
  );
};

export default Calling;
