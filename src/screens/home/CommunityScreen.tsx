import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../../context';

const CommunityScreen = () => {
  const {userToken} = useContext(AuthContext);
  return (
    <View>
      <Text>{userToken || 'no user here'}</Text>
    </View>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({});
