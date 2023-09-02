import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Linking, SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";

import Icon_Prev from "@/assets/icons/prev.svg";
import LoadingSpinner from "@/components/LoadingSpinner";
import Text from "@/components/Text";

import { StackParamList as ParentsStackParamList } from "../types";


import styles from "./styles";

type props = NativeStackScreenProps<ParentsStackParamList, "OpenSource">;
const OpenSource = ({ navigation }: props) => {
  const [loading, setLoading] = React.useState<boolean>(true);

  const [licensesJson, setLicensesJson] = React.useState<{
    name: string;
    license: string;
    description: string;
    homepage: string;
  }[]>([]);

  React.useEffect(() => {
    const getLicensesJson = async () => {
      const licensesJson = await require("@/../licenses.json");
      setLicensesJson(licensesJson);
      setLoading(false);
    };
    getLicensesJson();
  }, []);

  return (
    <>
      <LoadingSpinner show={loading} />
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.top}>
          <TouchableOpacity
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            onPress={() => navigation.goBack()}
          >
            <Icon_Prev />
          </TouchableOpacity>
          <Text style={styles.title}>오픈소스 라이센스 정보</Text>
        </View>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.licences}>
          {
            licensesJson.map((license, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.license}
                onPress={async () => {
                  const url = license.homepage.replaceAll("git+", "");
                  try{
                    await Linking.openURL(url);
                  }
                  catch(e){
                    navigation.navigate("Alert", {
                      title: "지원되지 않는 URL입니다.",
                      context: "해당 라이브러리를 검색해서 확인해주세요.",
                      buttonText: "확인",
                    });
                  }
                }}
              >
                <Text style={styles.licenseLicense}>{license.license}</Text>
                <Text style={styles.licenseName}>{license.name}</Text>
                <Text style={styles.description}>{license.description}</Text>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default OpenSource;
