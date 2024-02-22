import "./InfoDetails.css";

import { useLocation } from "react-router-dom";

export const InfoDetails = () => {
    const { state } = useLocation();
    console.log(state);
    const element = state.element;

    return (
        <div className="info-details">
            <img className="info-img" src={require(`../../${element.img}`)} />
            <h1 className="info-title">{element.title}</h1>
            {element.description.map((ele) => {
                return <p className="info-description">{ele}</p>;
            })}
        </div>
    );
};
