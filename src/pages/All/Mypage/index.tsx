import * as Kakao from "@react-native-seoul/kakao-login";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import { useRecoilState } from "recoil";

import Icon_Prev from "@/assets/icons/prev.svg";
import LoadingSpinner from "@/components/LoadingSpinner";
import Text from "@/components/Text";
import { userAtom } from "@/utils/states";

import { StackParamList as ParentsStackParamList } from "../types";

import styles from "./styles";


type props = NativeStackScreenProps<ParentsStackParamList, "Mypage">;
const Mypage = ({ navigation }: props) => {
  const [userInfo, setUserInfo] = useRecoilState(userAtom);
  const [loading, setLoading] = React.useState(false);
  
  const renew = async () => {
    setLoading(true);
    try{
      const getKakaoProfile = await Kakao.getProfile();
      if(getKakaoProfile) {
        setUserInfo(getKakaoProfile);
      }
      setLoading(false);
      navigation.navigate("Alert", {
        title: "다시 불러오기 완료",
        context: "카카오 프로필 정보를 다시 불러왔습니다.",
        buttonText: "확인"
      });
    }
    catch(e) {
      setLoading(false);
      navigation.navigate("Alert", {
        title: "다시 불러오기 실패",
        context: "카카오 프로필 정보를 다시 불러오는데 실패했습니다.",
        buttonText: "확인"
      });
    }
  };

  const infoItems = [
    {
      title: "아이디",
      content: userInfo.id
    },
    {
      title: "이름",
      content: userInfo.nickname
    },
    {
      title: "이메일",
      content: userInfo.email
    },
  ];

  return (
    <>
      <LoadingSpinner show={loading} />
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.top}>
          <TouchableOpacity
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            onPress={() => navigation.goBack()}
            style={styles.prev}
          >
            <Icon_Prev />
          </TouchableOpacity>
          <Text style={styles.title}>내 정보</Text>
          <TouchableOpacity
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            onPress={renew}
          >
            <Text style={styles.edit}>다시 불러오기</Text>
          </TouchableOpacity>
        </View>
      
        <View style={styles.container}>
          <View style={styles.profile}>
            <Image source={{ uri: userInfo.profileImageUrl }} style={styles.profileImage} />
            <View style={styles.profileText}>
              <Text style={styles.nickname}>{userInfo.nickname}</Text>
              <Text style={styles.calling}>총 통화 시간 {"19:00:21"}</Text>
            </View>
          </View>

          <View style={styles.userInfo}>
            {
              infoItems.map((item, index) => (
                <View style={styles.userInfoItem} key={index}>
                  <Text style={styles.userInfoItemTitle}>{item.title}</Text>
                  <Text style={styles.userInfoItemContent}>{item.content}</Text>
                </View>
              ))
            }
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Mypage;
