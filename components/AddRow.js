import { useState, useContext } from "react";
import { View, TextInput } from "react-native";

import { CountablesContext } from "../providers/CountablesProvider";
import { CommonStyles } from "../styles/CommonStyles";
import { CountButton } from "./CountButton";

export const AddRow = () => {
  const [name, setName] = useState("");
  const countablesContext = useContext(CountablesContext);

  return (
    <View style={CommonStyles.row}>
      <TextInput placeholder="Enter name" onChangeText={setName} />
      <CountButton
        text="Add"
        submit={() => {
          countablesContext.addNewCountable(name);
        }}
      />
    </View>
  );
};
