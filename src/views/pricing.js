import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import {Text} from 'react-native-elements';
import _ from 'lodash'

class Pricing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key: 0
        }
        this.enableds = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
        this.setKey = this.setKey.bind(this)
        this.setKeyTwo = this.setKeyTwo.bind(this)
    }

    setKeyTwo = () => {
        this.enableds[this.state.key] = false;
    }

    setKey = () => {
        let keyAdded = 0
        console.log("novoooo")
        const currentKey = this.state.key
        console.log(currentKey)
        if (currentKey === 1) {
            console.log(this.state.key)
            console.log(this.enableds)
            this.enableds[2] = false;
            this.enableds[3] = false;
            keyAdded = 3;
        } else if (currentKey === 2) {
            console.log(this.state.key)
            console.log(this.enableds)
            this.enableds[3] = false;
            keyAdded = 2;
        }
        else if (currentKey === 4) {
            this.enableds[5] = false;
            this.enableds[6] = false;
            this.enableds[7] = false;
            keyAdded = 4;
        }
        else if (currentKey === 5) {
            this.enableds[6] = false;
            this.enableds[7] = false;
            keyAdded = 3
        } else if (currentKey === 6) {
            this.enableds[7] = false;
            keyAdded = 2
        } else if (currentKey === 8) {
            this.enableds[9] = false;
            this.enableds[10] = false;
            keyAdded = 3;
        } else if (currentKey === 9) {
            this.enableds[10] = false;
            keyAdded = 2;
        } else if (currentKey === 12) {
            this.enableds[13] = false;
            this.enableds[14] = false;
            this.enableds[15] = false;
            keyAdded = 4;
        } else if (currentKey === 13) {
            this.enableds[14] = false;
            this.enableds[15] = false;
            keyAdded = 3;
        } else if (currentKey === 14) {
            this.enableds[15] = false;
            keyAdded = 2;
        }
        if(keyAdded===0){
            keyAdded = keyAdded+ 1
        }
        const newKey = keyAdded + currentKey
        this.setState({key: newKey})
        console.log(this.state.key)
    }

    renderCard() {
        let list = [{comp: "Você é Homem?", enabled: this.enableds[0]},
            {comp: "Você tem entre 18 a 25 anos?", enabled: this.enableds[1]},
            {comp: "Você tem entre 25 a 41 anos?", enabled: this.enableds[2]},
            {comp: "Você tem acima de 41 anos?", enabled: this.enableds[3]},
            {comp: "Você ganha entre 1000,00 a 3699,00?", enabled: this.enableds[4]},
            {comp: "Você ganha entre 3700,00 a 8999,00?", enabled: this.enableds[5]},
            {comp: "Você ganha entre 8900 a 17999?", enabled: this.enableds[6]},
            {comp: "Você ganha acima de 18000?", enabled: this.enableds[7]},
            {comp: "Você prefere carros entre 30mil até 40mil reais?", enabled: this.enableds[8]},
            {comp: "Você prefere carros entre 40mil até 50mil reais?", enabled: this.enableds[9]},
            {comp: "Você prefere carros acima de 50mil reais?", enabled: this.enableds[10]},
            {comp: "Você é casado?", enabled: this.enableds[11]},
            {comp: "Você prefere um carro para o dia a dia?", enabled: this.enableds[12]},
            {comp: "Você prefere um carro para viagem?", enabled: this.enableds[13]},
            {comp: "Você prefere um carro para aventura?", enabled: this.enableds[14]},
            {comp: "Você prefere um carro para passeio?", enabled: this.enableds[15]},
            {comp: "Você tem uma família com até 4 pessoas?", enabled: this.enableds[16]},
            {comp: "Você se preocupa com meio ambiente?", enabled: this.enableds[17]}]
        let listNova = _.filter(list, {'enabled': true})
        return listNova
    }

    render() {
        let renderCards = this.renderCard()
        return (
            <View style={{flex: 1}}>
                {!_.isEmpty(renderCards) &&
                <View style={{flex: 1}}>
                    <CardStack style={styles.content} ref={swiper => {
                        this.swiper = swiper
                    }}>
                        {renderCards.map((item, idx) => <Card key={`${idx}_${item.comp}`}
                                                              style={[styles.card, styles.card1]}><Text
                            style={styles.label}>
                            {item.comp}
                        </Text></Card>)}
                    </CardStack>
                    <View style={styles.footer}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button, styles.red]} onPress={() => {
                                this.setKeyTwo();
                                this.swiper.swipeLeft();
                            }}>
                                <Image source={require('../images/red.png')} resizeMode={'contain'}
                                       style={{height: 62, width: 62}}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.orange]} onPress={() => {
                                this.swiper.goBackFromLeft();
                            }}>
                                <Image source={require('../images/back.png')} resizeMode={'contain'}
                                       style={{height: 32, width: 32, borderRadius: 5}}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.green]} onPress={() => {
                                this.setKey();
                                this.swiper.swipeRight()
                            }}>
                                <Image source={require('../images/green.png')} resizeMode={'contain'}
                                       style={{height: 62, width: 62}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                }
            </View>
        )
    }
}


Pricing.navigationOptions = {
    title: 'Pricing',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f2f2f2',
    },
    content: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: 320,
        height: 470,
        backgroundColor: '#FE474C',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.5,
    },
    card1: {
        backgroundColor: '#FE474C',
    },
    card2: {
        backgroundColor: '#FEB12C',
    },
    label: {
        lineHeight: 400,
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        width: 220,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
    orange: {
        width: 55,
        height: 55,
        borderColor: 'rgb(246,190,66)',
        borderWidth: 4,
        borderRadius: 55,
        marginTop: -15
    },
    green: {
        width: 75,
        height: 75,
        backgroundColor: '#fff',
        borderRadius: 75,
        borderWidth: 6,
        borderColor: '#01df8a',
    },
    red: {
        width: 75,
        height: 75,
        backgroundColor: '#fff',
        borderRadius: 75,
        borderWidth: 6,
        borderColor: '#fd267d',
    }
});

export default Pricing;
