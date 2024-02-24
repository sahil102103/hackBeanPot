import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Header() {
    return (
        <View >
            <nav className='header'>
            <h2 className='websiteName'> Discount Bytes</h2>

            <ul className='buttons'>
                <li className='listItem'><a href=''>Login</a></li>
                <li className='listItem'><a href=''>Signup</a></li>
            </ul>
            </nav>
        </View>
    );
}
