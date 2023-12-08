import "./InfoList.css";

import { Link } from "react-router-dom";

import { InfoItem } from "../../components/info/infoComponent";

import data from "../../data/infos.json";

export const InfoList = () => {
    return (
        <div className="InfoList">
            <text className="title">Infos</text>
            <div className="info-list-container">
                <ul className="info-list">
                    {data
                        .filter((item) => item.id % 2 === 0)
                        .map((element) => {
                            return (
                                <li className="info-list-element">
                                    <Link
                                        to={{
                                            pathname: "/info",
                                        }}
                                        state={{ element }}
                                    >
                                        <InfoItem
                                            title={element.title}
                                            img={require(`../../${element.img}`)}
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                </ul>
                <ul className="info-list" style={{ marginTop: 104 }}>
                    {data
                        .filter((item) => item.id % 2 === 1)
                        .map((element) => {
                            return (
                                <li className="info-list-element">
                                    <Link
                                        to={{
                                            pathname: "/info",
                                        }}
                                        state={{ element }}
                                    >
                                        <InfoItem
                                            title={element.title}
                                            img={require(`../../${element.img}`)}
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
};
