import React from "react";
import loader from "../../../assets/images/Dual Ring-1s-200px.svg";
import styles from "../../Users/Users.module.css";


const Preloader = () => {
    return <img src={loader} alt="loader" className={styles.loader} />
}

export default Preloader;