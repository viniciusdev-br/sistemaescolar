import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import Slider from '@react-native-community/slider'
import NumericInput from 'react-native-numeric-input'
import firestore from '@react-native-firebase/firestore'
export default function Refeitorio(){

    const [changeColor, setChangeColor] = useState(false);
    const [like, setLike] = useState(0);
    const [noLike, setNoLike] = useState(0);
    const [numberVoto, setNumberVoto] = useState(7.5);
    const [food, setFood] = useState("");
    const [notasFood, setNotasFood] = useState([]);
    const [votoConfirmed, setVotoConfirmed] = useState(false);
    const [imageFood, setImageFood] = useState('');

    useEffect(()=>{
        firestore().collection("refeitorio").doc("lanche").onSnapshot( doc => {
            setFood(doc.data().foodNow);
            setImageFood(doc.data().imageFood);
        })
        firestore().collection("refeitorio").doc("avaliacao").onSnapshot( doc => {
            setLike(doc.data().like)
            setNoLike(doc.data().noLike)
            setNotasFood(doc.data().notas)
        })
    });

    var votoGostei = like;
    var votoNaoGostei = noLike;
    var novaNota = notasFood;
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.textTitle}>Prato do dia!</Text>
                <Image style={styles.imageFood} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/projeto-terzinha.appspot.com/o/aroz-com-galinha.jpg?alt=media&token=7cccd367-14b6-40f2-bba1-933d499118db',}}/>
                <Text style={styles.textNome}>{food}.</Text>
                <Text style={{fontSize:16, alignSelf: 'center'}}>Por favor, avalie a comida depois de experimentar!</Text>
                <View style={styles.likeGroup}>
                    <TouchableOpacity style={styles.btnLike} activeOpacity={0.5}
                        onPress = {() => {
                            if (changeColor){
                                alert("Você já votou, por favor dê uma nota também.");
                            }else{
                                alert("Obrigado pelo Feedback e que bom que você gostou!");
                                votoGostei += 1;
                                console.log(votoGostei);
                                setChangeColor(true);
                                firestore().collection("refeitorio").doc("avaliacao").update({like: votoGostei})
                            }
                        }}     
                    >
                        <Image style={styles.btnLikeIcon} source={require('../../assets/like-png.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnLike} activeOpacity={0.5}
                        onPress = {() => {
                            if (changeColor){
                                alert("Você já votou, por favor dê uma nota também.");
                            }else{
                                alert("Obrigado pelo Feedback");
                                votoNaoGostei += 1;
                                setChangeColor(true);
                                firestore().collection("refeitorio").doc("avaliacao").update({noLike: votoNaoGostei})
                            }
                        }} 
                    >
                        <Image style={styles.btnNoLikeIcon} source={require('../../assets/like-png.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.likeGroup}>
                    <NumericInput 
                        onChange={value => setNumberVoto(value)}
                        minValue={5}
                        maxValue={10}
                        value={numberVoto}
                        valueType='real'
                        leftButtonBackgroundColor='#f9896d'
                        rightButtonBackgroundColor='#219ebc' 
                        rounded={true}
                    />
                    <Slider
                        style={{width: 200, height: 50}}
                        minimumValue={5}
                        maximumValue={10}
                        minimumTrackTintColor="#219ebc"
                        maximumTrackTintColor="#2E2FBF"
                        value={numberVoto}
                        onValueChange={value => {
                            setNumberVoto(value);
                            console.log(value);
                        }}
                        disabled={true}
                    />
                </View>
                <TouchableOpacity style={styles.btnSendVoto}
                    onPress = {() => {
                        if (votoConfirmed){
                            alert("Você já deu uma nota: " + numberVoto)
                        }else if(numberVoto != null){
                            novaNota.push(numberVoto);
                            firestore().collection("refeitorio").doc("avaliacao").update({notas: novaNota});
                            alert("Resposta enviada");
                            setVotoConfirmed(true);
                        }else{
                            alert("Digite um número válido.")
                        }
                    }}
                >
                    <Text style={{fontSize: 18, color:'white', fontWeight: 'bold', textAlign: 'center'}}>Enviar voto agora!</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 24,
        backgroundColor: '#A0C2E2',
        borderRadius: 7,
        width: '90%',
        textAlign: 'center',
        color: 'white',
        paddingVertical: 5,
        marginTop: 20,
        alignSelf: 'center'
    },
    imageFood: {
        width: '90%',
        height: 300,
        borderRadius: 10,
        marginTop: 10,
        alignSelf: 'center'
    },
    textNome: {
        fontSize: 24,
        margin: 15,
        alignSelf: 'center'
    },
    likeGroup: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        justifyContent: 'center',
        padding: 10,
        marginBottom: 10
    },
    btnLike: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: 'white',
        marginHorizontal: 10
    },
    btnLikeIcon: {
        width: '90%',
        height: '90%',
        borderRadius: 100,
    },
    btnNoLikeIcon: {
        width: '90%',
        height: '90%',
        transform: [{ rotate: '180deg'}]
    },
    btnSendVoto: {
        backgroundColor: '#2E2FBF',
        width: '50%',
        borderRadius: 7,
        padding: 10,
        alignSelf: 'center',
        marginBottom: 15
    }
});