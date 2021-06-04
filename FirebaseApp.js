import Reac, {Component} from 'react';
import {View, Text} from 'react-native';

import firestore from '@react-native-firebase/firestore';



class FirebaseApp extends Component {
    constructor(props){
        super(props);
        this.getUser();
        this.subscriber = firebase()
    }
    getUser = async () => {
        const userDocument = firestore().collection("users").doc('AXdmVLUFGUOHAx6nBnM6').get()
        console.log(userDocument)
    }
    render() {
        return(
            <View>
                <Text>Olá Firebase.</Text>
            </View>
        );
    }
}

export default FirebaseApp