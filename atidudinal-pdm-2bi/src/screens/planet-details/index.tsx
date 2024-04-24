import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { colors } from "../../theme/colors";
import { Entypo } from '@expo/vector-icons';
import { ImageCard } from "../../components/image-card";
import imageOne from "../../assets/images/image-one.jpeg"
import imageTwo from "../../assets/images/image-two.jpeg"
import plutoImage from "../../assets/images/pluto-image.png"

import { getStatusBarHeight, isIphoneX } from "react-native-iphone-x-helper"

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

export const PlanetDetails: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />


      <View style={styles.header}>
        <AntDesign name="arrowleft" size={24} color={colors.white} />
        <Entypo name="dots-three-horizontal" size={24} color={colors.white} />
      </View>


      <ScrollView>
      <Image 
        source={plutoImage}
        style={{
          width: screenWidth,
          height: screenHeight * 1/3,
          objectFit: "contain",
          marginBottom: 8
        }}
      />

      <View
        style={{
          paddingHorizontal: 16
        }}
      >
        <Text style={[styles.title, {
          marginBottom: 4
        }]}>Pluto</Text>
        <Text style={styles.subtitle}>The minor planet</Text>


        <View style={styles.divider}/>

        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus id et dolor nisi beatae, voluptas doloribus iusto praesentium ab aperiam dignissimos quibusdam corporis error quaerat eaque quos atque voluptate ducimus maiores similique repudiandae! Rem, nemo porro. Fugit est alias quis.
        </Text>

        <View style={styles.divider}/>
      </View>


      <View style={{
        paddingHorizontal: 16
      }}>
        <Text style={styles.subtitle}>Gallery</Text>
      </View>

      <ScrollView
        horizontal
        style={{
          marginTop: 16,
          paddingHorizontal: 16
        }}
      >
        <ImageCard style={{
          marginRight: 16
        }}
        image={imageOne}
        />
        <ImageCard image={imageTwo}/>
      </ScrollView>
      </ScrollView>

      

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191A31',
    paddingTop:  isIphoneX() ? getStatusBarHeight() + 16 : 24
  },
  header: {
    paddingHorizontal: 16,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    color: colors.white,
    fontWeight: "800",
    fontSize: 40
  },
  subtitle: {
    color: colors.white,
    fontSize: 24
  },
  divider: {
    width: "100%",
    backgroundColor: colors.white90,
    height: 1,
    marginVertical: 20
  },
  paragraph: {
    color: colors.white,
    fontSize: 16
  }
});
