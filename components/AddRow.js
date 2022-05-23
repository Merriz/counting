import { useState } from "react";
import { View, TextInput, Keyboard } from "react-native";

import { CommonStyles } from "../styles/CommonStyles";
import { CountButton } from "./CountButton";

export const AddRow = ({ addNewCountable }) => {
  const [name, setName] = useState("");

  return (
    <View style={CommonStyles.row}>
      <TextInput placeholder="Enter name" onChangeText={setName} value={name} />
      <CountButton
        text="Add"
        submit={() => {
          Keyboard.dismiss(); //Minimizes keyboard on submit
          addNewCountable(name);
          setName("");
        }}
      />
    </View>
  );
};
