import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';

//redux
// import { useSelector, useDispatch, Provider } from 'react-redux';
// import {
//   updateUser
// } from './redux-component/redux-slice';
// import Store from './redux-component/store-redux';

//icons
import { AntDesign } from '@expo/vector-icons';

export default function PageLogin({ nav }) {

    //username & password val
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    //promise to register new user -------------------------------------------------------------
    const [load, setLoad] = useState(false);
    const updateLoad = async () => {
        setLoad(true)
    }

    //navigate to register page
    const GoToRegister = () => {
        nav.replace('Register');
    }

    //navigate to dashboard page
    const GoToDashboard = () => {
        nav.replace('DashboardStack')
    }

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.container}
            >
                <View >

                    <View style={styles.loginCard1}>
                        <Text style={styles.loginText1}>DS system</Text>
                        <Text style={styles.loginText2}>Platform to manage your business !</Text>
                    </View>


                    {/**INPUT USERNAME AND PASSWORD FOR LOGIN */}

                    <TextInput
                        placeholder='Email'
                        style={styles.loginInput1}
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />

                    <TextInput
                        placeholder='Password'
                        style={styles.loginInput1}
                        value={pass}
                        onChangeText={text => setPass(text)}
                        secureTextEntry
                    />


                    <TouchableOpacity
                        onPress={GoToDashboard}
                    >
                        {load ?
                            <View style={[styles.loginButton1, styles.loading]}>
                                <AntDesign name="loading1" size={24} color="white" />
                            </View>
                            : <View style={styles.loginButton1}>
                                <Text style={styles.loginText3}>Login</Text>
                            </View>
                        }


                    </TouchableOpacity>

                    <View style={styles.loginCard2}>
                        <Text style={styles.loginText4}>Are you new?  </Text>
                        <TouchableOpacity
                            onPress={GoToRegister}
                        >
                            <Text style={styles.loginText5}>Sign Up</Text>
                        </TouchableOpacity>
                        <Text style={styles.loginText4}>  now !</Text>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginCard1: {
        alignItems: 'center',
        //backgroundColor: 'orange',
        padding: 16,
        marginBottom: 24,
    },
    loginCard2: {
        alignItems: 'center',
        //backgroundColor: 'orange',
        marginBottom: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8,
    },
    loginText1: {
        fontSize: 34,
        fontWeight: 'bold'
    },
    loginText2: {
        fontSize: 18,
        opacity: 90,
    },
    loginText3: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    loginText4: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 6,
    },
    loginText5: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 6,
        fontWeight: 'bold',
    },
    loginInput1: {
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderWidth: 1,
        marginTop: 12,
        borderRadius: 12,
    },
    loginButton1: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginTop: 18,
        borderRadius: 50,
        backgroundColor: '#1A3C40',
        alignItems: 'center',
    },
    loginButton2: {
        borderRadius: 50,
        backgroundColor: 'grey',
        //alignItems: 'center',
    },
    loading: {
        paddingVertical: 16,
    },
});