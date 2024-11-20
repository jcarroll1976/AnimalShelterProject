import catImage from "../cutecat.jpg";
import "./CatContainer.css";

export default function CatContainer() {
    return (
        <div className="container">
            <img src={catImage} alt="cat-on-blanket"/>
        </div>
    )
}