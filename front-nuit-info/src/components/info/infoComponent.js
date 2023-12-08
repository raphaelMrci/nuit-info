import "./infoComponent.css";
import { ReactComponent as FileIcon } from "../../assets/doc.svg";

export const InfoItem = (props) => {
    return (
        <div className="info-item-box">
            <img className="info-item-img" src={props.img} alt={props.alt} />
            <div className="info-item-bubble">
                <FileIcon style={{ width: 21, height: 21, fill: "#ffffff" }} />
            </div>
            <text className="info-item-title">{props.title}</text>
        </div>
    );
};
