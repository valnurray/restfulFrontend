import {Component} from "react";
import styles from "./Navbar.module.css"
import {Link, NavLink} from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return(
            <div className={styles.navbar}>
                <div className={styles.titlesFromNavbar}>
                    <NavLink to ="/article" activeClassName = {styles.active}> Articles</NavLink>
                </div>

                <div className={styles.titlesFromNavbar}>
                    <NavLink to ="/author" activeClassName = {styles.active}> Authors</NavLink>
                </div>

                <div className={styles.titlesFromNavbar}>
                    <NavLink to ="/digest" activeClassName = {styles.active}> Digest</NavLink>
                </div>

            </div>
        )
    }


}
export default Navbar;