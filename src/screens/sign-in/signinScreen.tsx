/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SignButton from '../../components/ui/SignButton';
import {Icons} from '../../assets/icons';
import {FONTS} from '../../constant';
import {useContext} from 'react';
import {AuthContext} from '../../context';
const IconData = [
  {
    id: 1,
    title: Icons.AppleIcon,
  },
  {
    id: 2,
    title: Icons.GoogleIcon,
  },
  {
    id: 3,
    title: Icons.FacebookIcon,
  },
];
const IconsItem = ({Icon}: any) => {
  return <TouchableOpacity style={styles.IconsStyle}>{Icon}</TouchableOpacity>;
};
const SigninScreen = () => {
  const {Login, userToken} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.imageRelative}>
        <Image
          style={styles.background}
          source={require('../../assets/images/bg-montain.jpg')}
        />
        <View style={styles.imageText}>
          <Text style={styles.heroText}>NAVIGATE{'\n'}THE WORLD</Text>
          <Text style={styles.textStyling}>Let Trip planner guide you</Text>
        </View>
      </View>
      <View style={styles.signContainer}>
        <View style={styles.buttons}>
          <SignButton
            onPress={() => {
              Login();
            }}
            placeholder="Create new account"
            type="Fill"
            RightArrow={true}
          />
          <SignButton placeholder="I already have an account" type="Outline" />
        </View>
        <View style={styles.line} />
        <View style={styles.signInIcons}>
          <Text style={styles.signText}>Sign in using</Text>
          <View>
            <FlatList
              // horizontal={true}
              contentContainerStyle={{
                flexDirection: 'row',
                gap: 15,
                marginTop: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              data={IconData}
              renderItem={({item}) => <IconsItem Icon={<item.title />} />}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SigninScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageRelative: {
    height: '68%',
    position: 'relative',
  },
  background: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  heroText: {
    fontSize: 45,
    opacity: 1,
    color: '#fff',
    textAlign: 'center',
    fontFamily: FONTS.black,
    lineHeight: 45,
    height: '100%',
  },
  imageText: {
    position: 'absolute',
    bottom: 50,
    left: '50%',
    transform: [{translateX: -Dimensions.get('window').width * 0.33}],
  },
  textStyling: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    bottom: 20,
  },
  signContainer: {
    backgroundColor: 'white',
    paddingBottom: 30,
    // height: '40%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  buttons: {
    paddingTop: 30,
    paddingHorizontal: 30,
    flexDirection: 'column',
    gap: 5,
  },
  line: {
    height: 1,
    width: '100%',
    marginTop: 10,
    marginBottom: 40,
    backgroundColor: 'hsl(210, 16.67%, 92.94%)',
  },
  signInIcons: {
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signText: {fontFamily: FONTS.medium},
  IconsStyle: {
    borderColor: 'hsl(210, 16.67%, 92.94%)',
    borderWidth: 1.5,
    // padding: 13,
    borderRadius: 50,
    height: 60,
    width: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
