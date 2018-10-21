import React, {Component} from 'react';
import {
    StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, StatusBar
} from 'react-native';
import {Button, ButtonGroup} from 'react-native-elements'
import { Rating, AirbnbRating } from 'react-native-ratings';
import {Font} from 'expo';
import {Collapse, CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const IMAGE_SIZE = SCREEN_WIDTH - 80;

class CustomButton extends Component {
    constructor() {
        super();

        this.state = {
            selected: false
        };
    }

    componentDidMount() {
        const {selected} = this.props;

        this.setState({
            selected
        });
    }

    render() {
        const {title} = this.props;
        const {selected} = this.state;

        return (
            <Button
                title={title}
                titleStyle={{fontSize: 15, color: 'white', fontFamily: 'regular'}}
                buttonStyle={selected ? {backgroundColor: '#2458AE', borderRadius: 3, width: 127} : {
                    borderWidth: 0,
                    borderRadius: 3,
                    width: 127,
                    backgroundColor: '#ccc'
                }}
                containerStyle={{marginRight: 10}}
                onPress={() => this.setState({selected: !selected})}
            />
        );
    }
}

export default class LoginScreen1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            'georgia': require('../../../assets/fonts/Georgia.ttf'),
            'regular': require('../../../assets/fonts/Montserrat-Regular.ttf'),
            'light': require('../../../assets/fonts/Montserrat-Light.ttf'),
            'bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
        });

        this.setState({fontLoaded: true});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    barStyle="light-content"
                />
                {this.state.fontLoaded ?
                    <View style={{flex: 1, backgroundColor: 'rgba(255,255,255,1)'}}>
                        <View style={styles.statusBar}/>
                        <ScrollView style={{flex: 1}}>
                        <View style={[styles.headerContainer, {backgroundColor: '#2060CC', paddingLeft: 15, paddingRight: 15}]}>
                        <TouchableOpacity style={styles.itemMenu} activeOpacity={0.5}>
                          <Image
                          source={require('../../../assets/images/vender.png')}
                          style={styles.menuIcon}
                          />
                          <Text style={styles.menuLabel}>Vender</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemMenu} activeOpacity={0.5}>
                          <Image
                          source={require('../../../assets/images/catalogo.png')}
                          style={styles.menuIcon}
                          />
                          <Text style={styles.menuLabel}>Catálogo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemMenu} activeOpacity={0.5}>
                          <Image
                          source={require('../../../assets/images/fipe.png')}
                          style={styles.menuIcon}
                          />
                          <Text style={styles.menuLabel}>Fipe & KBB</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemMenu} activeOpacity={0.5}>
                          <Image
                          source={require('../../../assets/images/financiar.png')}
                          style={styles.menuIcon}
                          />
                          <Text style={styles.menuLabel}>Financiar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemMenu} activeOpacity={0.5}>
                          <Image
                          source={require('../../../assets/images/revista.png')}
                          style={styles.menuIcon}
                          />
                          <Text style={styles.menuLabel}>Revista</Text>
                        </TouchableOpacity>
                        </View>
                            <View
                                style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: SCREEN_WIDTH -40, marginTop: 20}}>
                                <Image
                                    source={require('../../../assets/images/aventureiro.png')}
                                    style={{width: 70, height: 70, marginLeft: 35}}
                                />
                                <Text style={{
                                    fontSize: 26,
                                    color: '#2458AE',
                                    fontFamily: 'bold',
                                    textAlign: 'left',
                                    marginLeft: 30
                                }}>
                                    Aventureira
                                </Text>
                            </View>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={styles.collapseButtonMore}>
                                        <Text style={{
                                            fontFamily: 'bold',
                                            fontSize: 20,
                                            color: '#7c7c7c',
                                            textAlign: 'center',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginTop: 8,
                                            marginBottom: 13
                                        }}>+ sobre seu perfil</Text>
                                        <Image
                                            source={require('../../../assets/images/arrow-down.png')}
                                            style={styles.ButtonMoreImage}
                                        />
                                    </View>
                                </CollapseHeader>
                                <CollapseBody>
                                <View style={{flex: 1, width: SCREEN_WIDTH, paddingLeft: 40, paddingRight: 40, backgroundColor: '#f6f6f6'}}>
                                    <Text style={{flex: 1, fontSize: 14, color: '#7c7c7c', fontFamily: 'regular', marginBottom: 20}}>
                                        Para você a estrada é atração turística. O visual a cada curva impressiona e, perigosamente, desvia a atenção do motorista.  Para carro e motorista, o relacionamento é um desafio constante: em qualquer vacilo, entram em ação assistente de tração e estabilidade e por isso mesmo esse é um item que você não pode dispensar no carro.
                                    </Text>
                                </View>
                                    <View style={{flex: 1, width: SCREEN_WIDTH, backgroundColor: '#f6f6f6'}}>
                                        <View style={{
                                            flex: 1,
                                            flexDirection: 'column',
                                            height: 80,
                                            marginLeft: 40,
                                            marginRight: 10
                                        }}>
                                            <View style={{flex: 1, flexDirection: 'row'}}>
                                                <Text style={styles.infoTag}>#Bem-estar</Text>
                                                <Text style={styles.infoTag}>#Liberdade</Text>
                                            </View>
                                            <View style={{flex: 1, flexDirection: 'row'}}>
                                                <Text style={styles.infoTag}>#Natureza</Text>
                                                <Text style={styles.infoTag}>#Viagem</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{flex: 1, marginTop: 0, backgroundColor: '#f6f6f6'}}>
                                        <View style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            marginTop: 10,
                                            marginHorizontal: 40
                                        }}>
                                            <View style={{flex: 1, flexDirection: 'row'}}>
                                                <View style={{flex: 1}}>
                                                    <Text style={styles.infoTypeLabel}>Idade</Text>
                                                    <Text style={styles.infoTypeLabel}>Gênero</Text>
                                                    <Text style={styles.infoTypeLabel}>Estado Civil</Text>
                                                    <Text style={styles.infoTypeLabel}>Tipo de Uso</Text>
                                                    <Text style={styles.infoTypeLabel}>Valor do Carro</Text>
                                                </View>
                                                <View style={{flex: 1, marginLeft: 10, marginBottom: 10}}>
                                                    <Text style={styles.infoAnswerLabel}>31</Text>
                                                    <Text style={styles.infoAnswerLabel}>Feminino</Text>
                                                    <Text style={styles.infoAnswerLabel}>Solteira</Text>
                                                    <Text style={styles.infoAnswerLabel}>Aventura</Text>
                                                    <Text style={styles.infoAnswerLabel}>30 a 39.999 mil</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </CollapseBody>
                            </Collapse>
                            <View style={styles.mainContainer}>
                                <Text style={styles.centering}>Sugestão de carros que são a sua cara:</Text>
                                <View style={styles.viewContainer}>
                                    <TouchableOpacity style={styles.itemCar}>
                                        <Image
                                            source={require('../../../assets/images/ecosport_150px.png')}
                                            style={styles.imageCar}
                                        />
                                        <View style={styles.inFoCar}>
                                          <Text style={styles.titleCar}>EcoSport</Text>
                                          <Text style={{fontSize: 15, color: '#7c7c7c'}}>100% match</Text>
                                          <Rating
                                            type="star"
                                            fractions={1}
                                            startingValue={5}
                                            imageSize={20}
                                            onFinishRating={this.ratingCompleted}
                                            style={{ paddingVertical: 10 }}
                                          />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.viewContainer}>
                                    <TouchableOpacity style={styles.itemCar}>
                                        <Image
                                            source={require('../../../assets/images/ranger_150px.png')}
                                            style={styles.imageCar}
                                        />
                                        <View style={styles.inFoCar}>
                                          <Text style={styles.titleCar}>Ranger</Text>
                                          <Text style={{fontSize: 15, color: '#7c7c7c'}}>100% match</Text>
                                          <Rating
                                            type="star"
                                            fractions={1}
                                            startingValue={5}
                                            imageSize={20}
                                            onFinishRating={this.ratingCompleted}
                                            style={{ paddingVertical: 10 }}
                                          />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.viewContainer}>
                                    <TouchableOpacity style={styles.itemCar}>
                                        <Image
                                            source={require('../../../assets/images/strada_150px.png')}
                                            style={styles.imageCar}
                                        />
                                        <View style={styles.inFoCar}>
                                          <Text style={styles.titleCar}>Strada</Text>
                                          <Text style={{fontSize: 15, color: '#7c7c7c'}}>80% match</Text>
                                          <Rating
                                            type="star"
                                            fractions={1}
                                            startingValue={5}
                                            imageSize={20}
                                            onFinishRating={this.ratingCompleted}
                                            style={{ paddingVertical: 10 }}
                                          />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex: 1, width: SCREEN_WIDTH, paddingLeft: 40, paddingRight: 40, backgroundColor: '#ffffff'}}>
                                    <Text style={{flex: 1, fontWeight: 'bold', fontSize: 18, color: '#7c7c7c', fontFamily: 'regular', textAlign: 'center', marginBottom: 20, marginTop: 20}}>
                                    Deu Match? Que tal compartilhar essa experiência com seus amigos?
                                    </Text>
                                </View>
                                <View style={[styles.headerContainer, {backgroundColor: '#fff', width: SCREEN_WIDTH -140, marginLeft: 70}]}>
                                <TouchableOpacity style={styles.itemMenu} activeOpacity={0.5}>
                                  <Image
                                  source={require('../../../assets/images/facebook.png')}
                                  style={[styles.menuIcon, {width: 50, height: 50}]}
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenu} activeOpacity={0.5}>
                                  <Image
                                  source={require('../../../assets/images/twitter.png')}
                                  style={[styles.menuIcon, {width: 40, height: 40}]}
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.itemMenu} activeOpacity={0.5}>
                                  <Image
                                  source={require('../../../assets/images/whatsapp.png')}
                                  style={[styles.menuIcon, {width: 48, height: 48}]}
                                  />
                                </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View> :
                    <Text>Loading...</Text>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusBar: {
        height: 10,
    },
    navBar: {
        height: 60,
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignContent: 'center'
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
    nameHeader: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center'
    },

    infoTag: {
        backgroundColor: 'transparent',
        width: 127,
        color: '#ff6300',
        textAlign: 'center',
        marginRight: 20,
        fontSize: 16,
        fontFamily: 'bold',
        height: 25,
        marginBottom: 0,
        marginTop: 0,
        justifyContent: 'center',
        alignContent: 'center'
    },
    infoTypeLabel: {
        fontSize: 15,
        textAlign: 'right',
        color: 'rgba(126,123,138,1)',
        fontFamily: 'regular',
        paddingBottom: 10,
        borderRadius: 3
    },
    infoAnswerLabel: {
        fontSize: 15,
        color: '#2262CC',
        fontFamily: 'regular',
        paddingBottom: 10,
        borderRadius: 3
    },
    ButtonMore: {
        width: SCREEN_WIDTH,
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
        flex: 1,
        flexDirection: 'row'
    },
    ButtonMoreImage: {
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        opacity: 0.2
    },
    collapseButtonMore: {
        flex: 1,
        marginTop: 20,
        flexDirection: 'row',
        width: SCREEN_WIDTH,
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
    },
    entering: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        borderWidth: 0,
        display: 'flex',
        alignItems: 'center',
    },
    imageCar: {
        flexDirection: 'column',
        width: 150,
        height: 97,
        borderWidth: 0,
        justifyContent: 'center',
        marginRight: 20
    },
    viewContainerInputBox: {
        justifyContent: 'center',
        width: '100%',
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
        marginTop: 20,
        borderWidth: 0,
    },
    mainContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        borderWidth: 0,
        backgroundColor: '#ffffff',
        marginBottom: 20
    },
    centering: {
        fontFamily: 'bold',
        fontSize: 16,
        color: '#666',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#e5e5e5',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    itemCar: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: SCREEN_WIDTH -25,
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: '#fff'
    },
    infoCar: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleCar: {
        fontFamily: 'bold',
        fontSize: 17,
        color: '#7c7c7c',
        textAlign: 'left',
    },
    viewContainerInputBox: {
        justifyContent: 'center',
        width: SCREEN_WIDTH -20,
        marginTop: 10,
        marginBottom: 20,
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

});
