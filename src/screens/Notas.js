import React, {useEffect, useState} from 'react'
import {View, FlatList, StyleSheet, Text, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Table, Row,TableWrapper, Rows, Cell, Col, Cols} from 'react-native-table-component';

export default function Notas({route}){
  const userId = route.params.user;
  //state de um vetor para receber disciplinas do Firestore
  const [disciplinas, setDisciplinas] = useState([]);
  const [ano, setAno]= useState('1ano');
  const [turma,setTurma] = useState('EN01208');
  const [tituloTurma,setTituloTurma] = useState('');
  const [nome, setNome] = useState('');
  const [firtsAvaliacao, setFirstAvaliaticao] = useState([]);
  const [secondAvaliacao, setSecondAvaliaticao] = useState([]);
  const [thirdAvaliacao, setThirdAvaliaticao] = useState([]);
  const [forAvaliacao, setForAvaliacao] = useState([]);

  useEffect(()=>{
    firestore().collection("users").doc(userId).onSnapshot( doc => {
      setAno(doc.data().ano);
      setTurma(doc.data().turma);
      setNome(doc.data().nome);

      setFirstAvaliaticao(doc.data().firtsAvaliacao);
      setSecondAvaliaticao(doc.data().secondAvaliacao);
      setThirdAvaliaticao(doc.data().thirdAvaliacao);
      setForAvaliacao(doc.data().forAvaliacao);
    });
    firestore().collection(ano).doc(turma).onSnapshot( doc => {
      setTituloTurma(doc.data().titleTurma);
      setDisciplinas(doc.data().disciplinas);
    })
  });
  const tableHead = ['Disciplinas', '1ª', '2ª', '3ª','4ª'];
  return(
  <SafeAreaView style={styles.container}>
    
    <ScrollView>
      <Text style={styles.titleAluno}>Turma {tituloTurma} | {nome}</Text>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={tableHead} style={styles.head} textStyle={{fontWeight: 'bold', textAlign: 'center', color:'#2E2FBF'}} />
        <TableWrapper style={styles.wrapper}>
          {/*Coluna com disciplinas*/}
          <Col data={disciplinas} style={styles.title}  textStyle={styles.text}/>
          {/*Colunas para cada avaliação do aluno*/}
          <Col data={firtsAvaliacao} style={styles.row} textStyle={styles.text}/>
          <Col data={secondAvaliacao} style={styles.row} textStyle={styles.text}/>
          <Col data={thirdAvaliacao} style={styles.row} textStyle={styles.text}/>
          <Col data={forAvaliacao} style={styles.row} textStyle={styles.text}/>
        </TableWrapper>

      </Table>
    </ScrollView>
  </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
    },
    titleAluno: {
      alignSelf: 'center',
      marginVertical: 8,
      fontSize: 18,
      color:'#85B2DD',
      fontWeight:'bold',
    },
    wrapper: { 
      flexDirection: 'row' 
    },
    title: { 
      flex: 1, 
      backgroundColor: '#f6f8fa',
      height: '100%',
    },
    row: {  
      height: '100%',
    },
    text: { 
      textAlign: 'center',
    },
    headCursos: {  
      width: 100,
      backgroundColor: '#f1f8ff',
    },
    head: {
      height: 40,
    },
});