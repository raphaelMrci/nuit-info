import "./CustomButton.css";

export const CustomButton = (props) => {
    let color = props.color;
    if (color === undefined) {
        color = "#FC3E6E";
    }
    return (
        <div className="custom-button-box" style={{ backgroundColor: color }}>
            <text className="custom-button-text">{props.text}</text>
        </div>
    );
};
