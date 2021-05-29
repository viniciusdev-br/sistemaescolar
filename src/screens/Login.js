import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput } from 'react-native';

export  default function Login( { navigation } ){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#85b2dd' }}>

            <Image source={require('../../assets/login-image.png')} style={styles.image}/>

            <View style={styles.backTitulo}>
                <Text style={styles.titulo}>Quem é você?</Text>
            </View>

            <Text style={{color: 'white', fontSize:18}}>Email:</Text>
                <TextInput style={styles.textInput}
                    placeholder="Digite seu email aqui: "
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

            <Text style={{color: 'white', fontSize:18}}>Senha:</Text>
            <TextInput secureTextEntry={true} style={styles.textInput} placeholder="Digite sua senha aqui:"/>

            <TouchableOpacity style={styles.customTouchable} onPress={ () => navigation.navigate('Home') }>
                <Text style={{fontSize:20, textAlign:'center', color:'white', padding: 7}} >Login!</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 210,
        height: 210,
        marginBottom: 10
    },
    titulo: {
        textAlign: 'center',
        fontSize: 28,
        color: '#85b2dd',
    },
    backTitulo: {
        alignItems:'center', 
        justifyContent:'center', 
        backgroundColor:'#fff', 
        width: "100%", 
        height: 60,
        margin: 20,
    },
    textInput: {
        backgroundColor: 'white',
        width: "65%",
        height: 30,
        borderRadius: 30,
        paddingLeft: 7,
        marginBottom: 10,
    },
    customTouchable: {
        marginTop:10,
        backgroundColor: '#2E2FBF',
        width: "30%",
        borderRadius: 30
    }
});