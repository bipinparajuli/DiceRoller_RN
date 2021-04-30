import React,{useState} from "react"
import {Text,View,StyleSheet,Image, TouchableOpacity} from 'react-native';
import img1 from './Assers/dice1.png'
import img2 from './Assers/dice2.png'
import img3 from './Assers/dice3.png'
import img4 from './Assers/dice4.png'
import img5 from './Assers/dice5.png'
import img6 from './Assers/dice6.png'


const App = () => 
{
  const [state,setstate] = useState();

  var data = [img1,img2,img3,img4,img5,img6];

  const rollDice = () => {

    const rand = Math.floor( Math.random() * 6);

setstate(data[rand]);

  }

  return(
    <>
    <View style={styles.container}>
    <Image style={styles.images} source={state} />
    
    <TouchableOpacity onPress={rollDice}>
    <Text style={styles.text}>Roll Dice</Text>
    </TouchableOpacity>
    </View>
      </>
    
  )
}


const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"#8D3DAF",
  alignItems:"center",
  justifyContent:"center"
},text:{
  backgroundColor:"#758283",
  paddingHorizontal:40,
  paddingVertical:20,
  borderColor:"#E07C24",
  borderWidth:5
},images:{
height:200,
width:200,
marginBottom:20  
}

})


export default App;
