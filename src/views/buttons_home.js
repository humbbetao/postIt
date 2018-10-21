import Expo from 'expo';
import React, {Component} from 'react';
import {
  StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, StatusBar, TextInput
} from 'react-native';
import {Button, ButtonGroup, Input} from 'react-native-elements'
import { Font } from 'expo';
const SCREEN_WIDTH = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/FontAwesome';

class Buttons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            selectedIndexes: [0, 2, 3]
        };
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.contentView}>
                    <View style={[styles.headerContainer, {backgroundColor: '#2060CC'}]}>
                        <Button
                            title='Vender'
                            loading={false}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={{backgroundColor: '#2060CC'}}
                            titleStyle={{fontWeight: 'normal', fontSize: 11}}
                            containerStyle={{marginVertical: 10, height: 30, width: 60, borderWidth: 0}}
                            onPress={() => console.log('aye')}
                            underlayColor="transparent"
                        />
                        <Button
                            title='Catálogo'
                            loading={false}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={{backgroundColor: '#2060CC'}}
                            titleStyle={{fontWeight: 'normal', fontSize: 11}}
                            containerStyle={{marginVertical: 10, height: 30, width: 65, borderWidth: 0,}}
                            onPress={() => console.log('aye')}
                            underlayColor="transparent"
                        />
                        <Button
                            title='Fipe & KBB'
                            loading={false}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={{backgroundColor: '#2060CC'}}
                            titleStyle={{fontWeight: 'normal', fontSize: 11}}
                            containerStyle={{marginVertical: 10, height: 30, width: 75, borderWidth: 0}}
                            onPress={() => console.log('aye')}
                            underlayColor="transparent"
                        />
                        <Button
                            title='Financiar'
                            loading={false}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={{backgroundColor: '#2060CC'}}
                            titleStyle={{fontWeight: 'normal', fontSize: 11}}
                            containerStyle={{marginVertical: 10, height: 30, width: 65, borderWidth: 0}}
                            onPress={() => console.log('aye')}
                            underlayColor="transparent"
                        />
                        <Button
                            title='Revista'
                            loading={false}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={{backgroundColor: '#2060CC'}}
                            titleStyle={{fontWeight: 'normal', fontSize: 11}}
                            containerStyle={{marginVertical: 10, height: 30, width: 60, borderWidth: 0}}
                            onPress={() => console.log('aye')}
                            underlayColor="transparent"
                        />
                    </View>
                    <View style={styles.mainContainer}>
                        <Text style={{textAlign: 'left', marginTop: 20, width: '100%', fontWeight:'bold', marginLeft: 25, color: '#7c7c7c', fontSize: 16}}>
                            Olá, qual carro você deseja?
                        </Text>
                        <View style={styles.viewContainerInputBox}>
                            <TextInput
                                style={{ height: 45, width: "95%", paddingLeft: 5, paddingRight: 5 }}
                                placeholder="Ex: Gol 1996"
                                labelStyle={{marginTop: 16}}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    <View style={styles.viewContainer}>
                        <TouchableOpacity style={styles.BanneriMatch} activeOpacity={0.5}>
                          <Image
                          source={require('../../assets/images/imatch.png')}
                          style={styles.BanneriMatchImage}
                          />
                          <Text style={{fontSize: 15,color: '#fff',textAlign: 'left', justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 18, width: 180}}>Encontramos o carro que é a sua cara! #Deumatch</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    contentView: {
        flex: 1,
    },
    centering: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        borderWidth: 0,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
    },
    yourRecommend: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
        height: 230,
        borderWidth: 0,
    },
    viewContainerInputBox: {
        justifyContent: 'center',
        width: SCREEN_WIDTH -20,
        marginTop: 10,
        marginBottom: 20,
        borderWidth: 0,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
         borderRadius: 2,
         borderColor: '#ddd',
         borderBottomWidth: 0,
         shadowColor: '#000',
         shadowOffset: { width: 0, height: 1 },
         shadowOpacity: 0.8,
         shadowRadius: 2,
         elevation: 2
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
        borderWidth: 0,
    },
    viewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
        borderWidth: 0,
    },
    headerContainer: {
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#4F80E1',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        borderWidth: 0
    },
    heading: {
        color: '#ffffff',
        backgroundColor: '#4F80E1',
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'normal'
    },
    BanneriMatch: {
      borderRadius: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ff6300',
      flexDirection: 'row',
      width: SCREEN_WIDTH -20,
      paddingLeft: 20,
      paddingRight: 25
    },
    BanneriMatchImage: {
      height: 40,
      width: 120,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 15
    },
});

export default Buttons;
