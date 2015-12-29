/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var AboutViewPager = require('./AboutViewPager');
var About1 = require('./about1');

var {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
} = React;

AppRegistry.registerComponent('appview', () => AboutViewPager);
