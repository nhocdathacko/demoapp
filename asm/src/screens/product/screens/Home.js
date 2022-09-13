import React, { useEffect, useState, useContext } from 'react'
import {
    StyleSheet, Text, View, Image,
    FlatList, Dimensions, Pressable, ScrollView, TextInput
} from 'react-native'
import { ProductContext } from '../ProductContext';

const Home = (props) => {  

    const { navigation } = props;

    const { onGetProducts, products } = useContext(ProductContext);
    // const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    //tự động chạy khi component được gọi
    useEffect(async () => { 
        setIsLoading(true);
        const res = await onGetProducts();
        // await onGetProducts();
        // setData(products);    
        setIsLoading(false);
        
        return () => {
            // res;
        };
    }, []);

    return (
        
        <View style={styles.container}>
            {
                isLoading == true ?
                    <View style={{flexDirection: 'column'}}>
                        <View style={styles.Top}>
                            <Image style={{ marginTop: 10 }} source={require('../../../assets/images/menu.png')} />
                            <Image source={require('../../../assets/images/logo.png')} />
                        </View>
                        <View style={styles.Search}>
                            <TextInput style={styles.textInput}
                                placeholder='Từ khóa tìm kiếm' />
                            <View style={styles.searchIcon}>
                                <Image
                                    style={styles.searchImg}
                                    source={require('../../../assets/images/search.png')} />
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent:'center', height: '100%'}}>
                            <Text style={{ textAlign: 'center', marginTop: 30, }}>Dang tai du lieu</Text>
                        </View>
                        
                    </View> :
                    <View>
                        <View style={styles.Top}>
                            <Image style={{ marginTop: 10 }} source={require('../../../assets/images/menu.png')} />
                            <Image source={require('../../../assets/images/logo.png')} />
                        </View>
                        <View style={styles.Search}>
                            <TextInput style={styles.textInput} 
                                placeholder='Từ khóa tìm kiếm' />
                            <View style={styles.searchIcon}>
                                <Image
                                    style={styles.searchImg}
                                    source={require('../../../assets/images/search.png')} />
                            </View>
                        </View>
                        <ScrollView contentContainerStyle={{
                            flexDirection: 'row',
                            flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 30, paddingBottom: 90
                        }}>
                            {
                                products.map((pro) => {
                                    const {_id, name, price } = pro;
                                    return (
                                        // 1 sản phẩm

                                        <Pressable key={() => _id} onPress={() => navigation.navigate('Detail', { id: _id })} style={[styles.product, shadowStyle]} >
                                            <View style={styles.productImageContainer}>
                                                <Image style={styles.productImage} resizeMode='cover'
                                                    source={{ uri: 'https://s4.nhattao.com/data/attachment-files/2022/01/17480647_iphone-13-pro-max-blue-select.png' }} />
                                            </View>
                                            <View style={styles.productNameContainer}>
                                                <Text numberOfLines={1} style={styles.productName}>{name}</Text>
                                            </View>
                                            <View style={styles.productPriceContainer}>
                                                <Text style={styles.productPrice}>{price}đ</Text>
                                            </View> 
                                        </Pressable>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
            }
        </View>
    )
}

export default Home
const shadowStyle = {
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: 'black'
}
const styles = StyleSheet.create({
    productPrice: {
        color: '#FF9900',
        fontSize: 20,
        fontWeight: '700',
    },
    productPriceContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    productName: {
        fontSize: 16,
        color: '#221F1F',
        fontWeight: '500',
    },
    productNameContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    productImage: {
        width: 105,
        height: 105,
        borderRadius: 8,
        backgroundColor: 'white',
        marginTop: 13,
    },
    productImageContainer: {

        width: '100%',
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',

    },
    product: {
        marginBottom: 16,
        // width: Dimensions.get('window').width / 2 - 30,
        width: 155,
        height: 190,
        marginBottom: 20,
        backgroundColor: '#EDEDED',
        borderRadius: 15,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4.84,
        shadowColor: "#000",
    },
    categoryContainer: {
        padding: 24,

    },
    searchImg: {
        height: 25,
        width: 25,
    },
    searchIcon: {
        height: 40,
        width: '19%',
        backgroundColor: '#FF9900',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        height: 40,
        width: '80%',
        paddingHorizontal: 10,
    },
    Search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        marginBottom: 20,
    },
    Top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    container: {
        width: '100%',
        // height: '100%',
        flexGrow: 1,
        backgroundColor: 'white',
    }
})
