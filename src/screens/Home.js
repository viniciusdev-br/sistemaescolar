import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import firestore from '@react-native-firebase/firestore';

import Noticias from './Noticias';
import Frequencia from './Frequencia';
import Turma from './Turma';
import Refeitorio from './Refeitorio';
import Notas from './Notas';

const Tab = createBottomTabNavigator();

export default function Home(){

    useEffect(()=> {
        /*const userDocument = firestore().collection("users").doc(userId).onSnapshot(documentSnapshot => {
            alert('user data: ', documentSnapshot.data());
        });
        return () => subscriber();*/
        const fetchPosts =  async() => {
            try{
                firestore().collection('users').get().then((querySnapshot) => {
                    alert('Total de alunos: ', querySnapshot.size);
                });
            }catch(e){
                alert(e);
            }
        }
    });

    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Noticas" 
                component={Noticias} 
                options={{
                    tabBarIcon: () => (<Entypo name="news" size={30} color="#2E2FBF" />)
                }}
            />
            <Tab.Screen 
                name="Frequencia" 
                component={Frequencia} 
                options={{
                    tabBarIcon: () => (<Icon name="poll" size={30} color="#2E2FBF" />)
                }}
                />   
            <Tab.Screen 
                name="Turma" 
                component={Turma}
                options={{
                    tabBarIcon: () => (<Icon name="marker" size={30} color="#2E2FBF" />)
                }}
            />
            <Tab.Screen 
                name="Refeitorio" 
                component={Refeitorio} 
                options={{
                    tabBarIcon: () => (<Icon name="laugh-beam" size={30} color="#2E2FBF" />)
                }}
            />
            <Tab.Screen 
                name="Notas" 
                component={Notas} 
                options={{
                    tabBarIcon: () => (<Icon name="pray" size={30} color="#2E2FBF" />)
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    }
});