import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        flexDirection: 'row',
        gap: Dimensions.get("window").width * 0.10,
    },
    image: {
        width: 150,
        height: 150,
        margin: 5, 
    },
    quest: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 5
    },
    containerButtons: {
        margin: 10,
    },
    
    textButtonWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 50,
        padding: 10,
        backgroundColor: 'transparent',
        width: Dimensions.get("window").width * 0.90,
        marginBottom: 30,
    },

    iconButton: {
        color: "black",
        marginRight: 10,
        fontSize: 30
    },
    textInput: {
        flex: 1, 
        color: "black",
        fontWeight: "bold",
        fontSize: 12,
        textAlign: 'center',
        height: 40,
    },

    buttonTest: {
        backgroundColor: "#c6d8f0",
        padding: 10,
        borderRadius: 50,
        textAlign: 'center',
        width: Dimensions.get("window").width * 0.90,
    },

    buttonAndSound: {
        flexDirection: 'row',
        gap: 5
    },

    buttonWithIcon: {
        flexDirection: "row",
        alignItems: "center",
    },      

    iconSound: {
        color: "black",
        marginRight: 10,
    }
});
