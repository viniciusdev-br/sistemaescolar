import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider';


export default function Refeitorio(){

    const [changeColor, setChangeColor] = useState(false);
    const [voto, setVoto] = useState("");

    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>Prato do dia!</Text>
            <Image style={styles.imageFood} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/projeto-terzinha.appspot.com/o/aroz-com-galinha.jpg?alt=media&token=7cccd367-14b6-40f2-bba1-933d499118db',}}/>
            <Text style={styles.textNome}>Arroz com Firebase.</Text>
            <View style={styles.likeGroup}>
                <TouchableOpacity style={styles.btnLike} activeOpacity={0.5}
                    onPress = {() => {
                        console.log("GOSTEI");
                        if (changeColor){
                            alert("Você já votou, obrigado  ; ) \nVoto: " + voto)
                        }else{
                            alert("Obrigado pelo Feedback e que bom que você gostou!");
                            setVoto("Gostei!");
                            setChangeColor(true);
                        }
                    }}     
                >
                    <Image style={styles.btnLikeIcon} source={require('../../assets/like-png.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLike} activeOpacity={0.5}
                    onPress = {() => {console.log("NÃO GOSTEI")
                    if (changeColor){
                        alert("Você já votou, obrigado  ; ) \nVoto: " + voto);
                    }else{
                        alert("Obrigado pelo Feedback");
                        setVoto("Não gostei!");
                        setChangeColor(true);
                    }
                }} 
                >
                    <Image style={styles.btnNoLikeIcon} source={require('../../assets/like-png.png')}/>
                </TouchableOpacity>
            </View>
            <Slider
                style={{width: 200, height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
        </View>
        
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
        paddingVertical: 10,
    },
    imageFood: {
        width: '90%',
        height: '40%',
        borderRadius: 10,
        marginTop: 30,
    },
    textNome: {
        fontSize: 24,
        margin: 15,
    },
    likeGroup: {
        flexDirection: 'row',
        width: '100%',
        height: '15%',
        backgroundColor: '#caffbf',
        justifyContent: 'center',
        padding: 10,
    },
    btnLike: {
        width: '20%',
        height: '100%',
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
    }
});