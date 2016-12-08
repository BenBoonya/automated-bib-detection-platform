import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "paddingTop": 70
    },
    "portfolio-item": {
        "marginBottom": 25
    },
    "findTagBtn": {
        "position": "absolute",
        "right": -50,
        "marginTop": "5%"
    },
    "button": {
        "backgroundColor": "#428bca",
        "border": "none",
        "color": "white",
        "paddingTop": 15,
        "paddingRight": 32,
        "paddingBottom": 15,
        "paddingLeft": 32,
        "textAlign": "center",
        "textDecoration": "none",
        "fontSize": 16
    },
    "footer": {
        "marginTop": 50,
        "marginRight": 0,
        "marginBottom": 50,
        "marginLeft": 0
    },
    "box": {
        "width": "17%",
        "height": "1500px !important",
        "border": "3px solid #428bca",
        "borderRadius": 5,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "right": {
        "position": "absolute",
        "right": 10
    },
    "bottom": {
        "position": "absolute",
        "bottom": 0
    },
    "selected-element": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "collapse": {
        "float": "right"
    }
});