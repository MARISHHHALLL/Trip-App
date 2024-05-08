import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../components/header';
import Card from '../../components/ui/card';
import {Icons} from '../../assets/icons';
import {FONTS} from '../../constant';
import {Images} from '../../assets/images';
const CategoriesData = [
  {
    id: 1,
    name: 'Mountains',
    image: Images.Mountains,
  },
  {
    id: 2,
    name: 'Camp',
    image: Images.Camp,
  },
  {
    id: 3,
    name: 'Park',
    image: Images.Park,
  },
];
const ExploreScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Header />
        <Card />
      </View>
      <View style={styles.categorie}>
        <View style={styles.topCategory}>
          <Text style={styles.topTitle}>Categories</Text>
          <View style={styles.seeAll}>
            <Text style={styles.seeText}>Sell all</Text>
            <View style={styles.arrowRight}>
              <Icons.ArrowRight fill="black" />
            </View>
          </View>
        </View>
        <FlatList
          data={CategoriesData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatImages}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View>
                <Image
                  resizeMode="cover"
                  style={styles.imagesCategory}
                  source={item.image}
                />
                <Text style={styles.categoryText}>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    gap: 30,
  },
  hero: {
    paddingHorizontal: 20,
    gap: 20,
    marginBottom: 30,
  },
  categorie: {
    backgroundColor: 'white',
    height: 350,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    gap: 20,
  },
  topCategory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topTitle: {
    fontFamily: FONTS.bold,
    color: 'black',
    fontSize: 24,
  },
  seeAll: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  seeText: {
    fontFamily: FONTS.bold,
    color: '#0007',
  },
  arrowRight: {
    padding: 5,
    backgroundColor: '#0002',
    borderRadius: 20,
  },
  imagesCategory: {height: 120, width: 120, borderRadius: 25},
  flatImages: {
    gap: 10,
  },
  categoryText: {
    marginTop: 7,
    fontFamily: FONTS.bold,
    color: 'black',
  },
});
