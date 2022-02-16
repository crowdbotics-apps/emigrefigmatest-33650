import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_69_810}>
        <Text style={styles.Text_69_810}>
          Your application is under review. Please expect to hear from Emigre
          Team soon!
        </Text>
      </View>
      <View style={styles.View_69_811}>
        <View style={styles.View_I69_811_31_130}>
          <Text style={styles.Text_I69_811_31_130}>Continue</Text>
        </View>
      </View>
      <View style={styles.View_69_812}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aced/38ce/5da9ef4d7d526dc5bf04c2daf154b032"
          }}
          style={styles.ImageBackground_I69_812_31_451}
        />
        <View style={styles.View_I69_812_31_452}>
          <Text style={styles.Text_I69_812_31_452}>Aman Sharma </Text>
        </View>
      </View>
      <View style={styles.View_133_949}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8964/114b/f0e1c4b7f698c70ed6c8b20f9214494e"
          }}
          style={styles.ImageBackground_133_950}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb10/65d4/8dd60e4986a66f8f632f7b34e83c6823"
          }}
          style={styles.ImageBackground_133_971}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90cd/c8a2/5d63f48eb597168486bce97d12bfbe75"
          }}
          style={styles.ImageBackground_133_972}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(246, 247, 249, 1)" },
  View_2: { height: hp("111%") },
  View_69_810: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_69_810: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_811: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("100%"),
    backgroundColor: "rgba(255, 145, 77, 1)"
  },
  View_I69_811_31_130: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I69_811_31_130: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_812: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I69_812_31_451: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I69_812_31_452: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I69_812_31_452: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_133_949: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_133_950: {
    width: wp("56%"),
    height: hp("29%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_133_971: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_133_972: {
    width: wp("20%"),
    height: hp("13%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
