import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

export default function Notas(){

    const DATA = [
        {
          id: '1',
          title: 'Português:',
        },
        {
          id: '2',
          title: 'Matemática:',
        },
        {
          id: '3',
          title: 'Fisíca:',
        },{
            id: '4',
            title: 'Química: ',
        },
        {
          id: '5',
          title: 'Biologia:',
        },
        {
          id: '6',
          title: 'Geografia:',
        },{
            id: '7',
            title: 'História:',
        },
        {
          id: '8',
          title: 'Artes:',
        },
        {
          id: '9',
          title: 'Ciencias da Religião:',
        },{
            id: '10',
            title: 'Ed. Física:',
        },
        {
          id: '11',
          title: 'Informática:',
        },
    ];

    const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    return(
        <SafeAreaView style={styles.container}>
            <View style={{alignSelf:'center'}}>
                <Text style={{fontSize:25, marginBottom:15}}>Disciplinas:</Text>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#85B2DD',
      padding: 13,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 5,
    },
    title: {
      fontSize: 16,
      color: 'white',
    },
  });