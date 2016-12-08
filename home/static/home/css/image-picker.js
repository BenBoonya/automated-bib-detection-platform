import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "ulthumbnailsimage_picker_selector": {
        "overflow": "auto",
        "listStyleImage": "none",
        "listStylePosition": "outside",
        "listStyleType": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "ulthumbnailsimage_picker_selector ul": {
        "overflow": "auto",
        "listStyleImage": "none",
        "listStylePosition": "outside",
        "listStyleType": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "ulthumbnailsimage_picker_selector ligroup": {
        "width": "100%"
    },
    "ulthumbnailsimage_picker_selector ligroup_title": {
        "float": "none"
    },
    "ulthumbnailsimage_picker_selector li": {
        "marginTop": 0,
        "marginRight": 12,
        "marginBottom": 12,
        "marginLeft": 0,
        "float": "left"
    },
    "ulthumbnailsimage_picker_selector li thumbnail": {
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "border": "1px solid #dddddd",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none"
    },
    "ulthumbnailsimage_picker_selector li thumbnail img": {
        "WebkitUserDrag": "none"
    },
    "ulthumbnailsimage_picker_selector li thumbnailselected": {
        "background": "#0088cc"
    }
});