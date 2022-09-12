import { StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

//icons
import { AntDesign, MaterialCommunityIcons, Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';


export default function PageProfile({ navigation }) {



    //navigate to login page
    const GoToDashboard = () => {
        navigation.replace('Login')
    }

    return (
        <View style={styles.container}>

            {/**PROFILE PIC SECTION */}
            <View style={styles.topview}>
                <Image
                    style={styles.profileImg}
                    source={require('../../assets/splash.png')}
                />
                <View>
                    <Text style={styles.h3title}>Sandra</Text>
                    <Text style={styles.h4title}>Prime Minister</Text>
                </View>
            </View>

            {/**CONTACT DETAIL SECTION */}
            <View style={{ marginLeft: 30, marginTop: 30, }}>
                <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                    <AntDesign name="phone" size={30} color="black" />
                    <Text style={styles.pText}> +60 11 2345 6789</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 8, }}>
                    <MaterialCommunityIcons name="email-outline" size={30} color="black" />
                    <Text style={styles.pText}> something@email.com</Text>
                </View>
            </View>


            {/**LITTLE MENU SECTION */}
            <View style={{ marginTop: 40 }}>
                <View style={styles.card}>
                    <Ionicons name="ios-heart-sharp" size={32} color="black"
                        style={{ paddingLeft: 10, }}
                    />
                    <Text style={styles.cardText}>Your Favourite</Text>
                </View>
                <View style={styles.card}>
                    <MaterialIcons name="payment" size={32} color="black"
                        style={{ paddingLeft: 10, }}
                    />
                    <Text style={styles.cardText}>Payment</Text>
                </View>
                <View style={styles.card}>
                    <FontAwesome5 name="user-friends" size={32} color="black"
                        style={{ paddingLeft: 10, }}
                    />
                    <Text style={styles.cardText}>Tell Your Friend</Text>
                </View>
                <View style={styles.card}>
                    <Ionicons name="settings" size={32} color="black"
                        style={{ paddingLeft: 10, }}
                    />
                    <Text style={styles.cardText}>Setting</Text>
                </View>
                <TouchableOpacity
                    style={{ marginTop: 30, }}
                    onPress={GoToDashboard}
                >
                    <View style={styles.card}>
                        <Ionicons name="ios-heart-sharp" size={32} color="red"
                            style={{ paddingLeft: 10, }}
                        />
                        <Text style={[styles.cardText, { color: 'red' }]}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 16,
        marginTop: 30,
    },
    topview: {
        width: '100%',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 20,
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 60,
        marginRight: 20,
        backgroundColor: 'blue',
    },
    h3title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    h4title: {
        fontSize: 18,
    },
    pText: {
        fontSize: 16,
        fontWeight: '400',
        opacity: .5,
        marginLeft: 10,
    },
    card: {
        flexDirection: 'row',
        marginVertical: 5,
        paddingVertical: 7,
        // backgroundColor: 'lightblue',
        width: '100%',
        alignItems: 'center',

    },
    cardText: {
        fontSize: 16,
        fontWeight: '800',
        marginLeft: 10,
        color: 'black',
    },
});