import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import firestore from '@react-native-firebase/firestore';
/*
  O banco de dados do aluno irá fornecer o percentual de faltas que o aluno têm
  Caso haja uma falta, será possível ver data, e horário da falta do aluno
*/
export default function Frequencia({route}){
  const userId = route.params.user;
  const [diasIncompletos, setDiasIncompletos] = useState(0);
  const [ultimasFaltas, setUltimasFaltas] = useState([]);

  useEffect(() => {
    firestore().collection("users").doc(userId).onSnapshot( doc => {
      setDiasIncompletos(((200 - doc.data().diasIncompletos)*100)/200)
    });
    firestore().collection("users").doc(userId).onSnapshot( doc => {
      setUltimasFaltas(doc.data().dataFaltas);
    })
  });
  
  //var user = firebase.auth().currentUser; 
  const data = [diasIncompletos,100-diasIncompletos];
  
  const pieData = data.map((value, index) => ({
    value,
    key: `${index}-${value}`,
    svg:{
      fill: index==0?'#2E2FBF':'#ff7151'
    }
  }));
  return(
    <View style={styles.container}>
      <PieChart 
        style={styles.chart} 
        data={pieData}     
      />
      <View style={styles.chartPresent}>
        <Text style={{color:'#FFFFFF', fontSize:20}}>{diasIncompletos}% de presença</Text>
      </View>

      <View style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        marginHorizontal: 30,
        padding: 11,
        alignItems: 'center',
      }}>
        <Text style={{
          color: '#2e2fbf',
          fontSize: 18,
          fontWeight: 'bold',
        }}>Últimas faltas: </Text>
      </View>

      <View style={styles.tabelaFaltas}>
        <Text style={styles.faltas}>27/05/2021</Text>
        <View style={{height:1, backgroundColor:"#FFFFFF", width:200}}></View>
        <Text style={styles.faltas}>28/05/2021</Text>
        <View style={{height:1, backgroundColor:"#FFFFFF", width:200}}></View>
        <Text style={styles.faltas}>29/05/2021</Text>
        <View style={{height:1, backgroundColor:"#FFFFFF", width:200}}></View>
        <Text style={styles.faltas}>30/05/2021</Text>
        <View style={{height:1, backgroundColor:"#FFFFFF", width:200}}></View>
        <Text style={styles.faltas}>31/05/2021</Text>
        <View style={{height:1, backgroundColor:"#FFFFFF", width:200}}></View>
        <Text style={styles.faltas}>01/06/2021</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F2F2',
    },
    chart: {
      height: 200,
      margin: 30,
      paddingVertical: 10,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
    },
    chartPresent:{
      backgroundColor: '#85B2DD',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      width: '60%',
      borderRadius: 7,
      paddingVertical: 5,
      marginBottom: 30,
    },
    tabelaFaltas: {
      backgroundColor: '#ff7151',
      borderRadius: 7,
      marginHorizontal: 30,
      padding: 11,
      alignItems: 'center',
    },
    faltas:{
      color: '#FFFFFF',
      fontSize: 18,
    },
    item: {
      backgroundColor: '#85B2DD',
      padding: 13,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 5,
    },
  });