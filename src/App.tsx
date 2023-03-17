import React, { useState } from "react";
import "./App.css";

interface IArmy {
  name: string;
  score: number;
}

function App() {
  const colors = ["#6C7EE1", "#92B9E3", "#FFC4A4", "#FBA2D0", "#C688EB"];

  const [result, setResult] = useState<IArmy[][]>([]);

  const initData: IArmy[] = [
    {
      score: 4,
      name: "Shang",
    },
    {
      score: 4,
      name: "Assyrian",
    },
    {
      score: 4,
      name: "Egyptian",
    },
    {
      score: 3,
      name: "Phoenician",
    },
    {
      score: 3,
      name: "Palmyran",
    },
    {
      score: 3,
      name: "Hittile",
    },
    {
      score: 3,
      name: "Yamato",
    },
    {
      score: 2,
      name: "Minoan",
    },
    {
      score: 2,
      name: "Roman",
    },
    {
      score: 2,
      name: "Babylonian",
    },
    {
      score: 2,
      name: "Persian",
    },
    {
      score: 2,
      name: "Sumerian",
    },
    {
      score: 1,
      name: "Choson",
    },
    {
      score: 1,
      name: "Greek",
    },
    {
      score: 1,
      name: "Carthaginian",
    },
    {
      score: 1,
      name: "Macedonia",
    },
  ];

  const checkScore = (arrs: number[]) => {
    arrs.sort((a, b) => {
      return a - b;
    });
    return Math.abs(arrs[0] - arrs[arrs.length - 1]) <= 1;
  };

  const random = () => {
    const teamNumber = 2;
    const playerPerTeam = 3;
    let teams = Array(teamNumber).fill([]);
    let totalScoreTeams = Array(teamNumber).fill(0);
    do {
      teams = Array(teamNumber)
        .fill("")
        .map(() => []);
      totalScoreTeams = Array(teamNumber).fill(0);

      for (let i = 0; i < teamNumber; i++) {
        for (let j = 0; j < playerPerTeam; j++) {
          const rand = initData[Math.floor(Math.random() * initData.length)];
          teams[i].push(rand);
          totalScoreTeams[i] += rand.score;
        }
      }
    } while (!checkScore(totalScoreTeams));
    console.log(teams);
    setResult(teams);
  };
  return (
    <div className="container">
      <div className="wrapper-left-container">
        <div className="wrapper-left">
          <div className="wrap-team">
            <div className="team-name">Team 1</div>
            <ul>
              {result?.[0]?.map((item, i) => {
                return <li key={i}>{item.name}</li>;
              })}
            </ul>
          </div>
          <div className="wrap-team border-left">
            <div className="team-name">Team 2</div>
            <ul>
              {result?.[1]?.map((item, i) => {
                return <li key={i}>{item.name}</li>;
              })}
            </ul>
          </div>
        </div>
        <button className="my-12" onClick={random}>
          Click
        </button>
      </div>
      <div className="wrapper-right-container">
        <div className="wrapper-right">
          <div className="team-name">Bảng quân</div>
          {initData.map((item, i) => {
            return (
              <div
                className="wrap-army"
                key={item.score}
                style={{ backgroundColor: colors[item.score % 5] }}
              >
                <div>{item.name}</div>
                <div>{item.score}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
