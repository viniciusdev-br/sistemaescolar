import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput, Button } from 'react-native';
//import FirebaseUtil from '../utils/FirebaseUtil';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export  default function Login( { navigation } ){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(false);

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    const signIn = () => {
        auth().signInWithEmailAndPassword(email,password).catch((e) => {
            console.log(e);
            alert('Email ou senha inválidos');
        });
    };

    const signOut = () => {
        auth().signOut();
    };

    const data = {
        name: 'Los Angeles',
        state: 'CA',
        country: 'USA'
      };

    if (initializing) return null;

    if (!user){
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
                        onChangeText={setEmail} value={email}
                    />
    
                <Text style={{color: 'white', fontSize:18}}>Senha:</Text>
                <TextInput 
                    secureTextEntry={true} 
                    style={styles.textInput} 
                    placeholder="Digite sua senha aqui:"
                    onChangeText={setPassword} value={password}
                />
    
                <TouchableOpacity style={styles.customTouchable} onPress={()=> signIn()}>
                    <Text style={{fontSize:20, textAlign:'center', color:'white', padding: 7}}>
                        Login!
                    </Text>
                </TouchableOpacity>
                
            </View>
        );
    }else{
        navigation.navigate('Home');
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#85b2dd' }}>

            <Text style={{fontSize:20, color:"#FFFFFF"}} >Olá {user.uid}</Text>

            <Text style={{fontSize:16, color:"#FFFFFF"}} >Para fazer o logout aperte no botão abaixo :)</Text>

            <TouchableOpacity style={styles.customTouchable} onPress={()=> signOut()}>
                <Text style={{fontSize:20, textAlign:'center', color:'white', padding: 7}}>
                Logout
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop:20, backgroundColor: '#2E2FBF', width: "50%", borderRadius: 20}} onPress={()=> navigation.navigate('Home')}>
                <Text style={{fontSize:18, textAlign:'center', color:'white', padding: 7}}>
                Voltar para a Home ;)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:20, backgroundColor: '#2E2FBF', width: "50%", borderRadius: 20}} onPress={()=> firestore().collection('users').add({
                faltas: 10,
                idade: 21,
                nome:"Victor Botelho",
                userId:"hQ3xRwMXhIdITTUSAtJENnFhMln1"
            }).then(() => {
                alert("Usuário adicionado");
            })}>
                <Text style={{fontSize:18, textAlign:'center', color:'white', padding: 7}}>
                Adicione um novo usuário ;=)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{marginTop:20, backgroundColor: '#2E2FBF', width: "50%", borderRadius: 20}} 
                onPress={()=> 
                    firestore().collection('users').doc(String(user.uid)).set(data)
                }>
                <Text style={{fontSize:14, textAlign:'center', color:'white', padding: 7}}>
                    Veja quantos usuários temos na rede
                </Text>
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
        height: 35,
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