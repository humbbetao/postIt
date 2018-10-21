import Expo from 'expo';
import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Button, ButtonGroup, Input} from 'react-native-elements'

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
                    <View style={[styles.headerContainer, {backgroundColor: '#292C44'}]}>
                        <Button
                            title='Vender'
                            loading={false}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={{backgroundColor: '#292C44'}}
                            titleStyle={{fontWeight: 'bold', fontSize: 12}}
                            containerStyle={{marginVertical: 10, height: 50, width: 100, borderWidth: 0}}
                            onPress={() => console.log('aye')}
                            underlayColor="transparent"
                        />
                        <Button
                            title='Catálogo'
                            loading={false}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={{backgroundColor: '#292C44'}}
                            titleStyle={{fontWeight: 'bold', fontSize: 12}}
                            containerStyle={{marginVertical: 10, height: 50, width: 100, borderWidth: 0}}
                            onPress={() => console.log('aye')}
                            underlayColor="transparent"
                        />
                        <Button
                            title='Fipe & KBB'
                            loading={false}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={{backgroundColor: '#292C44'}}
                            titleStyle={{fontWeight: 'bold', fontSize: 12}}
                            containerStyle={{marginVertical: 10, height: 50, width: 100, borderWidth: 0}}
                            onPress={() => console.log('aye')}
                            underlayColor="transparent"
                        />
                        <Button
                            title='Financiar'
                            loading={false}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={{backgroundColor: '#292C44'}}
                            titleStyle={{fontWeight: 'bold', fontSize: 12}}
                            containerStyle={{marginVertical: 10, height: 50, width: 100, borderWidth: 0}}
                            onPress={() => console.log('aye')}
                            underlayColor="transparent"
                        />
                        <Button
                            title='Revista'
                            loading={false}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={{backgroundColor: '#292C44'}}
                            titleStyle={{fontWeight: 'bold', fontSize: 12}}
                            containerStyle={{marginVertical: 10, height: 50, width: 100, borderWidth: 0}}
                            onPress={() => console.log('aye')}
                            underlayColor="transparent"
                        />
                    </View>
                    <View style={styles.mainContainer}>
                        <Text>
                            Olá, qual carro você deseja?
                        </Text>
                        <View style={styles.viewContainerInputBox}>
                            <Input
                                containerStyle={{width: '90%',}}
                                placeholder="Ex: Gol 1996"
                                labelStyle={{marginTop: 16}}
                            />
                        </View>
                    </View>
                    <Text>
                        Sua Recomendações
                    </Text>
                    <View style={styles.yourRecommend}>
                        <Button
                            title='Revista'
                            loading={false}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={{backgroundColor: '#292C44'}}
                            titleStyle={{fontWeight: 'bold', fontSize: 12}}
                            containerStyle={{marginVertical: 10, height: 200, width: 100, borderWidth: 0}}
                            onPress={() => console.log('aye')}
                            underlayColor="transparent"
                        />
                        <Button
                            title='Revista'
                            loading={false}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={{backgroundColor: '#292C44'}}
                            titleStyle={{fontWeight: 'bold', fontSize: 12}}
                            containerStyle={{marginVertical: 10, height: 200, width: 100, borderWidth: 0}}
                            onPress={() => console.log('aye')}
                            underlayColor="transparent"
                        />
                        <Button
                            title='Revista'
                            loading={false}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={{backgroundColor: '#292C44'}}
                            titleStyle={{fontWeight: 'bold', fontSize: 12}}
                            containerStyle={{marginVertical: 10, height: 200, width: 100, borderWidth: 0}}
                            onPress={() => console.log('aye')}
                            underlayColor="transparent"
                        />
                    </View>
                    <Text>
                        Suas Recomendações
                    </Text>
                    <View style={styles.viewContainer}>
                        <Button
                            title='Revista'
                            loading={false}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={{backgroundColor: '#292C44'}}
                            titleStyle={{fontWeight: 'bold', fontSize: 12}}
                            containerStyle={{marginVertical: 10, height: 200, width: 100, borderWidth: 0}}
                            onPress={() => console.log('aye')}
                            underlayColor="transparent"
                        />
                        <Button
                            title='Revista'
                            loading={false}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={{backgroundColor: '#292C44'}}
                            titleStyle={{fontWeight: 'bold', fontSize: 12}}
                            containerStyle={{marginVertical: 10, height: 200, width: 100, borderWidth: 0}}
                            onPress={() => console.log('aye')}
                            underlayColor="transparent"
                        />
                        <Button
                            title='Revista'
                            loading={false}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={{backgroundColor: '#292C44'}}
                            titleStyle={{fontWeight: 'bold', fontSize: 12}}
                            containerStyle={{marginVertical: 10, height: 200, width: 100, borderWidth: 0}}
                            onPress={() => console.log('aye')}
                            underlayColor="transparent"
                        />
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
        marginTop: 20,
        borderWidth: 0,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#cccccc',
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
        width: '100%',
        marginTop: 20,
        borderWidth: 0,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
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
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        borderWidth: 0
    },
    heading: {
        color: '#ffffff',
        backgroundColor: '#4F80E1',
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold'
    },
});

export default Buttons;
