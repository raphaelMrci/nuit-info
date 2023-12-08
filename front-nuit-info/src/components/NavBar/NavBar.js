import "./NavBar.css";

import { ReactComponent as HomeNavImg } from "../../assets/homeNav.svg";
import { ReactComponent as InfoNavImg } from "../../assets/infoNav.svg";
import { ReactComponent as CalendarNavImg } from "../../assets/calendarNav.svg";
import { useState } from "react";

export const NavBar = (props) => {
    const [pos, setPos] = useState(0);

    return (
        <div className="navbar-box">
            <a onClick={() => setPos(0)}>
                <div className="navbar-item-box">
                    <HomeNavImg
                        className="navbar-item-img"
                        style={
                            pos === 0
                                ? { fill: "#2F4A9B" }
                                : { fill: "#E1E1E1" }
                        }
                    />
                    <text
                        className="navbar-item-text"
                        style={
                            pos === 0
                                ? { color: "#2F4A9B" }
                                : { color: "#E1E1E1" }
                        }
                    >
                        Home
                    </text>
                </div>
            </a>
            <a onClick={() => setPos(1)}>
                <div className="navbar-item-box">
                    <InfoNavImg
                        className="navbar-item-img"
                        style={
                            pos === 1
                                ? { fill: "#2F4A9B" }
                                : { fill: "#E1E1E1" }
                        }
                    />
                    <text
                        className="navbar-item-text"
                        style={
                            pos === 1
                                ? { color: "#2F4A9B" }
                                : { color: "#E1E1E1" }
                        }
                    >
                        Info
                    </text>
                </div>
            </a>
            <a onClick={() => setPos(2)}>
                <div className="navbar-item-box">
                    <CalendarNavImg
                        className="navbar-item-img"
                        style={
                            pos === 2
                                ? { fill: "#2F4A9B" }
                                : { fill: "#E1E1E1" }
                        }
                    />
                    <text
                        className="navbar-item-text"
                        style={
                            pos === 2
                                ? { color: "#2F4A9B" }
                                : { color: "#E1E1E1" }
                        }
                    >
                        Calendar
                    </text>
                </div>
            </a>
        </div>
    );
};
