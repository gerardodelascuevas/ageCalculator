import Footer from "./Footer";
import "./Card.css";
import Input from "./Input";
import Result from "./Result";

export default function Card() {
    return (
        <div className="bg-white custom-widht-heigth
          custom-border-radius ">
            
            <div className="input-container">
                <Input />
            </div>
            
            <div className="result-container">
                <Result />
            </div>
            
            {/* <Footer /> */}
        
        </div>
    );
}
