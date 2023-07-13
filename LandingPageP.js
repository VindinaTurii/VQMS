import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const LandingPageP = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.landingPageP}>
      <View
        style={[styles.landingPagePChild, styles.rectangleParentPosition]}
      />
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <View style={styles.imgParent}>
          <Image
            style={styles.imgIcon}
            contentFit="cover"
            source={require("../assets/img2.png")}
          />
          <View style={styles.frameGroup}>
            <View style={styles.wrapperSpaceBlock}>
              <Text style={styles.hiJohn}>Hi, John!</Text>
            </View>
            <View
              style={[
                styles.whereAreWeQueuingTodayWrapper,
                styles.wrapperSpaceBlock,
              ]}
            >
              <Text style={[styles.whereAreWe, styles.whereAreWeTypo]}>
                Where are we queuing today?
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-4.png")}
        />
      </View>
      <View
        style={[styles.locationCategoriesWrapper, styles.frameParentFlexBox]}
      >
        <Text style={[styles.locationCategories, styles.whereAreWeTypo]}>
          Location Categories
        </Text>
      </View>
      <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <View style={[styles.rectangleView, styles.frameChild1Layout]} />
        <View style={[styles.frameChild1, styles.frameChild1Layout]} />
        <View style={[styles.frameChild2, styles.frameChildLayout1]} />
        <View style={[styles.frameChild3, styles.frameChildLayout1]} />
        <View style={[styles.frameChild4, styles.frameChildLayout]} />
        <View style={[styles.frameChild5, styles.frameChildLayout]} />
        <Pressable
          style={styles.bank}
          onPress={() => navigation.navigate("SelectionPageP")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/bank1.png")}
          />
        </Pressable>
        <Text style={[styles.bank1, styles.bank1Layout]}>Bank</Text>
        <Image
          style={styles.firstAidKit2}
          contentFit="cover"
          source={require("../assets/first-aid-kit-2.png")}
        />
        <Text style={[styles.doctor, styles.bank1Layout]}>Doctor</Text>
        <Image
          style={[styles.burger1Icon, styles.restaurantPosition]}
          contentFit="cover"
          source={require("../assets/burger-1.png")}
        />
        <Text style={[styles.restaurant, styles.restaurantPosition]}>
          Restaurant
        </Text>
        <Image
          style={styles.car1Icon}
          contentFit="cover"
          source={require("../assets/car-1.png")}
        />
        <Text style={[styles.vehicleServices, styles.servicesTypo]}>
          Vehicle services
        </Text>
        <Image
          style={styles.waterDrop1}
          contentFit="cover"
          source={require("../assets/water-drop-1.png")}
        />
        <Text style={[styles.waterServices, styles.servicesTypo]}>
          Water services
        </Text>
        <Image
          style={styles.business1Icon}
          contentFit="cover"
          source={require("../assets/business-1.png")}
        />
        <Text style={[styles.business, styles.bank1Layout]}>Business</Text>
        <Text style={[styles.retail, styles.retailTypo]}>Retail</Text>
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <Image
          style={[styles.image2Icon, styles.educationPosition]}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
        <Text style={[styles.education, styles.educationPosition]}>
          Education
        </Text>
      </View>
      <View style={[styles.vectorParent, styles.vectorParentPosition]}>
        <Image
          style={[styles.rectangleIcon, styles.vectorParentPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-3.png")}
        />
        <View style={[styles.homeParent, styles.parentLayout]}>
          <Image
            style={[styles.homeIcon, styles.bank1Layout]}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
          <View style={[styles.homeWrapper, styles.wrapperSpaceBlock]}>
            <Image
              style={styles.homeIcon1}
              contentFit="cover"
              source={require("../assets/home1.png")}
            />
          </View>
        </View>
        <View style={styles.settingsParent}>
          <Image
            style={styles.settingsIcon}
            contentFit="cover"
            source={require("../assets/settings.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Settings</Text>
        </View>
        <View style={[styles.scanQrParent, styles.scanPosition]}>
          <Text style={[styles.scanQr, styles.scanPosition]}>Scan QR</Text>
          <Image
            style={styles.cameraIcon}
            contentFit="cover"
            source={require("../assets/camera.png")}
          />
        </View>
      </View>
      <View style={styles.searchBar}>
        <View style={styles.imgParent}>
          <Image
            style={styles.mingcutesearch2LineIcon}
            contentFit="cover"
            source={require("../assets/mingcutesearch2line1.png")}
          />
          <Text style={styles.searchCategory}>Search Category</Text>
        </View>
        <Image
          style={styles.phslidersHorizontalThinIcon}
          contentFit="cover"
          source={require("../assets/phslidershorizontalthin1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParentPosition: {
    left: 0,
    width: 360,
    position: "absolute",
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    left: 10,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  wrapperSpaceBlock: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  whereAreWeTypo: {
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    textAlign: "left",
  },
  frameLayout: {
    height: 90,
    width: 97,
    borderRadius: Border.br_7xl,
    top: 16,
    backgroundColor: Color.white,
    position: "absolute",
  },
  frameChild1Layout: {
    top: 128,
    height: 90,
    width: 97,
    backgroundColor: Color.white,
    borderRadius: Border.br_7xl,
    position: "absolute",
  },
  frameChildLayout1: {
    top: 240,
    height: 90,
    width: 97,
    backgroundColor: Color.white,
    borderRadius: Border.br_7xl,
    position: "absolute",
  },
  frameChildLayout: {
    top: 345,
    height: 90,
    width: 97,
    backgroundColor: Color.white,
    borderRadius: Border.br_7xl,
    position: "absolute",
  },
  bank1Layout: {
    height: 11,
    position: "absolute",
  },
  restaurantPosition: {
    width: 83,
    left: 49,
    position: "absolute",
  },
  servicesTypo: {
    textAlign: "center",
    fontSize: FontSize.dropMenuMenu_size,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    color: Color.black,
  },
  retailTypo: {
    height: 16,
    width: 65,
    top: 419,
    textAlign: "center",
    fontSize: FontSize.dropMenuMenu_size,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    color: Color.black,
  },
  educationPosition: {
    left: 229,
    position: "absolute",
  },
  vectorParentPosition: {
    height: 87,
    left: 0,
    position: "absolute",
  },
  parentLayout: {
    height: 74,
    width: 75,
    top: 7,
    overflow: "hidden",
  },
  homeTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.black,
  },
  scanPosition: {
    left: 9,
    position: "absolute",
  },
  landingPagePChild: {
    backgroundColor: Color.steelblue,
    height: 172,
    width: 360,
    top: 0,
  },
  imgIcon: {
    height: 54,
    width: 54,
  },
  hiJohn: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_lg,
  },
  whereAreWe: {
    fontSize: FontSize.size_sm,
    color: "#606060",
  },
  whereAreWeQueuingTodayWrapper: {
    marginTop: -15,
  },
  frameGroup: {
    width: 159,
    height: 69,
    marginLeft: 3,
  },
  imgParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    width: 52,
    height: 52,
  },
  frameParent: {
    width: 340,
    justifyContent: "space-between",
    left: 10,
    top: 35,
  },
  locationCategories: {
    color: Color.dimgray_100,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  locationCategoriesWrapper: {
    top: 182,
    width: 342,
    justifyContent: "space-between",
    left: 10,
  },
  frameItem: {
    left: 42,
  },
  frameInner: {
    left: 213,
  },
  rectangleView: {
    left: 42,
  },
  frameChild1: {
    left: 213,
  },
  frameChild2: {
    left: 42,
  },
  frameChild3: {
    left: 213,
  },
  frameChild4: {
    left: 42,
  },
  frameChild5: {
    left: 213,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  bank: {
    left: 64,
    height: 52,
    width: 54,
    top: 35,
    position: "absolute",
  },
  bank1: {
    left: 70,
    width: 41,
    textAlign: "center",
    fontSize: FontSize.dropMenuMenu_size,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    color: Color.black,
    top: 84,
    height: 11,
  },
  firstAidKit2: {
    top: 28,
    left: 232,
    borderRadius: 21,
    width: 60,
    height: 65,
    position: "absolute",
  },
  doctor: {
    left: 236,
    width: 51,
    textAlign: "center",
    fontSize: FontSize.dropMenuMenu_size,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    color: Color.black,
    top: 84,
    height: 11,
  },
  burger1Icon: {
    top: 142,
    height: 62,
  },
  restaurant: {
    top: 198,
    height: 20,
    textAlign: "center",
    fontSize: FontSize.dropMenuMenu_size,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    color: Color.black,
  },
  car1Icon: {
    top: 144,
    left: 225,
    borderRadius: 13,
    width: 74,
    height: 57,
    position: "absolute",
  },
  vehicleServices: {
    top: 192,
    left: 211,
    width: 102,
    height: 22,
    position: "absolute",
  },
  waterDrop1: {
    top: 255,
    left: 57,
    width: 68,
    height: 59,
    position: "absolute",
  },
  waterServices: {
    top: 308,
    left: 45,
    width: 92,
    height: 27,
    position: "absolute",
  },
  business1Icon: {
    top: 264,
    left: 233,
    width: 58,
    height: 42,
    position: "absolute",
  },
  business: {
    top: 309,
    left: 223,
    width: 77,
    textAlign: "center",
    fontSize: FontSize.dropMenuMenu_size,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    color: Color.black,
  },
  retail: {
    left: 58,
    position: "absolute",
  },
  image1Icon: {
    top: 356,
    left: 55,
    width: 72,
    height: 60,
    position: "absolute",
  },
  image2Icon: {
    top: 363,
    width: 62,
    height: 52,
  },
  education: {
    height: 16,
    width: 65,
    top: 419,
    textAlign: "center",
    fontSize: FontSize.dropMenuMenu_size,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    color: Color.black,
  },
  rectangleParent: {
    top: 204,
    height: 506,
    width: 360,
  },
  rectangleIcon: {
    width: 361,
    top: 0,
  },
  homeIcon: {
    top: 60,
    left: 18,
    width: 39,
  },
  homeIcon1: {
    height: 53,
    width: 62,
  },
  homeWrapper: {
    top: -10,
    left: -3,
    width: 80,
    position: "absolute",
  },
  homeParent: {
    left: 142,
    position: "absolute",
  },
  settingsIcon: {
    height: 50,
    width: 50,
    overflow: "hidden",
  },
  home: {
    marginTop: 4,
  },
  settingsParent: {
    top: 19,
    left: 275,
    width: 46,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  scanQr: {
    top: 56,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.black,
  },
  cameraIcon: {
    left: 13,
    height: 49,
    width: 50,
    top: 0,
    position: "absolute",
  },
  scanQrParent: {
    height: 74,
    width: 75,
    top: 7,
    overflow: "hidden",
  },
  vectorParent: {
    top: 713,
    width: 360,
    overflow: "hidden",
  },
  mingcutesearch2LineIcon: {
    width: 28,
    height: 27,
    overflow: "hidden",
  },
  searchCategory: {
    fontFamily: FontFamily.interMedium,
    color: Color.gray_100,
    display: "flex",
    width: 150,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    alignItems: "center",
  },
  phslidersHorizontalThinIcon: {
    width: 24,
    height: 24,
    marginLeft: 97,
    overflow: "hidden",
  },
  searchBar: {
    top: 104,
    borderRadius: Border.br_31xl,
    height: 63,
    paddingLeft: Padding.p_lgi,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    backgroundColor: Color.white,
    alignItems: "center",
    flexDirection: "row",
    width: 340,
    left: 10,
    position: "absolute",
  },
  landingPageP: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default LandingPageP;
