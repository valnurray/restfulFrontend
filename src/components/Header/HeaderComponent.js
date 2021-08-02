import React, {Component} from 'react'
import styles from "./Header.module.css"

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className={styles.header}>
                <header>
                    <nav
                        // className="navbar navbar-expand-md navbar-dark bg-dark" style={{color: "white"}}
                    >
                        <div className={styles.headerText}>Article Management App</div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent