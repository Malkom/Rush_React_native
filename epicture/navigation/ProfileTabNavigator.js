import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MainTabNavigator from "./MainTabNavigator";

import PostScreen from '../screens/PostScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CommentsScreen from '../screens/CommentsScreen';



const PostStack = createStackNavigator({
  Post: PostScreen,
});

PostStack.navigationOptions = {
  tabBarLabel: 'Posts',
};

const FavoritesStack = createStackNavigator({
  Favorites: FavoritesScreen,
});

FavoritesStack.navigationOptions = {
  tabBarLabel: 'Favorites',
};

const CommentsStack = createStackNavigator({
  Comments: CommentsScreen,
});

CommentsStack.navigationOptions = {
  tabBarLabel: 'Comments',
};


const ProfileTabNavigator = createBottomTabNavigator({
  PostStack,
  FavoritesStack,
  CommentsStack,
},{
  tabBarOptions: {
    // showIcon: false,
    // adaptive: false,
    style: {
      backgroundColor: '#000000',
      color: '#ffffff',
      alignContent: 'center',
      fontSize : 12,
      justifyContent: 'center',
    },
  }
});

export default createAppContainer(ProfileTabNavigator)