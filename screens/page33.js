import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList,TouchableOpacity} from 'react-native';
//import { } from 'react-native-gesture-handler';



export default function Page33({navigation}) {
  const [station,setStation] = useState([
   // { name : 'Churchgate' , id : '1'},
    { name : 'Marine Lines' , id : '2'},
    { name : 'Mumbai Central' , id : '3'},
    { name : 'Dadar' , id : '4'},
    { name : 'Bandra' , id : '5'},
    { name : 'Andheri' , id : '6'},
    { name : 'Goregoan' , id : '7'},
    { name : 'Borivali' , id : '8'},
    { name : 'Dahisar' , id : '9'},
    { name : 'Bhayander' , id : '10'},
    { name : 'Vasai' , id : '11'},
    { name : 'Virar' , id : '12'},
  ]);

  const goToPage4 = (stationName)=>{
    navigation.navigate('Page4',
    {virar: navigation.getParam('virar','') , churchgate: navigation.getParam('churchgate','') ,
     station: stationName});
  }

    return (
      <View style={styles.container}>
        <FlatList 
        keyExtractor= {(item) => item.id}
        data={station}
        renderItem={({item}) => (
       <TouchableOpacity onPress={() => goToPage4(item.name)}>
           <Text style={styles.txt} > {item.name} </Text>
         </TouchableOpacity>
          )}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      paddingTop: 1,
      paddingHorizontal : 10
    },
    txt:{
      paddingTop: 10,
      paddingBottom:10,
      paddingLeft : 70,
      paddingRight: 70,
      textAlign : "center",
      backgroundColor: '#fff',
      fontSize : 20,
      marginTop : 7,
      borderRadius : 5,
      fontWeight : "bold"
    }
  });