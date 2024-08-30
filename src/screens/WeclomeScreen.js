import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        جماعت اسلامی کی ممبرشپ اختیارکرنے کے بعد آپکی زمے داری ہے کہ:
      </Text>
      <Text style={styles.text}>آپ اسلام کا ضروری علم حاصل کریں.</Text>
      <Text style={styles.text}>آپ اپنی زندگی اسلام کے مطابق گزاریں.</Text>
      <Text style={styles.text}>
        اصول جماعت کے مطابق نظم جماعت کے پابند رہیں.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 100,
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginVertical:6
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight:"bold",
    marginBottom:30
  },
});

export default WelcomeScreen;
