import axios from "axios";
import FormData from "form-data";
import React from "react";
import { Animated, Image, TouchableOpacity } from "react-native";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import { useRecoilState } from "recoil";

import env from "@/../.env.json";
import colors from "@/utils/colors";
import { CallingColorSelector, CallingRecordSelector, CallingRecordingSelector } from "@/utils/states";

import styles from "./styles";

const src = "https://s3-alpha-sig.figma.com/img/26a1/9cb3/b8d724ac8074bb487ce2f0e167a5914b?Expires=1694390400&Signature=oit~3svyozE-Z4W2ZDJs966ooFUhOXVoyZrmOPjGU2gDU6kSw-rF6DR0cO4tpeQdutlZwuAdObZyg76V1D3c7xtR3zri3RWw--kGLoFlb2OYMbVXPaU0Psa-zgX95daNXWaeMhUcCqah4wAODPuB7lpNspuovByfrLRcMTe0nXsf6CJ9irq9XeH5cu3b0fItZCYW8~RrOPkaqs1q3-kAZ4HE5IrVklqz6lNOmWU77-k2xyIGo10Er9YMahTK9uvCVD4pqPoM7vm8t99DEJN8nLwNF6ANPHQXSJnuRABSC8SDkI-QCkX0wv99uEzTbMqW1-oeFeJkfdVrMjkOanLamQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const audioRecorderPlayer = new AudioRecorderPlayer();

const Main = () => {
  // const PositionAnimation = React.useRef(new Animated.Value(0)).current;
  const [color, setColor] = useRecoilState(CallingColorSelector);
  const [recording, setRecording] = useRecoilState(CallingRecordingSelector);
  const [log, setLog] = useRecoilState(CallingRecordSelector);

  const startAnimation = () => {
    setColor(colors.green);
    // Animated.timing(PositionAnimation, {
    //   toValue: 260,
    //   duration: 60 * 1000,
    //   useNativeDriver: true
    // }).start();
  };

  const stopAnimation = () => {
    setColor(colors.gray500);
    // Animated.timing(PositionAnimation, {
    //   toValue: 0,
    //   duration: 0,
    //   useNativeDriver: true
    // }).start();
  };

  const getWhisper = async (data: string) => {
    try{
      const form = new FormData();
      form.append("model", "whisper-1");
      form.append("file", {
        uri: data,
        type: "audio/mpeg",
        name: "audio.mp3"
      });
      const response = await axios.post(
        "https://api.openai.com/v1/audio/transcriptions",
        form,
        {
          headers: {
            "Authorization": "Bearer " + env.OPENAI_API_KEY,
            "Content-Type": "multipart/form-data",
          }
        }
      );
      return response.data.text;
    } catch(e) {
      console.log(e);
      return "whisper error";
    }
  };

  const onStartRecord = async () => {
    console.log("onStartRecord");
    return await audioRecorderPlayer.startRecorder();
  };
  
  const onStopRecord = async () => {
    console.log("onStopRecord");
    return await audioRecorderPlayer.stopRecorder();
  };

  const onPress = async () => {
    if(recording) {
      setRecording(false);
      stopAnimation();
      const url = await onStopRecord();
      const result = await getWhisper(url);
      setLog([...log, {
        type: "me",
        text: result,
      }]);
      console.log(result);
    }
    else {
      setRecording(true);
      startAnimation();
      await onStartRecord();
    }
  };

  return (
    <TouchableOpacity 
      style={styles.box}
      onPress={onPress}
    >
      <Image source={{ uri: src }} style={styles.image} />
      <Animated.View style={{
        ...styles.gradient,
        backgroundColor: color,
        // transform: [
        //   {
        //     translateY: PositionAnimation
        //   }
        // ]
      }} />
    </TouchableOpacity>
  );
};

export default Main;