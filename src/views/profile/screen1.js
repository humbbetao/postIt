import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, StatusBar
} from 'react-native';
import { Button } from 'react-native-elements'
import { Font } from 'expo';
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
    const { selected } = this.props;

    this.setState({
      selected
    });
  }

  render() {
    const { title } = this.props;
    const { selected } = this.state;

    return (
      <Button
        title={title}
        titleStyle={{ fontSize: 15, color: 'white', fontFamily: 'regular' }}
        buttonStyle={selected ? { backgroundColor: '#2458AE', borderRadius: 3, width: 127 } : { borderWidth: 0, borderRadius: 3, width: 127, backgroundColor: '#ccc' }}
        containerStyle={{ marginRight: 10 }}
        onPress={() => this.setState({ selected: !selected })}
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

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
        />
        { this.state.fontLoaded ?
          <View style={{flex: 1, backgroundColor: 'rgba(255,255,255,1)'}}>
            <View style={styles.statusBar} />
            <ScrollView style={{flex: 1}}>
            <View style={{flex: 1, marginBottom: 10, width: SCREEN_WIDTH - 80, marginLeft: 40}}>
              <Text style={{flex: 1, fontSize: 15, color: '#7c7c7c', fontFamily: 'regular', textAlign: 'center'}}>
                Seu perfil é:
              </Text>
            </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, flexDirection: 'row'}}>
                <Image
                  source={require('../../../assets/images/aventureiro.png')}
                  style={{ width: 70, height: 70}}
                />
              </View>
              <View style={{marginTop: 10, marginHorizontal: 40, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{flex: 1, fontSize: 26, color: '#2458AE', fontFamily: 'bold', textAlign: 'right'}}>
                  Aventureira
                </Text>
              </View>
              <View style={{flex: 1, marginTop: 10, width: SCREEN_WIDTH - 80, marginLeft: 40}}>
                <Text style={{flex: 1, fontSize: 15, color: '#7c7c7c', fontFamily: 'regular'}}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit praesent fermentum rhoncus.
                </Text>
              </View>
              <View style={{flex: 1, marginTop: 20}}>
              <TouchableOpacity style={styles.ButtonMore} activeOpacity={0.5}>
              <Text style={{fontFamily: 'bold',fontSize: 24,color: '#7c7c7c',textAlign: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 18}}>Sobre seu perfil</Text>
                  <Image
                   source={require('../../../assets/images/arrow-down.png')}
                   style={styles.ButtonMoreImage}
                  />
              </TouchableOpacity>
                <View style={{flex: 1, width: SCREEN_WIDTH, backgroundColor: '#f6f6f6'}}>
                  <ScrollView
                    style={{flex: 1}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >
                    <View style={{flex: 1, flexDirection: 'column', height: 80, marginLeft: 40, marginRight: 10}}>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                      <Text style={styles.infoTag}>#Bem-estar</Text>
                      <Text style={styles.infoTag}>#Liberdade</Text>
                      </View>
                      <View style={{flex: 1, flexDirection: 'row' }}>
                      <Text style={styles.infoTag}>#Natureza</Text>
                      <Text style={styles.infoTag}>#Viagem</Text>
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </View>
              <View style={{flex: 1, marginTop: 0, backgroundColor: '#f6f6f6'}}>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 10, marginHorizontal: 40}}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                    <Text style={styles.infoTypeLabel}>Idade</Text>
                      <Text style={styles.infoTypeLabel}>Gênero</Text>
                      <Text style={styles.infoTypeLabel}>Estado Civil</Text>
                      <Text style={styles.infoTypeLabel}>Tipo de Uso</Text>
                      <Text style={styles.infoTypeLabel}>Valor do Carro</Text>
                    </View>
                    <View style={{flex: 1, marginLeft: 10}}>
                    <Text style={styles.infoAnswerLabel}>31</Text>
                      <Text style={styles.infoAnswerLabel}>Feminino</Text>
                      <Text style={styles.infoAnswerLabel}>Solteira</Text>
                      <Text style={styles.infoAnswerLabel}>Aventura</Text>
                      <Text style={styles.infoAnswerLabel}>30 a 39.999 mil</Text>
                    </View>
                  </View>
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
  }
});
