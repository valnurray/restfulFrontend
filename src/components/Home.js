import {Component} from "react";
import {Link} from "react-router-dom";


const Home = ({embedId}) => (
    <div>
        <div className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/rwEOtHDee5o`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />

        </div>
        <Link to="/article">
            Articles
        </Link>
    </div>


);
export default Home;

// https://www.youtube.com/watch?v=rwEOtHDee5o