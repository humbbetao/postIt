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
                    <View style={[styles.headerContainer, {backgroundColor: '#2060CC', paddingLeft: 15, paddingRight: 15}]}>
                      <TouchableOpacity style={styles.itemMenu} activeOpacity={0.5}>
                        <Image
                        source={require('../../assets/images/vender.png')}
                        style={styles.menuIcon}
                        />
                        <Text style={styles.menuLabel}>Vender</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.itemMenu} activeOpacity={0.5}>
                        <Image
                        source={require('../../assets/images/catalogo.png')}
                        style={styles.menuIcon}
                        />
                        <Text style={styles.menuLabel}>Catálogo</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.itemMenu} activeOpacity={0.5}>
                        <Image
                        source={require('../../assets/images/fipe.png')}
                        style={styles.menuIcon}
                        />
                        <Text style={styles.menuLabel}>Fipe & KBB</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.itemMenu} activeOpacity={0.5}>
                        <Image
                        source={require('../../assets/images/financiar.png')}
                        style={styles.menuIcon}
                        />
                        <Text style={styles.menuLabel}>Financiar</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.itemMenu} activeOpacity={0.5}>
                        <Image
                        source={require('../../assets/images/revista.png')}
                        style={styles.menuIcon}
                        />
                        <Text style={styles.menuLabel}>Revista</Text>
                      </TouchableOpacity>
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

                    <View style={styles.viewContainer}>
                        <TouchableOpacity style={styles.footerHome} activeOpacity={0.5}>
                          <Image
                          source={require('../../assets/images/pin.png')}
                          style={{height: 40, width: 30, marginRight: 20, marginLeft: 20}}
                          />
                          <View style={{width: 300}}>
                          <Text style={{fontSize: 12,color: '#fff', textAlign: 'left', marginTop: 20}}>Buscando em</Text>
                          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff',textAlign: 'left', marginBottom: 18}}>Estado de São Pauo</Text>
                          </View>
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
    itemMenu: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 5
    },
    menuIcon: {
      width: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuLabel: {
      fontSize: 12,
      color: '#fff',
      textAlign: 'center',
      marginTop: 5
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
    footerHome: {
      borderRadius: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2060CC',
      flexDirection: 'row',
      width: SCREEN_WIDTH,
      paddingLeft: 20,
      paddingRight: 25
    },
});

export default Buttons;
