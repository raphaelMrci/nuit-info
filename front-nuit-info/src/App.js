import infoImg from "./assets/motionblur.png";
import "./App.css";
import { useEffect, useState } from "react";
import { InfoItem } from "./components/info/infoComponent.js";
import { CustomButton } from "./components/CustomButton/CustomButton.js";

function App() {
    const touchesComponent = (element) => {
        console.log(element);
        return (
            <div className="line">
                <div className="notes">
                    {element.game.map((ele) => {
                        return (
                            <div
                                style={{
                                    backgroundColor: "black",
                                    width: 100,
                                    height: 50,
                                    position: "absolute",
                                    top: ele.y,
                                    zIndex: 1,
                                }}
                            >
                                <p>hey</p>
                            </div>
                        );
                    })}
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
        { id: 0, game: [] },
        { id: 1, game: [] },
        { id: 2, game: [] },
        { id: 3, game: [] },
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
            <CustomButton text="Start" />
        </div>
    );
}

export default App;
