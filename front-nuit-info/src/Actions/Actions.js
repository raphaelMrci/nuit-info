import "./Actions.css";
import { useEffect, useState } from "react";
import { Dirty } from '../dirty';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export function Actions() {
    const basicJson = [
      { id: 0, name: "Action1", finish: true },
      { id: 1, name: "Action2", finish: true },
      { id: 2, name: "Action3", finish: false }
    ];
    const [filledJson, setFilledJson] = useState([]);

    useEffect(() => {
      const storedActions = localStorage.getItem("actions");
      if (!storedActions || JSON.parse(storedActions).length === 0) {
        console.log("localStorage is empty or 'actions' is not defined");
        localStorage.setItem("actions", JSON.stringify(basicJson));
        setFilledJson(basicJson);
      } else {
        console.log("Stored actions found", storedActions);
        setFilledJson(JSON.parse(storedActions));
      }
    }, [basicJson]);

    const handleChange = (id, field, value) => {
        setFilledJson((prevList) => {
          const newList = prevList.map((item) =>
            item.id === id ? { ...item, [field]: value } : item
          );
          localStorage.setItem("actions", JSON.stringify(newList));
          return newList;
        });
      };

    return (
      <div className="app">
        <div style={{ top: 40, marginLeft: 20, fontWeight: "bold", fontSize: 50 }}>
          MES ACTIONS
        </div>

        <div className="tab">
          {filledJson.map((val) => {
            console.log(val.name, val.finish);
            return (
              <div className="tabline" key={val.id}>
                <input
                  type="checkbox"
                  defaultChecked={val.finish}
                  onChange={() => {
                    handleChange(val.id, 'finish', !val.finish);
                  }}
                />
                <p>{val.name}</p>
              </div>
            );
          })}
        </div>
        <Dirty />
      </div>
    );
  }
