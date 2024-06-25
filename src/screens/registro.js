import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const registro = ({ navigation }) => {
    <View style={styles.container}>
        <View>
            <Image
                style={{
                    resizeMode: 'cover',
                    height: 100,
                    width: 200,
                }}
                source={require('../../assets/logo.png')}
            />
            <Text>resizeMode : cover</Text>
        </View>
    </View>
}