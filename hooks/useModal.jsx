import React, { useState } from "react";
import { View, Text } from "react-native";

export default function useModal(Component) {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  const Modal = (props) => <Component {...props} />;

  return { Modal, show, setShow, toggle };
}
