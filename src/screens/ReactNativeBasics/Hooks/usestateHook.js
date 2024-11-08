import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const UseStateHook = () => {
    const [value, setValue] = useState(0)
    
    const increaseCount = () => {
        setValue(value + 1)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.countText}>{value}</Text>
            <TouchableOpacity style={styles.button} onPress={() => increaseCount()}>
                <Text style={styles.buttonText}>Increase Count</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UseStateHook

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5', 
        padding: 20,
    },
    countText: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333', 
    },
    button: {
        backgroundColor: '#4CAF50', 
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        elevation: 5, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff', 
        textAlign: 'center',
    }
})
