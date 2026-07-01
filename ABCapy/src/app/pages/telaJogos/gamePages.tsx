import { View, Pressable, Image, Text, ImageBackground } from "react-native";
import React from "react";
import { styles } from "./gameStyles";
import Capy1 from "../../../assets/images/gameImages/Capy1.png";
import telaJogos from "../../../assets/images/gameImages/telaJogos.png";
import CardGame from "../../../assets/components/gameComponents/cardGame";
import jogo1 from "../../../assets/images/gameImages/jogo1.png";
import jogo2 from "../../../assets/images/gameImages/jogo2.png"
import jogo3 from "../../../assets/images/gameImages/jogo3.png"

const gamePages = () => {
  return (
    <ImageBackground
      source={telaJogos}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.header}>
        <Pressable style={styles.botao}>
          <Text style={styles.btnText}>❮</Text>
        </Pressable>
      </View>
      <View style={styles.containerImg}>
        <Text style={styles.textStyle}>O que vamos jogar?</Text>
        <Image source={Capy1} style={styles.imgStyle} />
      </View>
      <CardGame
        text="Siga a ordem"
        image={jogo1}
        onPress={() => console.log("clicou")}
      />
      <CardGame
        text="jogo da memória"
        image={jogo2}
        onPress={() => console.log("clicou")}
      />
      <CardGame
        text="Jogo do igual"
        image={jogo3}
        onPress={() => console.log("clicou")}
      />
    </ImageBackground>
  );
};

export default gamePages;
