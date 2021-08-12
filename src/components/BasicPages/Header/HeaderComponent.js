import React, {Component} from 'react'
import styles from "./Header.module.css"
import BgColor from "../BackgroundColorSwitcher/BgColor";

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className={styles.header}>
                <BgColor />
                <header>

                    <nav
                        // className="navbar navbar-expand-md navbar-dark bg-dark" style={{color: "white"}}
                    >
                        <div className={styles.headerText}>Training PET application</div>

                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent