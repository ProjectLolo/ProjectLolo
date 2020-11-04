import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from "react-native";
import images from "@assets/images";
import { CText } from "@components/ctext";

export default function Login({ navigation }) {
  //On Login, user should login, token should be made and received. When token is there, will switch to KidCircle screen. (instead of navigate to Signup)

  return (
    <View style={{ flex: 1, justifyContent: "flex-start" }}>
      <Image
        style={{ width: null, resizeMode: "contain" }}
        source={images.peekabooLogo}
      />

      <CText h1 bold purple center title={"LOGIN SCREEN"} />
      <TouchableWithoutFeedback onPress={() => navigation.navigate("SignUp")}>
        <CText center title={"Press here to continue"} style={styles.top} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => navigation.navigate("Welcome")}>
        <CText center title={"back to welcome"} style={styles.top} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  top: { marginTop: 50 },
});
