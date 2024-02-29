import { useEffect, useState } from 'react';
import { Pressable, Text } from 'react-native';
import styles from '../styles/master-style-sheet';

export default Item = ({ itemId, itemText }) => {

    return(
        <Pressable
            styles={[styles.item]}
            onPress={() => { }}
            key={itemId}
        >
            <Text style={[styles.itemText]}>{itemText}</Text>
        </Pressable>
    )
} 