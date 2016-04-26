/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

//import React, {
//  AppRegistry,
//  Component,
//  StyleSheet,
//  Text,
//  View
//} from 'react-native';
//
//class PropertyFinder extends Component {
//  render() {
//    return (
//      <View style={styles.container}>
//        <Text style={styles.welcome}>
//          Welcome to React Native!
//        </Text>
//        <Text style={styles.instructions}>
//          To get started, edit index.android.js
//        </Text>
//        <Text style={styles.instructions}>
//          Shake or press menu button for dev menu
//        </Text>
//      </View>
//    );
//  }
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#F5FCFF',
//  },
//  welcome: {
//    fontSize: 20,
//    textAlign: 'center',
//    margin: 10,
//  },
//  instructions: {
//    textAlign: 'center',
//    color: '#333333',
//    marginBottom: 5,
//  },
//});
//
//AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);


var React = require('react-native');

var styles = React.StyleSheet.create({
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        margin: 80
    }
});
class PropertyFinderApp extends React.Component {
    render() {
        return React.createElement(React.Text, {style: styles.text}, "Hello World!");
    }
}
React.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
