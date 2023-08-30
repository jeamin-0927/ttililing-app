import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity, View } from "react-native";

import Text from "@/components/Text";
import { StackParamList } from "@/pages/types";

import styles from "./styles";


type props = NativeStackScreenProps<StackParamList, "Alert">;
const AlertModal = ({ route, navigation }: props) => {
  const { title, context, buttonText, onClose, onBeforeClose } = route.params;
  const close = () => navigation.goBack();
  return (
    <View style={styles.viewParents}>
      <TouchableOpacity style={styles.background} onPress={close} />
      <View style={styles.view}>
        <View style={styles.header}>
          {title && <Text style={styles.title}>{title}</Text>}
          {context && <Text style={styles.context}>{context}</Text>}
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity 
            onPress={async () => {
              if (onBeforeClose) await onBeforeClose();
              close();
              if(onClose) await onClose();
            }}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Text style={styles.confirm}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AlertModal;
