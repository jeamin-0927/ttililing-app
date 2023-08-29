import React from "react";
import { TouchableOpacity, View } from "react-native";

import NoSelected from "@/assets/icons/noSelected.svg";
import Selected from "@/assets/icons/selected.svg";
import Text from "@/components/Text";

import SsoModal from "../SsoModal";

import styles from "./styles";
import { props } from "./types";


const ListModal = ({ title, modalRef, list, selectState }: props) => {
  const [selected, setSelected] = selectState;
  return (
    <SsoModal title={title} modalRef={modalRef}>
      <View style={styles.list}>
        {
          list.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.listItem}
              onPress={() => {
                setSelected(index);
                modalRef.current?.hide();
              }}
            >
              {
                selected === index ? <Selected width={16} height={16} /> : <NoSelected width={16} height={16} />
              }
              <Text style={styles.listItemText}>{item}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    </SsoModal>
  );
};

export default ListModal;
