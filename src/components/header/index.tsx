import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useContext} from 'react';
import AvatarImg from '../../assets/images/avatar-logo.png';
import {Icons} from '../../assets/icons';
import {FONTS} from '../../constant';
import {AuthContext} from '../../context';

const Header = () => {
  const {Logout, userToken} = useContext(AuthContext);
  return (
    <View style={styles.header_container}>
      <Button
        onPress={() => {
          Logout();
        }}
        title="logout"
      />
      <TouchableOpacity
        onPress={() => {
          Logout();
        }}>
        <Image style={styles.avatar} source={AvatarImg} />
      </TouchableOpacity>
      <Text style={styles.labelHeader}>Trip Planner</Text>
      <TouchableOpacity style={styles.search}>
        <Icons.SearchIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  labelHeader: {
    fontFamily: FONTS.bold,
    fontSize: 19,
    color: 'black',
  },
  search: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 100,
  },
});
