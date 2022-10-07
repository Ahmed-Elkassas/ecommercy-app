import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

import styles from 'styles/footer.module.css'

export default function Footer() {
    return (
        <div className={styles["footer-container"]}>
            <p>2022 E-Commercy All rights reserved</p>
            <div className={styles.icons}>
                <AiOutlineGithub />
                <AiOutlineLinkedin />
            </div>
        </div>  
    )
}