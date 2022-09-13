import React from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { UserContext } from '../../user/UserContext';

const Profile = (props) => {
    const { navigation } = props;
    const { userId, addFavorit} = useContext(UserContext);
    useEffect(async () => {
        // setIsLoading(true);
        
        
        // setIsLoading(false);
        return () => {
            // res;
        };
    }, []);
    const { _id, name, address, phone, avatar, email, dob } = data;
    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>Profile</Text>
            <View style={styles.infoContainer}>
                <View style={styles.avatarContainer}>
                    {
                        avatar.trim().length == 0 ?
                            <FontAwesome5 name="user-circle" size={24} color="black" /> :
                            <Image
                                source={{ uri: avatar }}
                                resizeMode='cover'
                                style={styles.avatar} />
                    }
                </View>
                <View style={styles.nameContainer}>
                    <Text numberOfLines={1} style={styles.name}>{name}</Text>
                    <Text numberOfLines={1} style={styles.email}>{email}</Text>
                </View>
            </View>
            <View style={styles.actionContainer}>
                <Text style={styles.actionTittle}>Chung</Text>
                <Text  style={styles.action}>Chỉnh sửa thông tin</Text>
                <Text  style={styles.action}>Lịch sử giao dịch</Text>
                <Text style={styles.actionTittle}>Ứng dụng</Text>
                <Text style={[styles.action, styles.logout]}>Đăng xuất</Text>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    logout: {
        color: '#FF0000'
    },
    action: {
        fontSize: 16,
        marginTop: 15,
    },
    actionTittle: {
        color: '#7F7F7F',
        fontSize: 16,
        borderBottomColor: '#ABABAB',
        borderBottomWidth: 1,
        marginTop: 16
    },
    actionContainer: {
        marginTop: 32,
    },
    email: {
        fontSize: 14,
        color: '#7F7F7F'
    },
    name: {
        fontSize: 16,
    },
    nameContainer: {
        marginLeft: 26,
    },
    avatar: {
        width: "80%",
        height: "80%",
        borderRadius: 20,
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 15,
        alignItems: 'center',
    },
    tittle: {
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 32,
        paddingHorizontal: 48,
    }
})

var data = {
    _id: "61dd764db4c902001617bf50",
    name: "Đinh Quốc Đạt",
    address: "406 Cộng Hòa, Quận Tân Bình",
    phone: "0767434341",
    dob: "23/07/2000",
    avatar: "https://i.pinimg.com/564x/3a/b2/71/3ab271e4fe8ea06c9bea387dcad8e298.jpg",
    email: "dinhquocdat2000@gmail.com",
    createdAt: "2022-01-11T12:21:33.794Z",
    updatedAt: "2022-01-11T12:21:33.794Z",
    __v: 0
}