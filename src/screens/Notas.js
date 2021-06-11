import React, {useEffect, useState} from 'react'
import {View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function Notas({route}){
  const userId = route.params.user;
  //state de um vetor para receber disciplinas do Firestore
  const [disciplinas, setDisciplinas] = useState('[]');

//  useEffect(()=>{
//    firestore().collection("users").doc(userId).onSnapshot( doc => {
//      
//    });
//  });

  const cursos = [
    {name: 'Português', nota: 0},
    {name: 'Matenática', nota: 1},
    {name: 'Física', nota: 2},
    {name: 'Química', nota: 3},
    {name: 'Biologia', nota: 4},
    {name: 'História', nota: 5},
    {name: 'Geografia', nota: 6},
    {name: 'Ciênc. da Religião', nota: 7},
    {name: 'Ed. Física', nota: 8},
    {name: 'Informática', nota: 9},
  ]

  function User({nameCurso}, {notaCurso}) {
    return(
      <View style={styles.item}>
        <Text style={styles.texto}>{nameCurso}: {notaCurso}</Text>
      </View>
    );
  }

  return(
    <View style={styles.container}>
      <Text style={{fontSize:20, alignSelf:"center", marginBottom: 10, color:'#2E2FBF'}}>Notas de cada disciplina  : )</Text>
      <FlatList 
        data={cursos}
        renderItem={({item}) => <User nameCurso={item.name} notaCurso={item.nota}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 15,
    },
    item: {
      backgroundColor: '#85B2DD',
      padding: 13,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 5,
    },
    texto: {
      fontSize: 16,
      color: 'white',
    },
  });