import React, {Component} from 'react'
import {Text, View} from 'react-native'
import styles from '../style/style'

export default function Footer() {
        return(
            <View style={styles.footer}>
                <Text style={styles.author}>
                   Author: Joni Rainio
                </Text>
            </View>
        )

}