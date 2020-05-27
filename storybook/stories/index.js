import React from 'react';
import { Text, View, Image } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import FAB from './FAB/index';
import AnimeTest from './AnimeTest/index';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));

storiesOf('Floating Action button', module)
  .add('Center', () => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <FAB onPress= {() => (console.log('object'))} />
    </View>
  ));

  storiesOf('Animated', module)
  .add('Animated experiments', () => (
    <AnimeTest />
  ));


storiesOf('Elevation', module)
  .add('View', () => (
    <View style={{
      width: 350,
      height: 350,
      margin: 40,
      elevation: 5,
      backgroundColor: 'white',
      borderRadius: 20
    }} />
  ))
  .add('Text', () => (
    <Text style={{
      margin: 30,
      elevation: 5,
      fontSize: 50,
      backgroundColor: 'white',
      borderRadius: 20
    }}>
      Chacs
    </Text>
  ))
  .add('Rounded Image', () => (
    <View style={{
      width: 350,
      height: 350,
      margin: 40,
      elevation: 5,
      backgroundColor: 'white',
      borderRadius: 20
    }}>
      <Image
        source={require('../../assets/images/robot-dev.png')}
        style={{
          width: 100,
          height: 100,
          borderRadius: 20,
        }} />
    </View>
  ))
  // .add('Card Parent Child', () => (
  //   <View>
  //     <Card elevation={5}>
  //       <Card elevation={10} />
  //     </Card>
  //     <Card elevation={6}>
  //       <Card elevation={2} />
  //     </Card>
  //   </View>
  // ))
  // .add('Card test with 3', () => (
  //   <View>
  //     <Card elevation={1} />
  //     <Card elevation={15} />
  //     <Card elevation={5} />
  //   </View>
  // ))
  // .add('Card test one', () => (
  //   <Card elevation={1} />
  // ))
  // .add('Image', () => (
  //   <Image
  //     source={require('../../assets/images/robot-dev.png')}
  //     style={{
  //       margin: 30,
  //       elevation: 5,
  //       width: 350,
  //       height: 350,
  //       fontSize: 50,
  //       backgroundColor: 'white',
  //     }} />
  // ))

