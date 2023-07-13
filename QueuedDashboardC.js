import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const QueuedDashboardC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.queuedDashboardC}>
      <View style={styles.frameParent}>
        <View style={[styles.frameChild, styles.frameChildFlexBox]} />
        <Text style={styles.leaveQueue}>Leave queue</Text>
      </View>
      <View style={[styles.vectorParent, styles.vectorParentLayout]}>
        <Image
          style={[styles.frameItem, styles.frameItemPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-31.png")}
        />
        <Pressable
          style={[styles.homeParent, styles.parentLayout]}
          onPress={() => navigation.navigate("LandingPageP")}
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
          <View style={styles.homeWrapper}>
            <Image
              style={styles.homeIcon1}
              contentFit="cover"
              source={require("../assets/home2.png")}
            />
          </View>
        </Pressable>
        <View style={[styles.settingsParent, styles.frameChildFlexBox]}>
          <Image
            style={styles.settingsIcon}
            contentFit="cover"
            source={require("../assets/settings.png")}
          />
          <Text style={[styles.home, styles.homeFlexBox]}>Settings</Text>
        </View>
        <View style={[styles.scanQrParent, styles.parentLayout]}>
          <Text style={[styles.scanQr, styles.homeFlexBox]}>Scan QR</Text>
          <Image
            style={[styles.cameraIcon, styles.frameItemPosition]}
            contentFit="cover"
            source={require("../assets/camera.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.confirmationPageImg1, styles.frameItemPosition]}
        contentFit="cover"
        source={require("../assets/confirmation-page-img-1.png")}
      />
      <Text style={[styles.youAreInContainer, styles.containerClr]}>
        <Text style={styles.youAreIn}>{`You are in the queue at: 
`}</Text>
        <Text style={styles.fbnGroveMall}>{`FBN Grove Mall `}</Text>
      </Text>
      <Image
        style={styles.queuedDashboardCChild}
        contentFit="cover"
        source={require("../assets/rectangle-22.png")}
      />
      <View style={[styles.queuedDashboardCItem, styles.queuedLayout]} />
      <View style={[styles.queuedDashboardCInner, styles.queuedLayout]} />
      <Image
        style={[styles.image3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
      <Image
        style={styles.image4Icon}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
      <Text style={[styles.inQueue, styles.inQueueTypo]}>
        <Text style={styles.text}>5</Text>
        <Text style={styles.inQueue1}> in Queue</Text>
      </Text>
      <Text style={[styles.serviceTime, styles.inQueueTypo]}>
        <Text style={styles.text1}>{`14:35 `}</Text>
        <Text style={styles.inQueue1}>SERVICE TIME</Text>
      </Text>
      <Text style={[styles.kmFromLocationContainer, styles.inQueueTypo]}>
        <Text style={styles.text2}>11.5</Text>
        <Text style={styles.kmFromLocation}>KM FROM LOCATION</Text>
      </Text>
      <View style={styles.rectangleParent}>
        <View style={styles.frameInner} />
        <Image
          style={[styles.profile1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/profile-1.png")}
        />
        <Text style={[styles.janeDoe, styles.homeFlexBox]}>Jane Doe</Text>
        <Text style={[styles.teller3DepartmentContainer, styles.containerClr]}>
          <Text style={styles.teller}>Teller:</Text>
          <Text style={styles.text3}>{` 3
`}</Text>
          <Text style={styles.teller}>Department:</Text>
          <Text style={styles.text3}>{` Real Estate
`}</Text>
          <Text style={styles.teller}>Floor:</Text>
          <Text style={styles.text3}> 1st</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildFlexBox: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  vectorParentLayout: {
    width: 360,
    overflow: "hidden",
  },
  frameItemPosition: {
    top: 0,
    position: "absolute",
  },
  parentLayout: {
    height: 74,
    width: 75,
    top: 7,
    position: "absolute",
    overflow: "hidden",
  },
  homeFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  containerClr: {
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  queuedLayout: {
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    backgroundColor: Color.white,
    height: 90,
    width: 97,
    borderRadius: Border.br_7xl,
    top: 282,
    position: "absolute",
  },
  iconLayout: {
    height: 69,
    position: "absolute",
  },
  inQueueTypo: {
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: "1%",
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  frameChild: {
    top: 11,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.mediumslateblue,
    left: 9,
  },
  leaveQueue: {
    top: 22,
    left: 78,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  frameParent: {
    top: 648,
    left: 52,
    width: 251,
    height: 63,
    position: "absolute",
    overflow: "hidden",
  },
  frameItem: {
    left: 2,
    width: 361,
    height: 87,
  },
  homeIcon: {
    top: 60,
    left: 18,
    width: 39,
    height: 11,
    position: "absolute",
  },
  homeIcon1: {
    height: 53,
    width: 62,
  },
  homeWrapper: {
    top: -10,
    left: -3,
    width: 80,
    flexDirection: "row",
    padding: Padding.p_3xs,
    position: "absolute",
  },
  homeParent: {
    left: 142,
  },
  settingsIcon: {
    height: 50,
    width: 50,
    overflow: "hidden",
  },
  home: {
    marginTop: 4,
    fontFamily: FontFamily.robotoMedium,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  settingsParent: {
    top: 19,
    left: 275,
    width: 46,
    height: 55,
  },
  scanQr: {
    top: 56,
    fontFamily: FontFamily.robotoMedium,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    left: 9,
    position: "absolute",
  },
  cameraIcon: {
    left: 13,
    height: 49,
    width: 50,
  },
  scanQrParent: {
    left: 9,
  },
  vectorParent: {
    top: 713,
    left: -2,
    height: 87,
    position: "absolute",
  },
  confirmationPageImg1: {
    left: 0,
    height: 227,
    width: 360,
    overflow: "hidden",
  },
  youAreIn: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  fbnGroveMall: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  youAreInContainer: {
    top: 224,
    left: 64,
    fontSize: FontSize.size_xl,
  },
  queuedDashboardCChild: {
    left: 136,
    height: 90,
    width: 97,
    borderRadius: Border.br_7xl,
    top: 282,
    position: "absolute",
  },
  queuedDashboardCItem: {
    left: 17,
  },
  queuedDashboardCInner: {
    left: 256,
  },
  image3Icon: {
    top: 293,
    width: 68,
    left: 32,
  },
  image4Icon: {
    left: 277,
    width: 65,
    height: 44,
    top: 305,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_21xl,
  },
  inQueue1: {
    fontSize: FontSize.size_sm,
  },
  inQueue: {
    left: 31,
    top: 305,
    width: 62,
    height: 63,
  },
  text1: {
    fontSize: FontSize.size_5xl,
  },
  serviceTime: {
    left: 137,
    width: 93,
    top: 305,
    height: 55,
  },
  text2: {
    fontSize: FontSize.size_13xl,
  },
  kmFromLocation: {
    fontSize: FontSize.dropMenuMenu_size,
  },
  kmFromLocationContainer: {
    top: 300,
    left: 262,
    width: 87,
    height: 56,
  },
  frameInner: {
    top: -1,
    left: -1,
    borderRadius: 55,
    width: 316,
    height: 184,
    backgroundColor: Color.white,
    position: "absolute",
  },
  profile1Icon: {
    top: 15,
    left: 122,
    borderRadius: 41,
    width: 71,
  },
  janeDoe: {
    top: 91,
    left: 105,
    fontFamily: FontFamily.robotoBold,
    width: 105,
    height: 21,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    position: "absolute",
  },
  teller: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
  },
  text3: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
  },
  teller3DepartmentContainer: {
    top: 122,
    width: 246,
    height: 46,
    fontSize: FontSize.dropMenuMenu_size,
    left: 32,
  },
  rectangleParent: {
    top: 421,
    left: 22,
    width: 315,
    height: 183,
    position: "absolute",
    overflow: "hidden",
  },
  queuedDashboardC: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default QueuedDashboardC;
