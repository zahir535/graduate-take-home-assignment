//async
import AsyncStorage from '@react-native-async-storage/async-storage';

//handler to register new user 
const RegisterHandler = (name, email, pass, matchPass, load) => {

    //conditions to check validate the input for registration data
    if (pass != matchPass || name == "" || email == "") {
        if (pass != matchPass) {
            alert("Password not matched");
        }
        if (name == "") {
            alert("name cannot be empty");
        }
        if (email == "") {
            alert("email cannot be empty");
        }

    } else {

        if (load == false) {
            try {

                //save data in async
                let newValue = [name, email, pass, matchPass];
                // let newValue = {
                //     name: name,
                //     email: email,
                //     pass: pass,
                //     matchPass: matchPass,
                // };

                return storeData('user', newValue);

            } catch (e) {
                console.log(e)
            }
        } else {
            //process already begun
            //user need to wait the loading of the data
            alert("Loading. Please wait !")
        }
    }
}

//save value into async
const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
        return true;
    } catch (e) {
        // saving error
        return false;
    }
}

module.exports = RegisterHandler;