import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Image from '../../assets/images/bg.jpg';
import {Icons} from '../../assets/icons';
import {COLORS, FONTS} from '../../constant';
const Card = () => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <ImageBackground source={Image} resizeMode="cover" style={styles.image}>
        <View style={styles.shadow} />
        <View style={styles.insider}>
          <View style={styles.topCard}>
            <Text style={styles.pingText}>Perfect for you</Text>
            <View style={styles.topRight}>
              <Text style={styles.textContent}>What to do</Text>
              <View style={styles.arrowRight}>
                <Icons.ArrowRight fill="black" />
              </View>
            </View>
          </View>
          <View style={styles.bottomCard}>
            <Text style={styles.bottomTitle}>Niagara Falls</Text>
            <Text style={styles.bottomDesc}>
              Canada, province of Alberta and Northwest Territoties, near the
              town of Fort Smith
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 40,
    height: 350,
    width: '100%',
    elevation: 5,
    overflow: 'hidden',
  },
  image: {
    flex: 1,

    padding: 20,
    position: 'relative',
    zIndex: 0,
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '120%',
    width: '120%',
    backgroundColor: '#0005',
    zIndex: 1,
  },
  insider: {
    height: '100%',
    color: 'white',
    zIndex: 2,
    justifyContent: 'space-between',
  },
  topCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pingText: {
    backgroundColor: COLORS.primary,
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 20,
    fontSize: 13,
    fontFamily: FONTS.medium,
  },
  topRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textContent: {
    fontFamily: FONTS.medium,
    color: 'black',
    marginBottom: 2,
  },
  arrowRight: {
    padding: 4,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  bottomCard: {
    gap: 5,
    paddingBottom: 5,
  },
  bottomTitle: {
    color: 'white',
    fontFamily: FONTS.bold,
    fontSize: 28,
  },
  bottomDesc: {
    color: 'white',
    fontSize: 15,
    fontFamily: FONTS.regular,
  },
});
