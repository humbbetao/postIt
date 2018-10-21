import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Platform, Image } from 'react-native';
import colors from 'HSColors';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { PricingCard, Text } from 'react-native-elements';

class Pricing extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={styles.hero}>
        <Image
        source={require('../../assets/images/imatch.png')}
        style={styles.iMatchImage}
        />
          <Text style={styles.heading}>Descubra o carro que é a sua cara</Text>
        </View>
        <PricingCard
          color={colors.primary}
          title="Free"
          price="$0"
          info={['1 User', 'Basic Support', 'All Core Features']}
          button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        />
      </ScrollView>
    );
  }
}

Pricing.navigationOptions = {
  title: 'Pricing',
};

const styles = StyleSheet.create({
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#2060CC',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 25
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : null,
    color: '#27ae60',
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
    color: '#34495e',
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iMatchImage: {
    height: 60,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40

  },
});

export default Pricing;
