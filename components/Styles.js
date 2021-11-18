import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';
export const styles = StyleSheet.create({
  topSafeArea:{
    backgroundColor: 'whitesmoke',
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    backgroundColor: 'whitesmoke',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  },
  user: {
    fontSize: 20,
  },
  notifications: {
    fontSize: 24,
  },
  headerIcon: {
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  optionContent: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    margin: 15,
  },
  option: {
    borderWidth: 2,
    borderColor: 'darkgrey',
    borderRadius: 100,
    width: 7,
    height: 7,
    backgroundColor: 'darkgrey',
    marginLeft: 3,
  },
  statusContent: {
    flexDirection: 'row',
    margin: 15,
    marginTop: -10,
  },
  status: {
    fontSize: 15,
    color: '#000',
    fontWeight: 500,
  },
  textStatus: {
    fontWeight: 'bold',
  },
  calendar: {
    fontSize: 13,
    color: '',
  },
  location: {
    fontSize: 17,
  },
  textCalendar: {
    paddingTop: 10,
    paddingBottom: 5,
    color: 'darkgray',
  },
  textLocation: {
    color: 'dodgerblue',
  },

  imageAvt: {
    marginRight: 50,
    height: 70,
    width: 70,
  },
  textContent: {
    marginLeft: -40,
    width: '82%',
    maxWidth: '100%',
  },
  avatar: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    resizeMode: 'cover',
  },
  footerContent: {
    marginLeft: 30,
    marginTop: 15,
  },
  textCheck: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  check: {
    color: 'rebeccapurple',
    fontSize: 30,
    paddingRight: 10,
    borderColor: 'none',
  },
  imgcontent: {
    width: '100%',
    height: 270,
    borderRadius: 8,
  },
  other: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  otherImg: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 50,
    width: 50,
    marginRight: 5,
    borderRadius: 5
  },
  textOther: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  commentAndLike: {
    flexDirection: 'row',
    alignContent: 'center',
    marginLeft: 30,
  },
  heart: {
    color: 'tomato',
    fontSize: 20,
  },
  comment: {
    fontSize: 20,
    color: 'gray',
  },
  textHeart: {
    paddingRight: 25,
    fontSize: 18,
    color: 'grey',
  },
  textComment: {
    fontSize: 18,
    color: 'grey',
  },

});
