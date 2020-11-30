import React, { useState, useEffect } from "react";
// import axios from "axios";
import { View, Text, TouchableWithoutFeedback, FlatList } from "react-native";
// import NavButtons from "../../../components/NavButtons";
import StoryCard from "../../../components/StoryCard";
import styles from "@styles/styles";
import NavHome from "../../../components/NavHome";
import { share } from "../tempStories.js";

export default function Share({ route, navigation }) {
  const [stories, setStories] = useState(route.params.stories);
  // const title = route.params.nav.replace(/([A-Z])/g, ' $1').trim()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
      }}
    >
      <NavHome />
      <Text style={[styles.title, { marginTop: 0 }]}>Share Something</Text>
      <FlatList
        style={{ marginBottom: 40, marginTop: "-5%" }}
        contentContainerStyle={{
          alignSelf: "center",
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
        }}
        data={share}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          console.log("item", item);

          return (
            <TouchableWithoutFeedback>
              <StoryCard item={item} />
            </TouchableWithoutFeedback>
          );
        }}
      />
      {/* <NavButtons
        screen="Recommended"
        userId={route.params.activeUser}
        kidName={route.params.kidName}
      /> */}
    </View>
  );
}
