import React, { useEffect, useState, useContext } from 'react'
import {
    StyleSheet, Text, View, Image,
    FlatList, Dimensions, Pressable, ScrollView, TextInput
} from 'react-native'
import { UserContext } from '../../user/UserContext';
import { ProductContext } from '../ProductContext';

const Favorit = (props) => {

    const { navigation } = (props);

    const { onGetFavorit } = useContext(ProductContext);
    const { userId} = useContext(UserContext);
    const [data, setData] = useState([]);

    useEffect(async () => { 
        // setIsLoading(true);
        const User_id = await userId;
        const res = await onGetFavorit(User_id);
        setData(res);
        // setIsLoading(false);
        
        return () => {
            // res;
        };
    }, []);
    const { _id, name, image , user_id, price } = data;
    if(!_id) return (<></>)
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <View style={styles.titleIcon}>
                    <Image
                        style={styles.titleImg}
                        source={require('../../../assets/images/Vector.png')} />
                </View>
                <Text style={styles.titleText}>Favorit</Text>
            </View>
            <View style={styles.bodyNull}>
                <View style={styles.bodyImage}>
                    <Image
                        style={styles.Img}
                        source={require('../../../assets/images/logo.png')} />
                </View>
                <View style={styles.bodyText}>
                    <Text style={styles.text1}>Kamu belum nambahin apapun nih..</Text>
                    <Text style={styles.text2}>cari barang kesukaanmu yuk!</Text>
                </View>
                <Pressable onPress={() => navigation.navigate('Home')} style={styles.button}>
                    <Text style={styles.buttonText}>Oder</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Favorit

const styles = StyleSheet.create({
    buttonText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 17,
        color: 'white',
    },
    button: {
        width: 225,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#FC9101',
        justifyContent: 'center',
    },
    text2: {
        fontWeight: '400',
        fontSize: 17,
        color: 'black',
        textAlign: 'center'
    },
    text1: {
        fontWeight: '600',
        fontSize: 23,
        color: 'black',
        marginBottom: 45,
        textAlign: 'center',
    },
    bodyText: {
        width: 310,
        marginBottom: 53,
    },
    titleText: {
        width: '100%',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 18,
        color: '#000000',
    },
    titleImg: {},
    titleIcon: {
        width: '20%',
        position: 'absolute',
        left: 30,
        top: 7,
    },
    Img: {
        width: '100%',
        height: '100%',
    },
    bodyImage: {
        width: 266,
        height: 176,
        marginTop: 106,
        marginBottom: 45,
        alignItems: 'center',

    },
    bodyNull: {
        alignItems: 'center',
    },
    title: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        marginVertical: 30,
        paddingHorizontal: 30,
        position: 'relative',
    },
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
    }
})