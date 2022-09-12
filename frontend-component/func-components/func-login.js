//async
import AsyncStorage from '@react-native-async-storage/async-storage';

//handler to login
const LoginHandler = (email, pass, load) => {

    if (load == false) {
        if (pass == "" || email == "") {
            alert("Password & email cannot be empty");
        } else {

            //get data user registration from async
            let savedData = getData('user');
            return savedData != null ? true : false;
        }
    } else {
        //process already begun
        //user need to wait the loading of the data
        alert("Loading. Please wait !")
    }
}


//get value into async
const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)

        // value previously stored
        return value != null ? JSON.parse(value) : null;
    } catch (e) {
        // error reading value
    }
}


module.exports = LoginHandler;