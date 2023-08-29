import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity, View } from "react-native";

import { CancelButton, ConfirmButton } from "@/components/Buttons";
import Text from "@/components/Text";
import { StackParamList } from "@/pages/types";

import styles from "./styles";


type props = NativeStackScreenProps<StackParamList, "Confirm">;
const AlertModal = ({ route, navigation }: props) => {
  const { title, context, confirmButtonText, cancelButtonText, onConfirm, onBeforeConfirm, onCancel, onBeforeCancel } = route.params;
  const [width, setWidth] = React.useState<number>(0);
  const close = () => navigation.goBack();
  return (
    <View style={styles.viewParents}>
      <TouchableOpacity style={styles.background} onPress={close} />
      <View style={styles.view}>
        <View style={styles.header}>
          {title && <Text style={styles.title}>{title}</Text>}
          {context && <Text style={styles.context}>{context}</Text>}
        </View>
        <View
          style={styles.buttons} 
          onLayout={(e) => {
            const { width } = e.nativeEvent.layout;
            setWidth(width);
          }}
        >
          <CancelButton 
            text={cancelButtonText} 
            style={{ width: (width - 8) / 2 }}
            onPress={async () => {
              if (onBeforeCancel) await onBeforeCancel();
              close();
              if(onCancel) await onCancel();
            }}
          />
          <ConfirmButton 
            text={confirmButtonText} 
            style={{ width: (width - 8) / 2 }}
            onPress={async () => {
              if (onBeforeConfirm) await onBeforeConfirm();
              close();
              if(onConfirm) await onConfirm();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AlertModal;
