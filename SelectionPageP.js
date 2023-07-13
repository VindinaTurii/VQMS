import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const SelectionPageP = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.selectionPageP}>
      <View style={styles.selectionPagePChild} />
      <View style={[styles.selectionPagePItem, styles.fbnLogo1Position]} />
      <View style={[styles.vectorParent, styles.frameChildPosition]}>
        <Image
          style={[styles.frameChild, styles.frameChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-3.png")}
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
      <View style={[styles.searchBar, styles.searchBarPosition]}>
        <View style={styles.mingcutesearch2LineParent}>
          <Image
            style={styles.mingcutesearch2LineIcon}
            contentFit="cover"
            source={require("../assets/mingcutesearch2line.png")}
          />
          <Text style={styles.searchQueue}>Search queue</Text>
        </View>
        <Image
          style={styles.phslidersHorizontalThinIcon}
          contentFit="cover"
          source={require("../assets/phslidershorizontalthin.png")}
        />
      </View>
      <View style={[styles.selectionPagePInner, styles.nedBankLogo1Position]}>
        <View style={styles.ellipseParent}>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/ellipse-56.png")}
          />
          <Image
            style={styles.bankIcon}
            contentFit="cover"
            source={require("../assets/bank.png")}
          />
          <Text style={[styles.banks, styles.banksTypo]}>Banks</Text>
        </View>
      </View>
      <View style={styles.ellipseGroup}>
        <Image
          style={styles.frameInner}
          contentFit="cover"
          source={require("../assets/ellipse-57.png")}
        />
        <Image
          style={[styles.geographyIcon, styles.searchBarPosition]}
          contentFit="cover"
          source={require("../assets/geography.png")}
        />
      </View>
      <Text style={[styles.khomas, styles.banksTypo]}>-Khomas</Text>
      <View style={[styles.frameView, styles.frameLayout]}>
        <View style={[styles.frameParent, styles.frameLayout]}>
          <Pressable
            style={[styles.groupParent, styles.groupParentLayout]}
            onPress={() => navigation.navigate("QueueDashboardA")}
          >
            <View style={[styles.fbnLogo1Wrapper, styles.fbnLayout]}>
              <Image
                style={[styles.fbnLogo1, styles.fbnLayout]}
                contentFit="cover"
                source={require("../assets/fbn-logo-1.png")}
              />
            </View>
            <Text style={[styles.fbnGroveMall, styles.bankTypo]}>
              FBN Grove Mall
            </Text>
            <Text style={styles.windhoekKleineKuppe}>
              Windhoek, Kleine kuppe, Grove Mall
            </Text>
          </Pressable>
          <View style={[styles.groupContainer, styles.groupParentLayout]}>
            <View style={[styles.fbnLogo1Wrapper, styles.fbnLayout]}>
              <Image
                style={[styles.fbnLogo1, styles.fbnLayout]}
                contentFit="cover"
                source={require("../assets/fbn-logo-1.png")}
              />
            </View>
            <Text style={[styles.fbnGroveMall, styles.bankTypo]}>
              FBN Prosperita
            </Text>
            <Text
              style={styles.windhoekKleineKuppe}
            >{`Windhoek, Prosperita, Nickel street `}</Text>
          </View>
          <View
            style={[
              styles.standardBankKatuturaParent,
              styles.groupParentLayout,
            ]}
          >
            <Text style={[styles.standardBankKatutura, styles.bankTypo]}>
              Standard Bank Katutura
            </Text>
            <Text
              style={styles.windhoekKleineKuppe}
            >{`Windhoek, Katutura, Independence avenue `}</Text>
            <Image
              style={[styles.standardBank1, styles.bankLayout]}
              contentFit="cover"
              source={require("../assets/standard-bank-1.png")}
            />
          </View>
          <View style={[styles.groupParent1, styles.groupParentLayout]}>
            <View style={[styles.fbnLogo1Wrapper, styles.fbnLayout]}>
              <View style={[styles.fbnLogo1, styles.fbnLayout]} />
            </View>
            <Text style={[styles.bankWindhoekMega, styles.bankTypo]}>
              Bank Windhoek Mega center
            </Text>
            <Text
              style={styles.windhoekKleineKuppe}
            >{`Windhoek, Kleine kuppe, Chasie street `}</Text>
            <Image
              style={[styles.bankWindhoek1, styles.searchBarPosition]}
              contentFit="cover"
              source={require("../assets/bank-windhoek-1.png")}
            />
          </View>
          <View
            style={[
              styles.nedBankIndependenceAvenueParent,
              styles.groupParentLayout,
            ]}
          >
            <Text style={[styles.nedBankIndependence, styles.bankTypo]}>
              Ned Bank Independence avenue
            </Text>
            <Text
              style={styles.windhoekKleineKuppe}
            >{`Windhoek, Katutura, Independence avenue `}</Text>
            <Image
              style={[styles.nedBankLogo1, styles.nedBankLogo1Position]}
              contentFit="cover"
              source={require("../assets/ned-bank-logo-1.png")}
            />
          </View>
          <View style={[styles.groupParent2, styles.groupParentLayout]}>
            <View style={[styles.fbnLogo1Wrapper, styles.fbnLayout]}>
              <View style={[styles.fbnLogo1, styles.fbnLayout]} />
            </View>
            <Text style={[styles.bankWindhoekMega, styles.bankTypo]}>
              Bank of Namibia
            </Text>
            <Text style={styles.windhoekKleineKuppe}>
              Windhoek, Town sqaure Robert Mugabe avenue
            </Text>
            <Image
              style={[styles.bankOfNamibia1, styles.bankLayout]}
              contentFit="cover"
              source={require("../assets/bank-of-namibia-1.png")}
            />
          </View>
        </View>
      </View>
      <Text style={styles.selectYourMain}>Select your Main Branch:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fbnLogo1Position: {
    left: 0,
    top: 0,
  },
  frameChildPosition: {
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
    textAlign: "left",
    color: Color.black,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  scanPosition: {
    left: 9,
    position: "absolute",
  },
  searchBarPosition: {
    left: 10,
    position: "absolute",
  },
  nedBankLogo1Position: {
    left: 22,
    position: "absolute",
  },
  banksTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    width: 330,
    position: "absolute",
  },
  groupParentLayout: {
    height: 84,
    width: 320,
    borderWidth: 1,
    borderColor: "#e9e9e9",
    borderStyle: "solid",
    borderRadius: Border.br_14xl,
    left: 5,
    backgroundColor: Color.white,
    position: "absolute",
    overflow: "hidden",
  },
  fbnLayout: {
    height: 67,
    width: 65,
    position: "absolute",
  },
  bankTypo: {
    height: 21,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    left: 82,
    top: 9,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  bankLayout: {
    height: 57,
    position: "absolute",
  },
  selectionPagePChild: {
    top: 175,
    left: 7,
    borderRadius: Border.br_xl,
    width: 338,
    height: 43,
    backgroundColor: Color.white,
    position: "absolute",
  },
  selectionPagePItem: {
    backgroundColor: Color.steelblue,
    height: 175,
    width: 360,
    position: "absolute",
  },
  frameChild: {
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
    position: "absolute",
  },
  settingsIcon: {
    height: 50,
    width: 50,
    overflow: "hidden",
  },
  home: {
    marginTop: 4,
    textAlign: "left",
    color: Color.black,
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
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
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
  searchQueue: {
    fontFamily: FontFamily.interMedium,
    color: Color.gray_100,
    display: "flex",
    width: 150,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    alignItems: "center",
  },
  mingcutesearch2LineParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  phslidersHorizontalThinIcon: {
    width: 24,
    marginLeft: 97,
    height: 24,
    overflow: "hidden",
  },
  searchBar: {
    top: 126,
    width: 340,
    height: 44,
    paddingLeft: Padding.p_lgi,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    borderRadius: Border.br_31xl,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  frameItem: {
    top: 3,
    left: 2,
    width: 86,
    height: 82,
    position: "absolute",
  },
  bankIcon: {
    left: 12,
    width: 66,
    height: 62,
    top: 13,
    position: "absolute",
  },
  banks: {
    top: 91,
    left: 17,
    fontSize: FontSize.size_lg,
    color: Color.white,
    width: 56,
    height: 24,
  },
  ellipseParent: {
    left: 110,
    width: 96,
    height: 115,
    top: 7,
    position: "absolute",
    overflow: "hidden",
  },
  selectionPagePInner: {
    width: 315,
    height: 122,
    top: 0,
    overflow: "hidden",
  },
  frameInner: {
    top: 6,
    left: 1,
    height: 41,
    width: 43,
    position: "absolute",
  },
  geographyIcon: {
    top: 12,
    width: 25,
    height: 29,
  },
  ellipseGroup: {
    top: 171,
    left: 6,
    width: 47,
    height: 51,
    position: "absolute",
    overflow: "hidden",
  },
  khomas: {
    top: 184,
    left: 62,
    fontSize: FontSize.size_xl,
    width: 111,
    height: 25,
    color: Color.black,
  },
  fbnLogo1: {
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
  },
  fbnLogo1Wrapper: {
    top: 9,
    width: 65,
    left: 10,
  },
  fbnGroveMall: {
    width: 168,
    letterSpacing: 0.2,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  windhoekKleineKuppe: {
    top: 30,
    fontSize: FontSize.dropMenuMenu_size,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.dimgray_200,
    width: 155,
    height: 32,
    left: 82,
    textAlign: "left",
    position: "absolute",
  },
  groupParent: {
    top: 0,
  },
  groupContainer: {
    top: 99,
  },
  standardBankKatutura: {
    width: 178,
    letterSpacing: 0.2,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  standardBank1: {
    left: 11,
    top: 13,
    width: 62,
  },
  standardBankKatuturaParent: {
    top: 198,
  },
  bankWindhoekMega: {
    width: 215,
    letterSpacing: 0.2,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  bankWindhoek1: {
    width: 60,
    height: 69,
    top: 7,
  },
  groupParent1: {
    top: 297,
  },
  nedBankIndependence: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0.1,
    width: 238,
  },
  nedBankLogo1: {
    top: 14,
    width: 41,
    height: 50,
  },
  nedBankIndependenceAvenueParent: {
    top: 396,
  },
  bankOfNamibia1: {
    top: 5,
    borderRadius: Border.br_40xl,
    left: 15,
    width: 43,
  },
  groupParent2: {
    top: 495,
  },
  frameParent: {
    height: 453,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  frameView: {
    top: 264,
    height: 431,
    left: 15,
  },
  selectYourMain: {
    top: 231,
    left: 20,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    width: 295,
    height: 23,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  selectionPageP: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SelectionPageP;
