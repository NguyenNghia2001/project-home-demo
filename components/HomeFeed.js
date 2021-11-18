import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './Styles';
import Avatar from '../assets/elonmusk.jpeg';
import ContentImage from '../assets/imageDaiBang.jpeg';
import { FontAwesome, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const homeName = 'Home';
const detailsName = 'Life List';
const safariName = 'Explore';
const userName = 'Profile';
const Tab = createBottomTabNavigator();

const HomeFeed = () => {
  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <StatusBar style="drak" />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerIcon}>
              <FontAwesome5 name="user-friends" style={styles.user} />
            </Text>
            <Text style={styles.headerIcon}>Feed</Text>
            <Text style={styles.headerIcon}>
              <Ionicons name="notifications" style={styles.notifications} />
            </Text>
          </View>
          <View style={styles.content}>
            <View style={styles.optionContent}>
              <View style={styles.option}></View>
              <View style={styles.option}></View>
              <View style={styles.option}></View>
            </View>
            <View style={styles.statusContent}>
              <View style={styles.imageAvt}>
                <Image style={styles.avatar} source={Avatar} />
              </View>
              <View style={styles.textContent}>
                <Text style={styles.status}>
                  <Text style={styles.textStatus}>Anthony Nghĩa </Text> feel
                  good with <Text style={styles.textStatus}>NhatKaka </Text>
                  and <Text style={styles.textStatus}> 4 others</Text>
                </Text>
                <Text style={styles.textCalendar}>
                  <FontAwesome name="calendar-o" style={styles.calendar} /> 6
                  mins ago
                </Text>
                <Text style={styles.textLocation}>
                  <Ionicons name="location" style={styles.location} /> Madison
                  Ave., New York, United States
                </Text>
              </View>
            </View>
            <View style={styles.imageContent}>
              <Image style={styles.imgcontent} source={ContentImage} />
            </View>
            <View style={styles.footerContent}>
              <Text style={styles.textCheck}>
                <FontAwesome5 name="check" style={styles.check} /> New Lifer!
              </Text>
              <View style={styles.other}>
                <View style={styles.otherImg}></View>
                <View style={[styles.otherImg , {borderColor:'red'}]}></View>
                <Text style={styles.textOther}> 2 New Badges Awarded </Text>
              </View>
            </View>
            <View style={styles.commentAndLike}>
              <Text style={styles.textHeart}>
                <Ionicons name="heart" style={styles.heart} /> 145
              </Text>
              <Text style={styles.textComment}>
                <FontAwesome name="comment" style={styles.comment} /> 34
              </Text>
            </View>
          </View>
        </ScrollView>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
              
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                // console.log(route)
                let rn = route.name;
                console.log(rn)

                if (rn === homeName) {
                  iconName = focused ? 'home' : 'home';
                } else if (rn === detailsName) {
                  iconName = focused ? 'list' : 'list';
                } else if (rn === safariName) {
                  iconName = focused ? 'safari' : 'safari';
                } else if (rn === userName) {
                  iconName = focused ? 'user-alt' : 'user-alt';
                }
                return (<FontAwesome5 name={iconName} size={size} color={color} />);
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'grey',
              labelStyle: { padding: 4, fontSize: 10 },
              textContent: { padding: 50},
              style: { padding: 10, height: 100 , fontSize: 80},
            }}>
         
            <Tab.Screen name={homeName} />
            <Tab.Screen name={safariName} />
            <Tab.Screen name={detailsName} />
            <Tab.Screen name={userName} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};
export default HomeFeed;
