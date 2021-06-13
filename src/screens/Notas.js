import React, {useEffect, useState} from 'react'
import {View, FlatList, StyleSheet, Text, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Table, Row,TableWrapper, Rows, Cell, Col, Cols} from 'react-native-table-component';

export default function Notas({route}){
  const userId = route.params.user;
  //state de um vetor para receber disciplinas do Firestore
  const [disciplinas, setDisciplinas] = useState('[]');

  const tableHead = ['Disciplinas', '1ª', '2ª', '3ª','4ª'];
  const cursos = ['Portugues', 'matematica', 'Fisíca', 'Quimica', 'Biologia','Portugues', 'matematica', 'Fisíca', 'Quimica', 'Biologia','Portugues', 'matematica', 'Fisíca', 'Quimica', 'Biologia']
  const firstAvaliation = ['2','1', '2', '3', '4'];
  const tableData = [
    ['1', '2', '3','10'],
    ['1', '2', '3','10'],
    ['1', '2', '3','10'],
    ['1', '2', '3','10'],
    ['1', '2', '3','10'],
    ['1', '2', '3','10'],
    ['1', '2', '3','10'],
    ['1', '2', '3','10'],
    ['1', '2', '3','10'],
    ['1', '2', '3','10'],
    ['1', '2', '3','10'],
    ['1', '2', '3','10'],
    ['1', '2', '3','10'],
    ['1', '2', '3','10'],
    ['1', '2', '3','10'],
  ];

//  useEffect(()=>{
//    firestore().collection("users").doc(userId).onSnapshot( doc => {
//      
//    });
//  });

  /*const cursos = [
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
  ]*/

  function User({nameCurso}, {notaCurso}) {
    return(
      <View style={styles.item}>
        <Text style={styles.texto}>{nameCurso}: {notaCurso}</Text>
      </View>
    );
  }

  return(
  <SafeAreaView style={styles.container}>
    
    <ScrollView>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={tableHead} flexArr={[1.35, 1, 1, 1]}  style={styles.head} textStyle={{fontWeight: 'bold', textAlign: 'center', color:'#2E2FBF'}} />
        <TableWrapper style={styles.wrapper}>

          <Col data={cursos} style={styles.title}  textStyle={styles.text}/>
          <Rows data={tableData} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text}/>

        </TableWrapper>

      </Table>
    </ScrollView>
  </SafeAreaView>  
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
    wrapper: { 
      flexDirection: 'row' 
    },
    title: { 
      flex: 1, 
      backgroundColor: '#f6f8fa' ,
    },
    row: {  
      height: 40  
    },
    text: { 
      textAlign: 'center',
    },
    texto: {
      fontSize: 20,
      color: 'white',
    },
    headCursos: {  
      width: 100,
      backgroundColor: '#f1f8ff',
    },
    head: {
      height: 40,
    },
});