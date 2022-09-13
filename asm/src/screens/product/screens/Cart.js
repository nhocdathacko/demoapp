import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable, FlatList, Dimensions, Modal } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const CartItems = (props) => {

    const renderItem = ({ item }) => {
        const { product, quantity, price, checked } = item;
        return (
            <View style={styles.itemsContainer}>
                <View style={styles.checkedContainer}>
                    {
                        checked == true ?
                            <FontAwesome name="check-square-o" size={24} color="black" />
                            :
                            <Feather name="square" size={24} color="black" />
                    }

                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} resizeMode='cover'
                        source={{ uri: product.images[0] }} />
                </View>
                <View style={styles.infoContainer}>
                    <View>
                        <Text>{product.name}</Text>
                    </View>
                    <View>
                        <Text style={styles.priceText}>{product.price}$</Text>
                    </View>
                    <View style={styles.quantityAction}>
                        <Text
                            style={[styles.removeQuantity]}>-</Text>
                        <Text style={styles.quantity}>{quantity}</Text>
                        <Text style={styles.addQuantity}>+</Text>
                        <Text style={styles.delete}>Xóa</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            style={styles.flastlistContainer}
            keyExtractor={item => Math.random()}
            showsVerticalScrollIndicator={false}
        />
    )
}

const CheckOutModel = (props) => {
    const { isShowModal, setIsShowModal } = props;
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isShowModal}
        // onRequestClose={() => {
        //     Alert.alert('Modal has been closed.');
        //     setModalVisible(!modalVisible);
        // }}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    <Text style={styles.checkout}>Xác nhận thanh toán</Text>
                    <Pressable style={styles.checkoutButton}>
                        <Text style={styles.checkoutText}>Đồng ý</Text>
                    </Pressable>

                    <Text onPress={() => setIsShowModal(false)} style={styles.cancel}>Hủy bỏ</Text>

                </View>
            </View>
        </Modal>
    )
}
const DeleteModel = (props) => {
    const { isShowDeleteModal, setIsShowDeleteModal } = props;
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isShowDeleteModal}

        >
            <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    <Text style={styles.checkout}>Xác nhận xóa tất cả các đơn hàng</Text>
                    <Pressable style={styles.checkoutButton}>
                        <Text style={styles.checkoutText}>Đồng ý</Text>
                    </Pressable>

                    <Text onPress={() => setIsShowDeleteModal(false)} style={styles.cancel}>Hủy bỏ</Text>

                </View>
            </View>
        </Modal>
    )
}
const Cart = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

    const isShowCheckedOut = () => {
        const items = data.filter(item => item.checked == true) || [];
        let total = 0;
        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            total += element.quantity * element.price;
        }
        return { isShow: items.length > 0, total: total };
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <AntDesign name="left" size={24} color="black" />
                <Text style={styles.title}>Giỏ hàng</Text>
                <AntDesign onPress={() => setIsShowDeleteModal(true)} name="delete" size={24} color="black" />
            </View>
            <View>
                {
                    data.length == 0 ?
                        <View style={styles.titleContainer}>
                            <Text>Giỏ hàng của bạn đang trống</Text>
                        </View> : <CartItems />
                }
            </View>
            <View style={styles.checkoutContainer}>
                {
                    isShowCheckedOut().isShow == true ?
                        <>
                            <View style={styles.totalContainer}>

                                <Text style={styles.totalText}>Tạm tính: </Text>
                                <Text style={{color:"black", fontWeight: "bold"}}>{isShowCheckedOut().total}$</Text>
                            </View>
                            <Pressable onPress={() => setIsShowModal(true)} style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Thanh toán</Text>
                                <AntDesign name="right" size={24} color="white" />
                            </Pressable>
                        </> : <></>
                }

            </View>
            <CheckOutModel isShowModal={isShowModal} setIsShowModal = {setIsShowModal}/>
            <DeleteModel isShowDeleteModal={isShowDeleteModal} setIsShowDeleteModal = {setIsShowDeleteModal}/>

        </View>
    )
}

export default Cart
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        position: 'relative',
    },
    titleContainer: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    title: {
        fontSize: 16,
        textTransform: 'uppercase',
    },
    itemsContainer: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    checkedContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 17,
    },
    imageContainer: {
        width: 77,
        height: 77,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '80%',
        height: '80%',
    },
    infoContainer: {
        marginLeft: 15,
    },
    priceText: {
        color: 'green',
        fontSize: 16,
    },
    quantityAction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    removeQuantity: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        width: 27.5,
        height: 27.5,
        textAlign: 'center',
        lineHeight: 20.5,
        color: 'black',
    },
    checkColorRemove: {
        borderColor: 'gray',
        color: 'gray',
        opacity: 0.5,
    },
    quantity: {

    },
    addQuantity: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        width: 27.5,
        height: 27.5,
        textAlign: 'center',
        lineHeight: 20.5,
    },
    delete: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    checkoutContainer: {
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 3,
        width: '100%',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,


    },
    totalText: {
        opacity: 0.5,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        backgroundColor: '#E05500',
        borderRadius: 8,
        paddingHorizontal: 30,
        marginTop: 16,

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    flastlistContainer: {
        maxHeight: Dimensions.get('window').height - 200,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5,
        width: '90%',
        height: 200,
    },
    checkout: {
        color: 'black',
        fontSize: 16,
    },
    checkoutButton: {
        backgroundColor: '#E05500',
        height: 50,
        borderRadius: 7,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    checkoutText: {
        color: 'white',
        fontSize: 16,
    },
    cancel: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 8,
        color: 'black',
        
    }
})

var data = [
    {
        product: {
            "_id": "61d12f0c555401c8610fb8d1",
            "name": "Ambrosia ambrosioides (Cav.) Payne",
            "price": 10,
            "madein": "Indonesia",
            "quantity": 1547072381,
            "category": "61d11c4b86511f0016f490ed",
            "images": [
                "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
                "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
            ],
            "sold": 94,
            "size": "XS",
            "createdAt": "2021-05-20T00:40:04.000Z",
            "updatedAt": "2021-02-15T15:54:50.000Z"
        },
        quantity: 1,
        price: 10,
        checked: true,
    },
    {
        product: {
            "_id": "61d12f0c555401c8610fb8d2",
            "name": "Ambrosia ambrosioides (Cav.) Payne",
            "price": 1,
            "madein": "Indonesia",
            "quantity": 1547072381,
            "category": "61d11c4b86511f0016f490ed",
            "images": [
                "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
                "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
            ],
            "sold": 94,
            "size": "XS",
            "createdAt": "2021-05-20T00:40:04.000Z",
            "updatedAt": "2021-02-15T15:54:50.000Z"
        },
        quantity: 5,
        price: 1,
        checked: true,
    },
    {
        product: {
            "_id": "61d12f0c555401c8610fb8d3",
            "name": "Ambrosia ambrosioides (Cav.) Payne",
            "price": 7,
            "madein": "Indonesia",
            "quantity": 1547072381,
            "category": "61d11c4b86511f0016f490ed",
            "images": [
                "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
                "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
            ],
            "sold": 94,
            "size": "XS",
            "createdAt": "2021-05-20T00:40:04.000Z",
            "updatedAt": "2021-02-15T15:54:50.000Z"
        },
        quantity: 3,
        price: 7,
        checked: false,
    },
    {
        product: {
            "_id": "61d12f0c555401c8610fb8d4",
            "name": "Ambrosia ambrosioides (Cav.) Payne",
            "price": 7,
            "madein": "Indonesia",
            "quantity": 1547072381,
            "category": "61d11c4b86511f0016f490ed",
            "images": [
                "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
                "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
            ],
            "sold": 94,
            "size": "XS",
            "createdAt": "2021-05-20T00:40:04.000Z",
            "updatedAt": "2021-02-15T15:54:50.000Z"
        },
        quantity: 3,
        price: 7,
        checked: false,
    },
    {
        product: {
            "_id": "61d12f0c555401c8610fb8d5",
            "name": "Ambrosia ambrosioides (Cav.) Payne",
            "price": 7,
            "madein": "Indonesia",
            "quantity": 1547072381,
            "category": "61d11c4b86511f0016f490ed",
            "images": [
                "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
                "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
            ],
            "sold": 94,
            "size": "XS",
            "createdAt": "2021-05-20T00:40:04.000Z",
            "updatedAt": "2021-02-15T15:54:50.000Z"
        },
        quantity: 3,
        price: 7,
        checked: false,
    },
    {
        product: {
            "_id": "61d12f0c555401c8610fb8d6",
            "name": "Ambrosia ambrosioides (Cav.) Payne",
            "price": 7,
            "madein": "Indonesia",
            "quantity": 1547072381,
            "category": "61d11c4b86511f0016f490ed",
            "images": [
                "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
                "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
            ],
            "sold": 94,
            "size": "XS",
            "createdAt": "2021-05-20T00:40:04.000Z",
            "updatedAt": "2021-02-15T15:54:50.000Z"
        },
        quantity: 3,
        price: 7,
        checked: false,
    },
    {
        product: {
            "_id": "61d12f0c555401c8610fb8d7",
            "name": "Ambrosia ambrosioides (Cav.) Payne",
            "price": 7,
            "madein": "Indonesia",
            "quantity": 1547072381,
            "category": "61d11c4b86511f0016f490ed",
            "images": [
                "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
                "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
            ],
            "sold": 94,
            "size": "XS",
            "createdAt": "2021-05-20T00:40:04.000Z",
            "updatedAt": "2021-02-15T15:54:50.000Z"
        },
        quantity: 3,
        price: 7,
        checked: false,
    },
    {
        product: {
            "_id": "61d12f0c555401c8610fb8d8",
            "name": "Ambrosia ambrosioides (Cav.) Payne",
            "price": 7,
            "madein": "Indonesia",
            "quantity": 1547072381,
            "category": "61d11c4b86511f0016f490ed",
            "images": [
                "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
                "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
            ],
            "sold": 94,
            "size": "XS",
            "createdAt": "2021-05-20T00:40:04.000Z",
            "updatedAt": "2021-02-15T15:54:50.000Z"
        },
        quantity: 3,
        price: 7,
        checked: false,
    },
    {
        product: {
            "_id": "61d12f0c555401c8610fb8d9",
            "name": "Ambrosia ambrosioides (Cav.) Payne",
            "price": 7,
            "madein": "Indonesia",
            "quantity": 1547072381,
            "category": "61d11c4b86511f0016f490ed",
            "images": [
                "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
                "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
            ],
            "sold": 94,
            "size": "XS",
            "createdAt": "2021-05-20T00:40:04.000Z",
            "updatedAt": "2021-02-15T15:54:50.000Z"
        },
        quantity: 3,
        price: 7,
        checked: false,
    },
]