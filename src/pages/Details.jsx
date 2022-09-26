import { StyleSheet, View } from "react-native";

const Details = (name, hp, cp, picture, types, created) => {
  return (
      <View style={styles.container}>
        {pokemons.map((poke, id) => (
        <View>
            <Text>{poke.name}</Text>
            <Image style={styles.picture} source={{ uri: poke.picture }} />
            <Text>Points de vie : {poke.hp}</Text>
            <Text>Points de compétence : {poke.cp}</Text>
            <Text>Type et sorte de pokemon: : {poke.types}</Text>
            <Text>Créer le : {poke.created}</Text>
        </View> ))}
    </View>)

};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "black",
    color:"white",
    justifyContent: "center",
    alignItems: "center",
  },
  picture: {
    width: 300,
    height: 200,
    margin: 10,   
  },
});
export default Details;
