import "./Home.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export const Home = () => {
    const touchesComponent = (element) => {
        console.log(element);
        return (
            <div className="container">
                <div className="line">
                    <div className="notes">
                        {element.game.map((ele) => {
                            return (
                                <div
                                    style={{
                                        backgroundColor: element.color,
                                        width: 50,
                                        height: 50,
                                        position: "absolute",
                                        top: ele.y,
                                        zIndex: 1,
                                    }}
                                ></div>
                            );
                        })}
                    </div>
                </div>
                <div className="touches">
                    <a
                        onClick={() => {
                            console.log("clock");
                        }}
                        style={{ color: "white", textAlign: "center" }}
                    >
                        {element.id}
                    </a>
                </div>
            </div>
        );
    };

    const touches = [
        { id: 0, game: [], color: "#FD8495" },
        { id: 1, game: [], color: "#5FE4F7" },
        { id: 2, game: [], color: "#2F4A9B" },
    ];
    const [touche, settouche] = useState(touches);
    const [counter, setcounter] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            touche.forEach((element) => {
                if (element.game.length > 0) {
                    element.game.forEach((ele) => {
                        console.log(ele.y);
                        if (ele.y > 200) {
                            element.game.splice(ele.id, 1);
                        }
                        ele.y += 10;
                    });
                }
            });
            console.log(touche);
        }, 500);
        return () => clearInterval(interval);
    }, [touche]);

    useEffect(() => {
        const interval = setInterval(() => {
            const random = Math.floor(Math.random() * 3);
            touche[random].game.push({
                id: touche[random].game.length - 1,
                y: 0,
            });
            settouche([...touche]);
        }, 2000);
        return () => clearInterval(interval);
    }, [touche]);

    return (
        <div className="App">
            <div className="game">
                <div
                    style={{
                        flexDirection: "row",
                        display: "flex",
                        justifyContent: "space-around",
                    }}
                >
                    {touche.map(touchesComponent)}
                </div>
            </div>
        </div>
    );
};
