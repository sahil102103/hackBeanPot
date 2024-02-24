import './footer.css';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Footer() {
    return (
        <View style={styles.container}>
        <footer>
        <p>Author: Discount Bytes</p>
        <p><a href="mailto:hege@example.com">hege@example.com</a></p>
        </footer>
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
  })
