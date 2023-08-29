import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity, View } from "react-native";

import Icon_Fill_All from "@/assets/icons/menu/fill/all.svg";
import Icon_Fill_Call from "@/assets/icons/menu/fill/call.svg";
import Icon_Fill_Home from "@/assets/icons/menu/fill/home.svg";
import Icon_Fill_Record from "@/assets/icons/menu/fill/record.svg";
import Icon_Nofill_All from "@/assets/icons/menu/nofill/all.svg";
import Icon_Nofill_Call from "@/assets/icons/menu/nofill/call.svg";
import Icon_Nofill_Home from "@/assets/icons/menu/nofill/home.svg";
import Icon_Nofill_Record from "@/assets/icons/menu/nofill/record.svg";
import { StackParamList, StackString } from "@/pages/types";

import Text from "../Text";

import styles from "./styles";

const menuList = [
  {
    name: "홈",
    path: "Home",
    icon: {
      fill: Icon_Fill_Home,
      nofill: Icon_Nofill_Home
    }
  },
  {
    name: "전화",
    path: "Call",
    icon: {
      fill: Icon_Fill_Call,
      nofill: Icon_Nofill_Call
    }
  },
  {
    name: "기록",
    path: "Record",
    icon: {
      fill: Icon_Fill_Record,
      nofill: Icon_Nofill_Record
    }
  },
  {
    name: "전체",
    path: "All",
    icon: {
      fill: Icon_Fill_All,
      nofill: Icon_Nofill_All
    }
  }
];

const Menu = ({ navigation, now }: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
  now: string;
}) => {
  const selected = menuList.findIndex(menu => menu.path === now);
  return (
    <View style={styles.menu}>
      {
        menuList.map((menu, index) => (
          <TouchableOpacity 
            style={styles.menuItem} 
            key={index}
            onPress={() => navigation.navigate(menu.path)}
          >
            { selected === index ? <menu.icon.fill /> : <menu.icon.nofill /> }
            <Text style={[
              styles.menuItemText, 
              selected === index ? styles.menuItemTextActive : null
            ]}>{menu.name}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  );
};

export default Menu;