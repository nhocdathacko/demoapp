import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, 
    KeyboardAvoidingView, ScrollView, ToastAndroid } from 'react-native';
import { UserContext } from '../UserContext';

export const Login = (props) => {
    const { navigation } = (props);
    const { onLogin } = useContext(UserContext); 

    const [email, setEmail] = useState('admin321@gmail.com');
    const [password, setPassword] = useState('321');
    const onLoginPress = async () => {
        const res = await onLogin(email, password);
        if (res == false) {
            ToastAndroid.show('Login failed', ToastAndroid.TOP);
        }
    }

    return (
        // <KeyboardAvoidingView>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                {/* <View style={styles.imageContainer2}>
                    <Image style={styles.image2} source={require('../../../assets/images/logo.png')} />
                </View> */}
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../../assets/images/SignIn.png')} />
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Email'
                        style={styles.textInput} />
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Password'
                        secureTextEntry={true}
                        style={styles.textInput} />
                    <Pressable
                        onPress={onLoginPress}
                        // onPress={() => navigation.navigate('ProductNavigation')}
                        style={styles.button}>
                        <Text style={styles.login}>Đăng nhập</Text>
                    </Pressable>
                </View>
                <View style={styles.registerContainer}>
                    <Text onPress={() => navigation.navigate('Register')} style={styles.register}>Đăng ký</Text>
                </View>
            </View>
        </ScrollView>
        // </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    register: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        color: '#FC9101',

    },
    registerContainer: {
        marginTop: 11,
        alignItems: 'center',
    },
    login: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 22,
    },
    button: {
        width: '100%',
        height: 68,
        borderRadius: 38,
        backgroundColor: '#FC9101',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        height: 68,
        lineHeight: 20,
        borderRadius: 15,
        backgroundColor: '#F2F3F7',
        marginVertical: 4,
        paddingHorizontal: 10,
        fontWeight: '300',
        fontSize: 16,
        color: '#A1A4B2'
    },
    formContainer: {
        paddingHorizontal: 32,
        marginTop: 10,
    },
    sloganContainer: {
        fontSize: 12,
        lineHeight: 24,
        alignItems: 'center',
    },
    slogan: {
        paddingHorizontal: 26,
        marginTop: 16,
    },
    planta: {
        color: '#007537',
        fontSize: 35,
        fontWeight: 'bold',
    },
    plantaContainer: {
        alignItems: 'center',
        marginTop: 28,
    },
    image2: {
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer2: {
        alignItems: 'center',
         
    },
    imageContainer: {
        // borderWidth: 1,
        // borderColor: 'red',
        width: '100%',
        height: 430,  
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    }
})