import React, {Component} from 'react'
import styles from "./Footer.module.css"

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className={styles.footerC}>
                <footer  >
                    <div className={styles.footerText}>All Rights Reserved 2021 @valnur</div>
                </footer>
            </div>
        )
    }
}

export default FooterComponent