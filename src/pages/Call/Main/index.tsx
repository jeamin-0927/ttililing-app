import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";

import Icon_Foward from "@/assets/icons/foward.svg";
import Icon_New from "@/assets/icons/new.svg";
import Menu from "@/components/Menu";
import Text from "@/components/Text";
import colors from "@/utils/colors";

import { StackParamList as ParentsStackParamList } from "../types";

import styles from "./styles";
import tabs, { Tab } from "./tabs";

type props = NativeStackScreenProps<ParentsStackParamList, "Main">;
const Main = ({ navigation }: props) => {
  const types = Object.keys(tabs) as Tab[];
  const [tab, setTab] = React.useState<Tab>(types[0]);
  const [menus, setMenus] = React.useState<{
    type: string;
    icon: string;
    name: string;
    topic: string;
  }[]>([]);

  React.useEffect(() => {
    const newMenus = [];
    for(let i = 0; i < tabs[tab].length; i++) {
      const menu = tabs[tab][i];
      if(!menu.length) continue;
      newMenus.push({
        type: "title",
        name: `${i + 1}단계`,
        icon: "",
        topic: ""
      });
      if(menu.length) {
        for(const subMenu of menu) {
          newMenus.push(subMenu);
        }
      }
      if(i !== tabs[tab].length - 1) {
        newMenus.push({
          type: "line",
          name: "",
          icon: "",
          topic: ""
        });
      }
    }
    setMenus(newMenus);
  }, [tab]);

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.title}>
        <Text style={styles.titleText}>전화하기</Text>
        
      </View>

      <ScrollView 
        style={styles.scrollHorizontal}
        horizontal={true}
      >
        <View style={styles.titleBottom}>
          {
            types.map((type, index) => (
              <TouchableOpacity 
                style={{
                  ...styles.unselected,
                  backgroundColor: tab === type ? colors.gray900 : colors.gray000,
                  borderColor: tab === type ? colors.gray000 : colors.gray500,
                }} 
                key={index}
                onPress={() => setTab(type)}
              >
                <Text style={{
                  ...styles.text,
                  color: tab === type ? colors.gray000 : colors.gray500,
                }}>{type}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollView2}
      >
        {
          menus.map((menu, index) => {
            if(menu.type === "btn") return (
              <TouchableOpacity
                style={styles.item}
                hitSlop={{ top: 12, bottom: 12, left: 10, right: 10 }}
                onPress={() => {
                  navigation.navigate("Received", {
                    topic: menu.topic as string,
                  });
                }}
                key={index}
              >
                <View style={styles.itemLeft}>
                  <View style={styles.itemIcon}>
                    <Text style={styles.iconText}>{menu?.icon}</Text>
                  </View>
                  <Text style={styles.itemText}>{menu?.name}</Text>
                </View>
                <Icon_Foward />
              </TouchableOpacity>
            );
            else if(menu.type === "line") return (
              <View style={styles.line} key={index} />
            );
            else if(menu.type === "title") return (
              <View style={styles.title} key={index}>
                <Text style={styles.littleTitleText}>{menu?.name}</Text>
              </View>
            );
          })
        }
      </ScrollView>

      <TouchableOpacity 
        style={styles.new}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        onPress={() => navigation.navigate("Calling")}
      >
        <Icon_New />
      </TouchableOpacity>
      <Menu navigation={navigation} now="Call" />
    </SafeAreaView>
  );
};

export default Main;
