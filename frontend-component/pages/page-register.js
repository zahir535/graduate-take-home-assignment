import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity, TextInput } from 'react-native';


//icons
import { AntDesign } from '@expo/vector-icons';

//register functions
const RegisterHandler = require('../func-components/func-register');


export default function PageRegister({ nav }) {

    //username & password val
    const [name, setName] = useState('user1');
    const [email, setEmail] = useState('user1@gmail.com');
    const [pass, setPass] = useState('123qwe!@asd');
    const [matchPass, setMatchPass] = useState('123qwe!@asd');

    //promise to register new user -------------------------------------------------------------
    const [load, setLoad] = useState(false);
    const updateLoad = async () => {
        setLoad(true)
    }

    //navigate to login page
    const GoToLogin = () => {
        nav.replace('Login');
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

                    <View style={styles.registerCard1}>
                        <Text style={styles.registerText1}>DS system</Text>
                        <Text style={styles.registerText2}>Platform to manage your business !</Text>
                    </View>


                    <TextInput
                        placeholder='Name'
                        style={styles.registerInput1}
                        value={name}
                        onChangeText={text => setName(text)}
                    />

                    <TextInput
                        placeholder='Email'
                        style={styles.registerInput1}
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />

                    <TextInput
                        placeholder='Password'
                        style={styles.registerInput1}
                        value={pass}
                        onChangeText={text => setPass(text)}
                        secureTextEntry
                    />

                    <TextInput
                        placeholder='Confirm Password'
                        style={styles.registerInput1}
                        value={matchPass}
                        onChangeText={text => setMatchPass(text)}
                        secureTextEntry
                    />


                    <TouchableOpacity
                        onPress={() => {

                            var validateRegistration = new Promise(function(resolve, reject){
                                const res = RegisterHandler(name, email, pass, matchPass, load);
                                resolve(res);
                            });

                            validateRegistration.then(function(value){
                                value == true ? GoToDashboard() : alert("Failed");
                            });

                        }}
                    >
                        {load ?
                            <View style={[styles.registerButton1, styles.loading]}>
                                <AntDesign name="loading1" size={24} color="white" />
                            </View>
                            : <View style={styles.registerButton1}>
                                <Text style={styles.registerText3}>Sign Up</Text>
                            </View>
                        }

                    </TouchableOpacity>

                    <View style={styles.registerCard3}>
                        <Text>Already have an account ?   </Text>
                        <TouchableOpacity
                            onPress={GoToLogin}
                        >
                            <Text style={styles.registerText6}>Log In</Text>
                        </TouchableOpacity>
                        <Text>  now !</Text>
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
    registerCard1: {
        alignItems: 'center',
        //backgroundColor: 'orange',
        padding: 16,
        marginBottom: 24,
    },
    registerCard2: {
        alignItems: 'center',
        //backgroundColor: 'orange',
        marginBottom: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8,
    },
    registerCard3: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    registerText1: {
        fontSize: 34,
        fontWeight: 'bold'
    },
    registerText2: {
        fontSize: 18,
        opacity: 90,
    },
    registerText3: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    registerText4: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 6,
    },
    registerText5: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 6,
        fontWeight: 'bold',
    },
    registerText6: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    registerInput1: {
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderWidth: 1,
        marginTop: 12,
        borderRadius: 12,
    },
    registerButton1: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginTop: 18,
        borderRadius: 50,
        backgroundColor: '#1A3C40',
        alignItems: 'center',
    },
    registerButton2: {
        borderRadius: 50,
        backgroundColor: 'grey',
        //alignItems: 'center',
    },
    loading: {
        paddingVertical: 16,
    },
});