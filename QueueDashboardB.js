import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const QueueDashboardB = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.queueDashboardB, styles.iconLayout]}>
      <Image
        style={styles.imgIcon}
        contentFit="cover"
        source={require("../assets/img1.png")}
      />
      <Text style={styles.fbnGroveMall}>FBN Grove Mall</Text>
      <View style={[styles.fbnLogo1Wrapper, styles.fbnLayout]}>
        <Image
          style={[styles.fbnLogo1, styles.fbnLayout]}
          contentFit="cover"
          source={require("../assets/fbn-logo-11.png")}
        />
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("LandingPageP")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/frame-50.png")}
        />
      </Pressable>
      <Pressable
        style={styles.frameParent}
        onPress={() => navigation.navigate("QueuedDashboardC")}
      >
        <View style={[styles.frameChild, styles.menuLabelFlexBox]} />
        <Text style={styles.queue}>Queue</Text>
      </Pressable>
      <View style={styles.queueDashboardBChild} />
      <View style={[styles.vectorParent, styles.frameItemLayout]}>
        <Image
          style={[styles.frameItem, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-31.png")}
        />
        <View style={[styles.homeParent, styles.parentLayout]}>
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
        </View>
        <View style={[styles.settingsParent, styles.menuLabelFlexBox]}>
          <Image
            style={styles.settingsIcon}
            contentFit="cover"
            source={require("../assets/settings.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Settings</Text>
        </View>
        <View style={[styles.scanQrParent, styles.parentLayout]}>
          <Text style={[styles.scanQr, styles.homeTypo]}>Scan QR</Text>
          <Image
            style={styles.cameraIcon}
            contentFit="cover"
            source={require("../assets/camera.png")}
          />
        </View>
      </View>
      <View style={styles.dropdownBoxWrapper}>
        <View style={styles.dropdownBox}>
          <View style={styles.header}>
            <View style={[styles.menuLabel, styles.menuLabelFlexBox]}>
              <Text style={styles.menuLabel1}>Open a Bank account</Text>
            </View>
            <Image
              style={styles.iconsregularchevronLayout}
              contentFit="cover"
              source={require("../assets/iconsregularchevrondowns1.png")}
            />
          </View>
          <View style={styles.itemsFrame}>
            <View style={styles.itemsList}>
              <View style={[styles.itemHover, styles.itemFlexBox]}>
                <View style={styles.label1}>
                  <Text style={[styles.label11, styles.label11Typo]}>
                    Opening a bank account
                  </Text>
                </View>
                <Image
                  style={[
                    styles.iconsregularchevronDownS1,
                    styles.iconsregularchevronLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconsregularchevrondowns.png")}
                />
              </View>
              <View style={[styles.itemHover1, styles.itemFlexBox]}>
                <View style={styles.label2}>
                  <Text style={[styles.label11, styles.label11Typo]}>
                    General Enquiries
                  </Text>
                </View>
                <Image
                  style={[
                    styles.iconsregularchevronDownS1,
                    styles.iconsregularchevronLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconsregularchevrondowns.png")}
                />
              </View>
              <View style={[styles.itemHover2, styles.itemFlexBox]}>
                <View style={styles.label2}>
                  <Text style={[styles.label11, styles.label11Typo]}>
                    Private Wealth
                  </Text>
                </View>
                <Image
                  style={[
                    styles.iconsregularchevronDownS1,
                    styles.iconsregularchevronLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconsregularchevrondowns.png")}
                />
              </View>
              <View style={[styles.itemHover3, styles.itemFlexBox]}>
                <View style={styles.label4}>
                  <Text style={[styles.label11, styles.label11Typo]}>
                    Personal Loans
                  </Text>
                </View>
                <Image
                  style={[
                    styles.iconsregularchevronDownS1,
                    styles.iconsregularchevronLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconsregularchevrondowns.png")}
                />
              </View>
              <View style={[styles.itemHover4, styles.itemFlexBox]}>
                <View style={styles.label2}>
                  <Text style={[styles.label51, styles.labelPosition]}>
                    Label5
                  </Text>
                </View>
                <Image
                  style={[
                    styles.iconsregularchevronDownS1,
                    styles.iconsregularchevronLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconsregularchevrondowns.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.queueDashboardBItem, styles.queueLayout]} />
      <Image
        style={[styles.queueDashboardBInner, styles.queueLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-22.png")}
      />
      <View style={[styles.rectangleView, styles.queueLayout]} />
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
      <Image
        style={[styles.image4Icon, styles.fbnLogo11Layout]}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-32.png")}
      />
      <Pressable
        style={styles.seeAllParent}
        onPress={() => navigation.navigate("BanksSelectionP")}
      >
        <Text style={styles.seeAll}>See all</Text>
        <Image
          style={styles.frameInner}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
      </Pressable>
      <Text style={styles.alternativeLocations}>Alternative Locations</Text>
      <Text style={[styles.inQueue, styles.inQueueTypo]}>
        <Text style={styles.text}>5</Text>
        <Text style={styles.inQueue1}> in Queue</Text>
      </Text>
      <Text style={[styles.serviceTime, styles.inQueueTypo]}>
        <Text style={styles.text1}>+/-</Text>
        <Text style={styles.text2}>{`14:30 `}</Text>
        <Text style={styles.inQueue1}>SERVICE TIME</Text>
      </Text>
      <Text style={[styles.kmFromLocationContainer, styles.inQueueTypo]}>
        <Text style={styles.text3}>11.5</Text>
        <Text style={styles.kmFromLocation}>KM FROM LOCATION</Text>
      </Text>
      <View style={styles.frameGroup}>
        <View style={[styles.groupParent, styles.groupLayout]}>
          <View style={styles.fbnLogo1Container}>
            <Image
              style={[styles.fbnLogo11, styles.fbnLogo11Layout]}
              contentFit="cover"
              source={require("../assets/fbn-logo-1.png")}
            />
          </View>
          <Text style={[styles.fbnProsperita, styles.fbnTypo]}>
            FBN Prosperita
          </Text>
          <Text style={styles.distance5Km}>{`Distance: 5 Km
Queue: 15
Service Time: +/- 14:00`}</Text>
        </View>
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={styles.fbnLogo1Container}>
            <Image
              style={[styles.fbnLogo11, styles.fbnLogo11Layout]}
              contentFit="cover"
              source={require("../assets/fbn-logo-1.png")}
            />
          </View>
          <Text style={[styles.fbnIndependanceAvenue, styles.fbnTypo]}>
            FBN Independance avenue
          </Text>
          <Text style={styles.distance5Km}>{`Distance: 20 Km
Queue: 10
Service Time: +/- 15:00`}</Text>
        </View>
      </View>
      <Text style={[styles.services, styles.label11Typo]}>Services</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  fbnLayout: {
    height: 97,
    width: 100,
    position: "absolute",
  },
  menuLabelFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameItemLayout: {
    height: 87,
    position: "absolute",
  },
  parentLayout: {
    height: 74,
    width: 75,
    top: 7,
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.black,
  },
  itemFlexBox: {
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "space-between",
    paddingVertical: Padding.p_2xs,
    backgroundColor: Color.white,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  label11Typo: {
    color: Color.gray_200,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  iconsregularchevronLayout: {
    height: 20,
    width: 20,
  },
  labelPosition: {
    top: "0%",
    left: "0%",
    fontFamily: FontFamily.dropMenuMenu,
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.dropMenuMenu_size,
  },
  queueLayout: {
    height: 90,
    width: 97,
    borderRadius: Border.br_7xl,
    top: 276,
    position: "absolute",
  },
  fbnLogo11Layout: {
    width: 65,
    position: "absolute",
  },
  inQueueTypo: {
    letterSpacing: "1%",
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  groupLayout: {
    height: 84,
    width: 320,
    borderColor: "#e9e9e9",
    borderRadius: Border.br_14xl,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white,
    left: 4,
    position: "absolute",
    overflow: "hidden",
  },
  fbnTypo: {
    height: 21,
    letterSpacing: 0.2,
    left: 82,
    top: 9,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  imgIcon: {
    width: 359,
    height: 110,
    left: 0,
    top: 0,
    position: "absolute",
  },
  fbnGroveMall: {
    top: 162,
    left: 90,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  fbnLogo1: {
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
  },
  fbnLogo1Wrapper: {
    top: 61,
    left: 128,
    width: 100,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  wrapper: {
    width: 63,
    height: 67,
    top: 22,
    left: 7,
    position: "absolute",
  },
  frameChild: {
    top: 11,
    backgroundColor: Color.mediumslateblue,
    alignItems: "center",
    left: 9,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  queue: {
    left: 101,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    top: 22,
    position: "absolute",
  },
  frameParent: {
    top: 648,
    left: 52,
    height: 63,
    width: 251,
    position: "absolute",
    overflow: "hidden",
  },
  queueDashboardBChild: {
    top: 307,
    left: 33,
    width: 308,
    height: 18,
    position: "absolute",
  },
  frameItem: {
    left: 2,
    width: 361,
    top: 0,
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
    padding: Padding.p_3xs,
    flexDirection: "row",
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
  },
  settingsParent: {
    top: 19,
    left: 275,
    width: 46,
    height: 55,
    alignItems: "center",
    position: "absolute",
  },
  scanQr: {
    top: 56,
    left: 9,
    position: "absolute",
  },
  cameraIcon: {
    left: 13,
    height: 49,
    width: 50,
    top: 0,
    position: "absolute",
  },
  scanQrParent: {
    left: 9,
  },
  vectorParent: {
    top: 713,
    left: -2,
    width: 360,
    overflow: "hidden",
  },
  menuLabel1: {
    color: Color.darkgray,
    fontFamily: FontFamily.dropMenuMenu,
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.dropMenuMenu_size,
    fontWeight: "500",
    textAlign: "left",
  },
  menuLabel: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    borderRadius: Border.br_5xs,
    borderColor: "#b8bbc2",
    borderWidth: 1.3,
    paddingHorizontal: Padding.p_lg,
    zIndex: 1,
    justifyContent: "space-between",
    paddingVertical: Padding.p_2xs,
    borderStyle: "solid",
    backgroundColor: Color.white,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  label11: {
    top: "0%",
    left: "0%",
    fontFamily: FontFamily.dropMenuMenu,
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.dropMenuMenu_size,
  },
  label1: {
    width: 45,
    height: 18,
  },
  iconsregularchevronDownS1: {
    opacity: 0,
  },
  itemHover: {
    zIndex: 4,
  },
  label2: {
    width: 49,
    height: 18,
  },
  itemHover1: {
    zIndex: 3,
  },
  itemHover2: {
    zIndex: 2,
  },
  label4: {
    width: 50,
    height: 18,
  },
  itemHover3: {
    zIndex: 1,
  },
  label51: {
    fontWeight: "500",
    top: "0%",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  itemHover4: {
    zIndex: 0,
  },
  itemsList: {
    right: "0%",
    bottom: -218,
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    height: 218,
    justifyContent: "flex-end",
    left: "0%",
    backgroundColor: Color.white,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  itemsFrame: {
    height: 1,
    zIndex: 0,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  dropdownBox: {
    height: 43,
    left: 4,
    top: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 251,
    position: "absolute",
  },
  dropdownBoxWrapper: {
    top: 191,
    left: 48,
    width: 260,
    height: 83,
    position: "absolute",
    overflow: "hidden",
  },
  queueDashboardBItem: {
    borderWidth: 1,
    borderColor: "#fff",
    width: 97,
    borderRadius: Border.br_7xl,
    top: 276,
    borderStyle: "solid",
    backgroundColor: Color.white,
    left: 19,
  },
  queueDashboardBInner: {
    width: 97,
    borderRadius: Border.br_7xl,
    top: 276,
    left: 128,
  },
  rectangleView: {
    left: 237,
    borderWidth: 1,
    borderColor: "#fff",
    width: 97,
    borderRadius: Border.br_7xl,
    top: 276,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  image3Icon: {
    top: 287,
    left: 34,
    width: 68,
    height: 69,
    position: "absolute",
  },
  image4Icon: {
    left: 254,
    height: 44,
    top: 299,
  },
  rectangleIcon: {
    top: 434,
    height: 58,
    width: 360,
    left: 0,
    position: "absolute",
  },
  seeAll: {
    letterSpacing: 0.1,
    lineHeight: 14,
    color: Color.mediumslateblue,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  frameInner: {
    width: 10,
    height: 7,
    marginLeft: 6,
  },
  seeAllParent: {
    top: 427,
    left: 290,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  alternativeLocations: {
    top: 421,
    fontSize: FontSize.size_lg,
    color: Color.dimgray_100,
    width: 351,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    left: 7,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_21xl,
  },
  inQueue1: {
    fontSize: FontSize.size_sm,
  },
  inQueue: {
    top: 289,
    left: 37,
    width: 62,
    height: 63,
  },
  text1: {
    fontSize: FontSize.size_xl,
  },
  text2: {
    fontSize: FontSize.size_5xl,
  },
  serviceTime: {
    left: 131,
    width: 93,
    top: 299,
    height: 55,
  },
  text3: {
    fontSize: FontSize.size_13xl,
  },
  kmFromLocation: {
    fontSize: FontSize.dropMenuMenu_size,
  },
  kmFromLocationContainer: {
    top: 294,
    left: 245,
    width: 87,
    height: 56,
  },
  fbnLogo11: {
    height: 67,
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
  },
  fbnLogo1Container: {
    left: 10,
    top: 9,
    width: 65,
    height: 67,
    position: "absolute",
  },
  fbnProsperita: {
    width: 168,
  },
  distance5Km: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.dimgray_200,
    width: 155,
    height: 46,
    left: 82,
    fontSize: FontSize.dropMenuMenu_size,
    top: 30,
    textAlign: "left",
    position: "absolute",
  },
  groupParent: {
    top: 5,
  },
  fbnIndependanceAvenue: {
    width: 201,
  },
  groupContainer: {
    top: 98,
  },
  frameGroup: {
    top: 452,
    width: 328,
    height: 196,
    left: 19,
    position: "absolute",
    overflow: "hidden",
  },
  services: {
    top: "24.88%",
    left: "14.72%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratMedium,
  },
  queueDashboardB: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default QueueDashboardB;
