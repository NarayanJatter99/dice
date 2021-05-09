import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import diceone from './assets/dice1.png';
import dicetwo from './assets/dice2.png';
import dicethree from './assets/dice3.png';
import dicefour from './assets/dice4.png';
import dicefive from './assets/dice5.png';
import dicesix from './assets/dice6.png';

const App = () => {
  const [a, seta] = useState(0);
  const [uri, setUri] = useState(dicefive);

  let dicechane = () => {
    let b = Math.floor(Math.random() * 7);

    switch (b) {
      case 1:
        setUri(diceone);
        seta(1);
        break;
      case 2:
        setUri(dicetwo);
        seta(2);
        break;
      case 3:
        setUri(dicethree);
        seta(3);
        break;
      case 4:
        setUri(dicefour);
        seta(4);
        break;
      case 5:
        setUri(dicefive);
        seta(5);
        break;

      default:
        setUri(dicesix);
        seta(6);
        break;
    }
  };
  return (
    <View style={style.container}>
      <Image source={uri} style={style.img} />
      <TouchableOpacity onPress={dicechane}>
        <Text style={style.btntext}>Click</Text>
      </TouchableOpacity>
      <Text style={style.value}>value:{a}</Text>
    </View>
  );
};
export default App;
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    marginTop: 15,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
  },
  img: {
    height: 100,
    width: 100,
  },
  value: {
    marginTop: 10,
    color: 'white',
    fontSize: 30,
    textTransform:"uppercase",
  },
});
