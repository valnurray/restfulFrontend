import {Link} from "react-router-dom";
import styles from "./Home.module.css"



const Home = ({embedId}) => (
    <div className={styles.homeWrapper}>
        <div className="video-responsive">
            <iframe
                width="100%"
                height="640"
                src={`https://www.youtube.com/embed/rwEOtHDee5o`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>

    </div>


);
export default Home;
