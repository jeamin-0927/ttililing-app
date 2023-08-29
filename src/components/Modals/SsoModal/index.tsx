import React from "react";
import { View } from "react-native";
import { SwippableModal } from "react-native-swippable-modal";

import Text from "@/components/Text";

import styles from "./styles";
import { props } from "./types";


const SsoModal = ({ title, modalRef, children }: props) => {
  return (
    <SwippableModal 
      ref={modalRef} 
      closeThreadSoldValue={50} 
      modalStyle={styles.modal}
      modalInnerContainerStyle={styles.innerContainer}
      modalContainerStyle={styles.container}
      modalLineStyle={styles.line}
    >
      <View style={styles.titleView}>
        <View />
        <Text style={styles.title}>{title}</Text>
        <View />
      </View>
      {children}
    </SwippableModal>
  );
};

export default SsoModal;