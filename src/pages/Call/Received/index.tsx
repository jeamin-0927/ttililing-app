import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import SoundPlayer from "react-native-sound-player";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import RNFetchBlob from "rn-fetch-blob";

import env from "@/../.env.json";
import Icon_NoSelected_Help from "@/assets/icons/received/noSelected/help.svg";
import Icon_NoSelected_Record from "@/assets/icons/received/noSelected/record.svg";
import Icon_NoSelected_Speaker from "@/assets/icons/received/noSelected/speaker.svg";
import Icon_Selected_Help from "@/assets/icons/received/selected/help.svg";
import Icon_Selected_Record from "@/assets/icons/received/selected/record.svg";
import Icon_Selected_Speaker from "@/assets/icons/received/selected/speaker.svg";
import Icon_RingWhite from "@/assets/icons/ring-white.svg";
import CallView from "@/components/CallView";
import Text from "@/components/Text";
import random from "@/utils/random";
import { CallingRecordLastOtherSelector, CallingRecordSelector, CallingStopSelector } from "@/utils/states";
import voices from "@/utils/voices";

import { StackParamList as ParentsStackParamList } from "../types";

import Help from "./Help";
import Main from "./Main";
import Record from "./Record";
import styles from "./styles";



const btns: {
  id: "speaker" | "record" | "help",
  name: string,
  selected: React.FunctionComponent<React.SVGAttributes<SVGElement>>,
  noSelected: React.FunctionComponent<React.SVGAttributes<SVGElement>>,
  onPress: () => void,
}[] = [
  {
    id: "speaker",
    name: "스피커",
    selected: Icon_Selected_Speaker,
    noSelected: Icon_NoSelected_Speaker,
    onPress: () => {},
  },
  {
    id: "help",
    name: "도와주세요",
    selected: Icon_Selected_Help,
    noSelected: Icon_NoSelected_Help,
    onPress: () => {
    },
  },
  {
    id: "record",
    name: "대화 기록",
    selected: Icon_Selected_Record,
    noSelected: Icon_NoSelected_Record,
    onPress: () => {
    },
  },
];

type props = NativeStackScreenProps<ParentsStackParamList, "Received">;
const Received = ({ navigation }: props) => {
  const [ClickBtn, setClickBtn] = React.useState({
    speaker: true,
    record: false,
    help: false,
  });
  const [Center, setCenter] = React.useState<React.JSX.Element>(<Main />);
  const [voice, setVoice] = React.useState(voices[0]);
  const resetLog = useResetRecoilState(CallingRecordSelector);
  const lastOther = useRecoilValue(CallingRecordLastOtherSelector);
  const stopVoice = useSetRecoilState(CallingStopSelector);

  const init = () => {
    resetLog();
    setVoice(voices[random(0, voices.length - 1)]);
    stopVoice(true);
  };
  navigation.addListener("beforeRemove", () => {
    init();
  });
  navigation.addListener("focus", () => {
    init();
  });


  const TTS = async () => {
    if(!lastOther) return;
    console.log("TTS", lastOther);
    const apiUrl = "https://naveropenapi.apigw.ntruss.com/tts-premium/v1/tts";
    try {
      const res = await RNFetchBlob.config({
        fileCache: true,
        appendExt: "mp3",
      }).fetch(
        "POST", 
        apiUrl,
        {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-NCP-APIGW-API-KEY-ID": env.NAVER_CLIENT_ID,
          "X-NCP-APIGW-API-KEY": env.NAVER_CLIENT_SECRET,
        },
        `speaker=${voice.id}&text=${lastOther}&volume=5&speed=0&pitch=0`
      );
      SoundPlayer.setVolume(ClickBtn.speaker ? 1 : 0.02);
      SoundPlayer.playUrl(res.path());
    } catch (error) {
      console.error("Error:", error);
      console.log(JSON.stringify(error, null, 2));
    }
  };
  
  React.useEffect(() => {
    if(!lastOther) return;
    TTS();
  }, [lastOther]);
  
  const opacity = React.useRef(new Animated.Value(1)).current;
  const changePage = (page: React.JSX.Element) => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 75,
      useNativeDriver: true,
    }).start(() => {
      setCenter(page);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 75,
        useNativeDriver: true,
      }).start();
    });
  };

  React.useEffect(() => {
    if(ClickBtn.record) {
      changePage(<Record />);
    }
    else if(ClickBtn.help) {
      changePage(<Help />);
    }
    else {
      changePage(<Main />);
    }
  }, [ClickBtn.record, ClickBtn.help]);

  const hangup = () => {
    navigation.navigate("Confirm", {
      title: "전화를 종료하시겠습니까?",
      context: "기록 화면으로 전환됩니다!",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
      onConfirm: () => {
        navigation.replace("Record");
        init();
      }
    });
  };

  return (
    <CallView navigation={navigation}>
      <View style={styles.top}>
        <Text style={styles.callStart}>전화 시작</Text>
        <Text style={styles.callWho}>띠링 중국집</Text>
      </View>

      <Animated.View style={{
        ...styles.center,
        opacity
      }}>
        { Center }
      </Animated.View>

      <View style={styles.bottom}>
        <View style={styles.btns}>
          {
            btns.map((btn, i) => (
              <TouchableOpacity 
                style={styles.btn} 
                key={i}
                onPress={() => {
                  setClickBtn({
                    ...ClickBtn,
                    help: btn.id === "record" ? false : ClickBtn["help"],
                    record: btn.id === "help" ? false : ClickBtn["record"],
                    [btn.id]: !ClickBtn[btn.id],
                  });
                  btn.onPress();
                }}
                hitSlop={{
                  top: 5,
                }}
              >
                {
                  ClickBtn[btn.id] ? 
                    <btn.selected style={styles.btnIcon} /> :
                    <btn.noSelected style={styles.btnIcon} />
                }
                <Text style={styles.btnText}>{btn.name}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
        <TouchableOpacity style={styles.close} onPress={hangup}>
          <Icon_RingWhite style={styles.endIcon} />
        </TouchableOpacity>
      </View>
    </CallView>
  );
};

export default Received;
