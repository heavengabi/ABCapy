import { View, Pressable, Image, Text,ImageBackground } from "react-native";
import React from "react";
import { styles } from "./gameStyles";
import Capy1 from "../../../assets/images/gameImages/Capy1.png";
import papelParede from "../../../assets/images/gameImages/telaJogos.png"

const gamePages = () => {
  return (
    <ImageBackground
      source={papelParede}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.header}>
        <Pressable style={styles.botao}>
          <Text style={styles.btnText}>❮</Text>
        </Pressable>
      </View>


      <View style={styles.containerImg}>
        <Image source={Capy1} style={styles.imgStyle} />
      </View>
    </ImageBackground>
  );
};


export default gamePages;
