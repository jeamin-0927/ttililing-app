import React from "react";
import { TouchableOpacity } from "react-native";

import Text from "@/components/Text";

import styles from "./styles";
import { props } from "./types";

export const Button = ({ text, children, style, textStyle, ...props }: props) => (
  <TouchableOpacity style={[styles.button, style]} {...props}>
    {text && <Text style={[styles.buttonText, textStyle]}>{text}</Text>}
    {children}
  </TouchableOpacity>
);

export const ConfirmButton = ({ text, children, style, textStyle, ...props }: props) => (
  <TouchableOpacity style={[styles.button, styles.confirm, style]} {...props}>
    {text && <Text style={[styles.buttonText, styles.confirmText, textStyle]}>{text}</Text>}
    {children}
  </TouchableOpacity>
);

export const CancelButton = ({ text, children, style, textStyle, ...props }: props) => (
  <TouchableOpacity style={[styles.button, styles.cancel, style]} {...props}>
    {text && <Text style={[styles.buttonText, styles.cancelText, textStyle]}>{text}</Text>}
    {children}
  </TouchableOpacity>
);

export const SearchBoxButton = ({ text, children, style, textStyle, ...props }: props) => (
  <TouchableOpacity style={[styles.button, styles.searchBox, style]} {...props}>
    {text && <Text style={[styles.buttonText, styles.searchBoxText, textStyle]}>{text}</Text>}
    {children}
  </TouchableOpacity>
);

