import React, {useState} from "react";
import Select from "react-select"
import styles from "./BgColor.module.css"

function BgColor() {

    const colors =[{
            value: 1,
            label: "day",
            color: "white"
        },
        {
            value: 2,
            label: "night",
            color: "burlywood"

        }];
    const [setBgColor, ddlValue] = useState(colors.label);

    const ddlHandler = (e) => {
        // ddlValue(e.label)
        ddlValue(e.color)
    }

    return (
        <div className={styles.stylesSelector} >
            <style>{'body {background-color: '+setBgColor+' }'}</style>
            <Select  options={colors} onChange={ddlHandler} ></Select>
        </div>
    );
}

export default BgColor;