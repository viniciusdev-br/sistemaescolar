import auth from '@react-native-firebase/auth';

export default function FirebaseUtil() {
    signIn = (email, password) => {
        auth().signInWithEmailAndPassword(email,password);
    };
}