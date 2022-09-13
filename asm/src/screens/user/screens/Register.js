import React, { useState, useContext } from 'react'
import { ToastAndroid, StyleSheet, Text, View, Image, TextInput,
     Pressable, KeyboardAvoidingView, ScrollView } from 'react-native'
import { UserContext } from '../UserContext';

export const Register = (props) => {
    const { navigation } = (props);

    const { onRegister } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const register = async () => {
        if (confirmPassword.trim() == password.trim()) {
            const res = await onRegister(email, password, confirmPassword);
            if (res == true) {
                ToastAndroid.show('ĐĂNG KÝ THÀNH CÔNG, BẠN CÓ THỂ ĐĂNG NHẬP', ToastAndroid.BOTTOM);
                navigation.goBack();
            } else {
                ToastAndroid.show('TÀI KHOẢN ĐÃ TỒN TẠI', ToastAndroid.BOTTOM);
            }
        } else {
            ToastAndroid.show('MẬT KHẨU KHÔNG TRÙNG KHỚP', ToastAndroid.BOTTOM);
        }
    }


    return (
        // <KeyboardAvoidingView>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.imageContainer2}>
                    <Image style={styles.image2} source={require('../../../assets/images/logo.png')} />
                </View>
                <View style={styles.plantaContainer}>
                    <Text style={styles.planta}>SIGN UP</Text>
                </View>
                <View style={styles.sloganContainer}>
                    <Text style={styles.slogan}>isi identitas kamu yuk!</Text>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.textTopInput}>Email</Text>
                    <TextInput
                        value={email} onChangeText={setEmail}
                        placeholder='Email' style={styles.textInput} />
                    <Text style={styles.textTopInput}>Password</Text>
                    <TextInput
                        value={password} onChangeText={setPassword}
                        placeholder='Password' style={styles.textInput} />
                    <Text style={styles.textTopInput}>Confirm Password</Text>
                    <TextInput
                        value={confirmPassword} onChangeText={setConfirmPassword}
                        placeholder='Confirm Password' style={styles.textInput} />
                    <Pressable style={styles.button} onPress={register}>
                        <Text style={styles.login}>Đăng ký</Text>
                    </Pressable>
                    {/* <Pressable style={styles.button}>
                        <Text style={styles.login}>Đăng ký</Text>
                    </Pressable> */}
                </View>
                <View style={styles.registerContainer}>
                    <Text onPress={() => navigation.goBack()} style={styles.register}>Đăng nhập</Text>
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
    textTopInput:{
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '400',
        color: '#979797',
        marginTop: 10,
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
        fontSize: 18,
        lineHeight: 20,
        fontWeight: '400',
        color: '#979797',
    },
    slogan: {
        marginLeft: 43,
        marginTop: 16,
    },
    planta: {
        color: 'black',
        fontSize: 24,
        fontWeight: '700',
    },
    plantaContainer: {
        alignItems: 'flex-start',
        marginTop: 30,
        marginLeft: 43
    },
    image2: {
        width: 95,
        height: 63,
    },
    imageContainer2: {
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    }
})