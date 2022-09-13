import React, { useState, useContext, useEffect } from 'react';
import {
    StyleSheet, Text, View, Image,
    FlatList, Dimensions, Pressable, ScrollView, TextInput
} from 'react-native'
import { UserContext } from '../../user/UserContext';
import { ProductContext } from '../ProductContext'



const Detail = (props) => {
    // const { _id, name, price, quantity, released, image, description, category_id } = data;
    const { navigation, route: { params: { id } } } = props;
    console.log("id: " + id);

    const { userId, addFavorit} = useContext(UserContext);
    const { onGetProductById, product } = useContext(ProductContext);
    // const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [user_id, setUserId] = useState('');
    const [data, setData] = useState([]);

    useEffect(async () => {
        // setIsLoading(true);
        const res = await onGetProductById(id);
        setUserId(await userId);
        const res2 = await onGetFavorit(User_id);
        setData(res);

        // setIsLoading(false);
        return () => {
            // res;
        };
    }, []);
    const { _id, name, image, price, description, quantity, category_id } = product;

    const isHeart = false;
    const isUrlImg = "../../../assets/images/Heart.png";
    const userFavorit = () => {
        if (isHeart == false){
            addFavorit(data);
            isUrlImg = "../../../assets/images/HeartHover.png";
        }else{

            isUrlImg = "../../../assets/images/Heart.png";
        }
        
    }
    if(!_id) return (<></>)

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
                    <Image
                        
                        style={styles.backImag}
                        resizeMode='cover'
                        source={require('../../../assets/images/Vector.png')} />
                </Pressable>
                <Pressable style={styles.favorit} onPress={(userFavorit)}>
                    <Image
                        style={styles.favoritImg}
                        resizeMode='cover'
                        source={require("../../../assets/images/Heart.png")} />
                </Pressable>
            </View>
            <View style={styles.product}>
                <View style={styles.productImg}>
                    <Image style={styles.productImage} resizeMode='cover' 
                        source={{uri:'https://cdn.tgdd.vn/comment/50584386/iphone-13-pro-max-1-2BM86T.jpg' }} />
                </View>
                <View style={styles.productInfor}>
                    <View style={styles.price}>
                        <Text style={styles.priceText}>{price}Đ</Text>
                    </View>
                    <View style={styles.information}>
                        <Text style={styles.nameText}>{name}</Text>
                        <Text style={styles.category}>{category_id.name}</Text>
                        <Text style={styles.quantity}>Số lượng: {quantity}</Text> 
                        <Text style={styles.description}>Mô tả: {description}</Text>
                    </View>
                </View>
                <View style={styles.button}>
                    <Pressable style={styles.buttonCart}>
                        {/* <Text style={styles.cartText}>Add cart</Text> */}
                        <Image
                        style={styles.cartText}
                        resizeMode='cover'
                        source={require('../../../assets/images/cart.png')} />
                    </Pressable>
                    <Pressable style={styles.buttonBuy}>
                        <Text style={styles.buyText}>BUY NOW</Text>
                    </Pressable>
                </View>
                
            </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    cartText: {
        // fontSize: 20,
        // fontWeight: '600',
        // color: 'white',
        // textAlign: 'center',
    },
    buttonCart: {
        width: 100,
        height: 63,
        borderRadius: 10,
        backgroundColor: '#E05500',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buyText: {
        fontSize: 20,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
    },
    buttonBuy: {
        width: 250,
        height: 63,
        borderRadius: 10,
        backgroundColor: '#C31700',
        justifyContent: 'center',
    },
    button:{
        height: 70,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 15,
        paddingHorizontal: 10,
    },
    description: {
        fontSize: 15,
        fontWeight: '300',
        color: 'black',
        marginBottom: 7,
        maxHeight: '55%',

    },
    quantity: {
        fontSize: 17,
        fontWeight: '400',
        color: 'gray',
        marginBottom: 7,
    },
    category: {
        fontSize: 17,
        fontWeight: '600',
        color: 'black',
        marginBottom: 7,
    },
    nameText: {
        fontSize: 28,
        fontWeight: '600',
        color: 'white',
        marginBottom: 7,
    },
    information: {
        height: '90%',
        width: '100%',
        marginTop: 34,
        paddingHorizontal: 10,

    },
    priceText: {
        fontSize: 22,
        fontWeight: '700',
        color: 'black',
    },
    price: {
        paddingHorizontal: 20,
        paddingVertical: 7,
        backgroundColor: '#FFB61D',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 7,
        top: -10,
    },
    productInfor: {
        position: 'relative',
        paddingHorizontal: 10,
        height: '37%',
    },
    productImage: {
        height: 200,
        width: 250,
    },
    productImg: {
        paddingVertical: 20,
        height: 250,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    product: {
        backgroundColor: '#FC9101',
        height: '100%'
    },
    favoritImg: {
        marginTop: 15,
        width: '35%',
    },
    favorit: {
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: '#FC9101',
        width: 80,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backImag: {
        width: '40%',
        height: '40%',
    },
    goBack: {
        width: 55,
        height: 55,
        borderWidth: 1,
        borderColor: '#EBEAEC',
        borderRadius: 38,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    top: {
        marginTop: 0,
        paddingLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
    }
})

var data = {
    "_id": 88,
    "name": "Raspberries - Frozen",
    "price": 88,
    "quantity": 91,
    "released": "2021-03-31",
    "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-1-3.jpg",
    "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "category_id": {
        "_id": 1,
        "name": "Plaintain",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
    }
}