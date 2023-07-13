import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const QueueDashboardA = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.queueDashboardA}>
      <View style={[styles.queueDashboardAChild, styles.imgIconPosition]} />
      <Image
        style={[styles.imgIcon, styles.imgIconPosition]}
        contentFit="cover"
        source={require("../assets/img.png")}
      />
      <Text style={[styles.fbnGroveMall, styles.label51Clr]}>
        FBN Grove Mall
      </Text>
      <View style={[styles.fbnLogo1Wrapper, styles.fbnLayout]}>
        <Image
          style={[styles.fbnLogo1, styles.fbnLogo1Layout]}
          contentFit="cover"
          source={require("../assets/fbn-logo-11.png")}
        />
      </View>
      <Image
        style={[styles.queueDashboardAItem, styles.queuePosition]}
        contentFit="cover"
        source={require("../assets/frame-50.png")}
      />
      <Pressable
        style={[styles.frameParent, styles.frameParentLayout]}
        onPress={() => navigation.navigate("QueueDashboardB")}
      >
        <View style={[styles.frameChild, styles.menuLabelFlexBox]} />
        <Text style={[styles.checkQueue, styles.checkQueueTypo]}>
          Check queue
        </Text>
      </Pressable>
      <View style={styles.listboxComponentParent}>
        <View style={[styles.listboxComponent, styles.listboxComponentLayout]}>
          <View style={styles.listboxTitle}>
            <Text style={[styles.occupation, styles.label11Clr]}>Services</Text>
          </View>
        </View>
        <View style={[styles.dropdownBox, styles.menuLabelFlexBox]}>
          <View style={styles.header}>
            <View style={[styles.menuLabel, styles.menuLabelFlexBox]}>
              <Text style={[styles.menuLabel1, styles.labelTypo]}>
                Select a service
              </Text>
            </View>
            <Image
              style={styles.iconsregularchevronLayout}
              contentFit="cover"
              source={require("../assets/iconsregularchevronups.png")}
            />
          </View>
          <View style={styles.itemsFrame}>
            <View style={styles.itemsList}>
              <View style={[styles.itemHover, styles.itemFlexBox]}>
                <View style={styles.label1}>
                  <Text style={[styles.label11, styles.labelTypo]}>
                    Opening a bank account
                  </Text>
                </View>
                <Image
                  style={[
                    styles.iconsregularchevronDownS,
                    styles.iconsregularchevronLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconsregularchevrondowns.png")}
                />
              </View>
              <View style={[styles.itemHover1, styles.itemFlexBox]}>
                <View style={styles.label2}>
                  <Text style={[styles.label11, styles.labelTypo]}>
                    General Enquiries
                  </Text>
                </View>
                <Image
                  style={[
                    styles.iconsregularchevronDownS,
                    styles.iconsregularchevronLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconsregularchevrondowns.png")}
                />
              </View>
              <View style={[styles.itemHover2, styles.itemFlexBox]}>
                <View style={styles.label2}>
                  <Text style={[styles.label11, styles.labelTypo]}>
                    Private Wealth
                  </Text>
                </View>
                <Image
                  style={[
                    styles.iconsregularchevronDownS,
                    styles.iconsregularchevronLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconsregularchevrondowns.png")}
                />
              </View>
              <View style={[styles.itemHover3, styles.itemFlexBox]}>
                <View style={styles.label4}>
                  <Text style={[styles.label11, styles.labelTypo]}>
                    Personal Loans
                  </Text>
                </View>
                <Image
                  style={[
                    styles.iconsregularchevronDownS,
                    styles.iconsregularchevronLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconsregularchevrondowns.png")}
                />
              </View>
              <View style={[styles.itemHover4, styles.itemFlexBox]}>
                <View style={styles.label2}>
                  <Text style={[styles.label51, styles.labelTypo]}>Label5</Text>
                </View>
                <Image
                  style={[
                    styles.iconsregularchevronDownS,
                    styles.iconsregularchevronLayout,
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconsregularchevrondowns.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.dropdownBoxChild} />
        </View>
      </View>
      <Image
        style={[styles.queueDashboardAInner, styles.listboxComponentLayout]}
        contentFit="cover"
        source={require("../assets/frame-60.png")}
      />
      <View style={styles.groveMallKleineKuppeWindWrapper}>
        <Text style={[styles.groveMallKleine, styles.label11Clr]}>
          Grove Mall, Kleine kuppe, Windhoek
        </Text>
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  imgIconPosition: {
    height: 209,
    top: 0,
    position: "absolute",
  },
  label51Clr: {
    color: Color.black,
    position: "absolute",
  },
  fbnLayout: {
    height: 97,
    width: 100,
  },
  fbnLogo1Layout: {
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  queuePosition: {
    top: 22,
    position: "absolute",
  },
  frameParentLayout: {
    width: 251,
    position: "absolute",
  },
  menuLabelFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  checkQueueTypo: {
    textAlign: "center",
    fontSize: FontSize.size_mini,
  },
  listboxComponentLayout: {
    width: 308,
    position: "absolute",
  },
  label11Clr: {
    color: Color.gray_200,
    position: "absolute",
  },
  labelTypo: {
    fontFamily: FontFamily.dropMenuMenu,
    lineHeight: 18,
    letterSpacing: 0.4,
    fontSize: FontSize.dropMenuMenu_size,
    fontWeight: "500",
    textAlign: "left",
  },
  itemFlexBox: {
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "space-between",
    paddingVertical: Padding.p_2xs,
    flexDirection: "row",
    backgroundColor: Color.white,
    alignSelf: "stretch",
    alignItems: "center",
  },
  iconsregularchevronLayout: {
    height: 20,
    width: 20,
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
  queueDashboardAChild: {
    backgroundColor: "#d9d9d9",
    width: 363,
    left: -3,
  },
  imgIcon: {
    left: 3,
    width: 356,
  },
  fbnGroveMall: {
    top: 260,
    left: 95,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
  },
  fbnLogo1: {
    left: 0,
    top: 0,
    height: 97,
    width: 100,
  },
  fbnLogo1Wrapper: {
    top: 161,
    left: 130,
    position: "absolute",
  },
  queueDashboardAItem: {
    left: 7,
    width: 63,
    height: 67,
    overflow: "hidden",
  },
  frameChild: {
    top: 11,
    backgroundColor: Color.mediumslateblue,
    left: 9,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  checkQueue: {
    left: 76,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    color: Color.white,
    top: 22,
    position: "absolute",
  },
  frameParent: {
    top: 648,
    left: 52,
    height: 63,
    overflow: "hidden",
  },
  occupation: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.gray_200,
    left: "0%",
    top: "0%",
    textAlign: "left",
  },
  listboxTitle: {
    height: "6.92%",
    width: "90.91%",
    right: "4.55%",
    bottom: "93.08%",
    left: "4.55%",
    top: "0%",
    position: "absolute",
  },
  listboxComponent: {
    left: -4,
    height: 289,
    top: 0,
  },
  menuLabel1: {
    color: Color.darkgray,
  },
  menuLabel: {
    flexDirection: "row",
  },
  header: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: "#215aff",
    borderWidth: 1.3,
    paddingHorizontal: Padding.p_lg,
    zIndex: 2,
    justifyContent: "space-between",
    paddingVertical: Padding.p_2xs,
    flexDirection: "row",
    backgroundColor: Color.white,
    alignSelf: "stretch",
    alignItems: "center",
  },
  label11: {
    color: Color.gray_200,
    position: "absolute",
    left: "0%",
    top: "0%",
  },
  label1: {
    width: 45,
    height: 18,
  },
  iconsregularchevronDownS: {
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
    left: "0%",
    top: "0%",
    color: Color.black,
    position: "absolute",
  },
  itemHover4: {
    zIndex: 0,
  },
  itemsList: {
    right: "0%",
    bottom: 0,
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    height: 218,
    justifyContent: "flex-end",
    backgroundColor: Color.white,
    left: "0%",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  itemsFrame: {
    height: 219,
    zIndex: 1,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  dropdownBoxChild: {
    marginTop: -955.5,
    marginLeft: -1648.5,
    top: "50%",
    left: "50%",
    width: 3297,
    height: 1911,
    zIndex: 0,
    position: "absolute",
  },
  dropdownBox: {
    top: 30,
    left: 4,
    height: 261,
    width: 251,
    position: "absolute",
  },
  listboxComponentParent: {
    top: 339,
    left: 50,
    width: 259,
    height: 258,
    position: "absolute",
    overflow: "hidden",
  },
  queueDashboardAInner: {
    top: 307,
    left: 33,
    height: 18,
  },
  groveMallKleine: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.gray_200,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    left: 0,
    top: 0,
  },
  groveMallKleineKuppeWindWrapper: {
    top: 297,
    left: 58,
    width: 257,
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
    width: 62,
    height: 53,
  },
  homeWrapper: {
    top: -10,
    width: 80,
    padding: Padding.p_3xs,
    flexDirection: "row",
    left: -3,
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
  queueDashboardA: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default QueueDashboardA;
