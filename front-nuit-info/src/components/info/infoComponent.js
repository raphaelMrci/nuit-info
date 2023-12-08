import "./infoComponent.css";

export const InfoItem = (props) => {
    return (
        <div className="info-item-box">
            <img className="info-item-img" src={props.img} alt={props.alt} />
            <text className="info-item-title">{props.title}</text>
        </div>
    );
};
