import axios from "axios";
import FormData from "form-data";
import React from "react";
import { Animated, Image, TouchableOpacity } from "react-native";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import { useRecoilState, useSetRecoilState } from "recoil";

import env from "@/../.env.json";
import colors from "@/utils/colors";
import { CallingColorSelector, CallingRecord, CallingRecordSelector, CallingRecordingSelector, CallingStopSelector } from "@/utils/states";

import styles from "./styles";

const audioRecorderPlayer = new AudioRecorderPlayer();

const Main = ({
  photo
}: {
  photo: string;
}) => {
  // const PositionAnimation = React.useRef(new Animated.Value(0)).current;
  const [color, setColor] = useRecoilState(CallingColorSelector);
  const [recording, setRecording] = useRecoilState(CallingRecordingSelector);
  const setLog = useSetRecoilState(CallingRecordSelector);
  const [stop, setStop] = useRecoilState(CallingStopSelector);

  React.useEffect(() => {
    if(stop) {
      setStop(false);
      onStopRecord();
    }
  }, [stop]);

  const startAnimation = () => {
    setColor(colors.green);
  };

  const stopAnimation = () => {
    setColor(colors.gray500);
  };

  const getWhisper = async (data: string) => {
    try{
      const form = new FormData();
      form.append("model", "whisper-1");
      form.append("language", "ko");
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
      setLog((p: CallingRecord[]) => [...p, {
        type: "other",
        text: "잘 못 들었어요. 다시 말씀해주세요.",
        recommend: p[p.length - 1].text,
      }]);
      return "";
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
      if(!result) return;
      setLog((p: CallingRecord[]) => [...p, {
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

  React.useEffect(() => {
    console.log(photo);
  }, [photo]);

  return (
    <TouchableOpacity 
      style={styles.box}
      onPress={onPress}
    >
      {photo && <Image source={{ uri: photo }} style={styles.image} />}
      <Animated.View style={{
        ...styles.gradient,
        backgroundColor: color,
      }} />
    </TouchableOpacity>
  );
};

export default Main;