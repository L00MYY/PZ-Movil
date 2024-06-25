import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

const Boton = ({textoBoton, accionBoton}) =>{
    return(
        <TouchableOpacity onPress={accionBoton} style={styles.button}>
            <Text style = {styles.buttonText}>{textoBoton}</Text>
        </TouchableOpacity>
    ); 
}

export default Boton; 

const styles = StyleSheet.create({

    
})