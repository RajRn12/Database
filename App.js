import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import * as SQLite from 'expo-sqlite';
import Constants from 'expo-constants';
import styles from './styles/master-style-sheet';
import Item from './components/item';

export default function App() {
    const [db, setDb] = useState(null)


    // connect to the database
    useEffect(() => {
        let db = null;
        if (Platform.OS === 'web') {
            db = {
                transaction: () => {
                    return {
                        executeSql: () => {

                        }
                    }
                }
            }
        }
        else {
            db = SQLite.openDatabase('todo.db')
        }
        setDb(db);
        console.log(db);

        // create the table if it doesn't exist
        db.transaction((tx) => {
            tx.executeSql(
            "create table if not exists item (id integer primary key not null, done int, value text);"
            )
        })
    }, [])

    const addRecord = () => { }
    const readRecord = () => { }
    const updateRecord = () => { }
    const deleteRecord = () => { }

    return (
    <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <ScrollView style={styles.scrollArea}>
              <Item itemId={1} itemText={'item 1'} />
              <Item itemId={2} itemText={'item 2'} />
              <Item itemId={3} itemText={'item 3'} />
          </ScrollView> 
      <StatusBar style="auto" />
    </View>
  );
}

