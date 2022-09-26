const { View, Text, StyleSheet, Button, Image } = require("react-native");
const { default: pokemons } = require("../models/pokemons/pokemons");

const HomePokemon = ({ navigation }) => {
  const list = pokemons;

  return list.map((poke, id) => (
    <View key={id} >
      
        <Image style={styles.picture} source={{ uri: poke.picture }} />
      
      <Text>{poke.name}</Text>
      <Button title="Plus de détails" onPress={console.log("ok")} />
    </View>
  ));
};

export default HomePokemon;

const styles = StyleSheet.create({

  picture: {
    width: 50,
    height: 50,
    margin: 10,
  },
});
