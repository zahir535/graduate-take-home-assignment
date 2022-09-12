import { StyleSheet } from "react-native";

const full_width = '100%';

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
    },
    innerContainer:{
        flex: 1,
        width: full_width,
    },
    textTitle:{
        color: '#333',
        fontSize: 18,
    },

    //start of styles for header
    horizontalViewTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 5,
    },
    textHeader: {
        fontSize: 32,        
        fontWeight: 'bold',
        marginBottom: 10,
    },

    //START of button 
    addButton: {
        marginBottom: 20,
    },

    //START of modal styles
    addInfoButton: {
        marginTop: 50,
        padding: 12,
    },
    modalToggle: {
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#333',
        alignSelf: 'center',
        // alignSelf: 'center',
    },
    input: {
        padding: 12,
        marginTop: 12,
        backgroundColor: '#333',
        borderRadius: 10,
    },
    errorText: {
        marginLeft: 12,
        fontWeight: 'bold',
        color: 'crimson',
        fontSize: 14,
    },
    formContainer: {
        flex: 1,
    }

});
