import { Button, Checkbox, CircularProgress, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
interface IArmy {
  name: string;
  score: number;
  isDisable?: boolean;
}

const delay = (cb: Function) => {
  setTimeout(() => {
    cb();
  }, 1000);
};

function App() {
  const colors = ["#6C7EE1", "#92B9E3", "#FFC4A4", "#FBA2D0", "#C688EB"];
  const disableColor = "#eee";

  const [result, setResult] = useState<IArmy[][]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const [score, setScore] = useState({ team1: 0, team2: 0 });
  const [isDuplicate, setIsDuplicate] = useState<boolean>(true);

  const [initData, setInitData] = useState<IArmy[]>([
    {
      score: 4,
      name: "Shang",
      isDisable: false,
    },
    {
      score: 4,
      name: "Assyrian",
      isDisable: false,
    },
    {
      score: 4,
      name: "Egyptian",
      isDisable: false,
    },
    {
      score: 3,
      name: "Phoenician",
      isDisable: false,
    },
    {
      score: 3,
      name: "Palmyran",
      isDisable: false,
    },
    {
      score: 3,
      name: "Hittile",
      isDisable: false,
    },
    {
      score: 3,
      name: "Yamato",
      isDisable: false,
    },
    {
      score: 2,
      name: "Minoan",
      isDisable: false,
    },
    {
      score: 2,
      name: "Roman",
      isDisable: false,
    },
    {
      score: 2,
      name: "Babylonian",
      isDisable: false,
    },
    {
      score: 2,
      name: "Persian",
      isDisable: false,
    },
    {
      score: 2,
      name: "Sumerian",
      isDisable: false,
    },
    {
      score: 2,
      name: "Macedonia",
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
      isDisable: false,
    },
  ]);

  // const initData: IArmy[] = [
  //   {
  //     score: 4,
  //     name: "Shang",
  //   },
  //   {
  //     score: 4,
  //     name: "Assyrian",
  //   },
  //   {
  //     score: 4,
  //     name: "Egyptian",
  //   },
  //   {
  //     score: 3,
  //     name: "Phoenician",
  //   },
  //   {
  //     score: 3,
  //     name: "Palmyran",
  //   },
  //   {
  //     score: 3,
  //     name: "Hittile",
  //   },
  //   {
  //     score: 3,
  //     name: "Yamato",
  //   },
  //   {
  //     score: 2,
  //     name: "Minoan",
  //   },
  //   {
  //     score: 2,
  //     name: "Roman",
  //   },
  //   {
  //     score: 2,
  //     name: "Babylonian",
  //   },
  //   {
  //     score: 2,
  //     name: "Persian",
  //   },
  //   {
  //     score: 2,
  //     name: "Sumerian",
  //   },
  //   {
  //     score: 2,
  //     name: "Macedonia",
  //   },
  //   {
  //     score: 1,
  //     name: "Choson",
  //   },
  //   {
  //     score: 1,
  //     name: "Greek",
  //   },
  //   {
  //     score: 1,
  //     name: "Carthaginian",
  //   },
  // ];

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

    const dataCanSelect = initData.filter((item) => !item.isDisable);
    do {
      teams = Array(teamNumber)
        .fill("")
        .map(() => []);
      totalScoreTeams = Array(teamNumber).fill(0);

      for (let i = 0; i < teamNumber; i++) {
        for (let j = 0; j < playerPerTeam; j++) {
          if (!isDuplicate) {
            let isLoop = true;
            do {
              const rand =
                dataCanSelect[Math.floor(Math.random() * dataCanSelect.length)];
              const currentArmy = teams[i].map((arm: any) => arm.name);
              if (!currentArmy.includes(rand.name)) {
                teams[i].push(rand);
                totalScoreTeams[i] += rand.score;
                isLoop = false;
              }
            } while (isLoop);
          } else {
            const rand =
              dataCanSelect[Math.floor(Math.random() * dataCanSelect.length)];
            teams[i].push(rand);
            totalScoreTeams[i] += rand.score;
          }
        }
      }
    } while (!checkScore(totalScoreTeams));
    // console.log(teams);
    setResult(teams);
    setLoading(false);
  };

  useEffect(() => {
    document.title = "MTT Studio";
  }, []);
  return (
    <div
    // style={{
    //   backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/bookstorev2-352401.appspot.com/o/sticker.png?alt=media&token=bbc04015-9965-4e83-9e7d-55f624818cca")`,
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "contain",
    //   backgroundPosition: "center bottom",
    // }}
    >
      <div className="header">MTT Studio</div>
      <div className="container">
        <div className="wrapper-left-container">
          <div className="wrap-score ">
            <p className="score-title">Tỉ số: &nbsp;</p>
            <p className="score-title">{score.team1}</p>
            <p>&nbsp;-&nbsp;</p>
            <p className="score-title">{score.team2}</p>

            <div className="edit" onClick={() => setOpenEdit((p) => !p)}>
              <ModeEditIcon />
            </div>
          </div>
          {openEdit && (
            <div className="edit-input">
              <TextField
                id="outlined-basic"
                label="Team 1"
                variant="outlined"
                type="number"
                value={score.team1}
                onChange={(e) => {
                  setScore((pre) => {
                    return { ...pre, team1: +e.target.value };
                  });
                }}
              />
              <TextField
                id="outlined-basic"
                label="Team 2"
                variant="outlined"
                type="number"
                value={score.team2}
                onChange={(e) => {
                  setScore((pre) => {
                    return { ...pre, team2: +e.target.value };
                  });
                }}
              />
              {/* <Button
                variant="outlined"
                onClick={() => {
                  setOpenEdit(false);
                }}
              >
                Ok
              </Button> */}
            </div>
          )}

          <div className="wrapper-left">
            <div className="wrap-team">
              <div className="team-name">Team 1</div>
              {loading ? (
                <div className="loading">
                  <CircularProgress />
                </div>
              ) : (
                <ul>
                  {result?.[0]?.map((item, i) => {
                    return <li key={i}>{item.name}</li>;
                  })}
                </ul>
              )}
            </div>
            <div className="wrap-team border-left">
              <div className="team-name">Team 2</div>
              {loading ? (
                <div className="loading">
                  <CircularProgress />
                </div>
              ) : (
                <ul>
                  {result?.[1]?.map((item, i) => {
                    return <li key={i}>{item.name}</li>;
                  })}
                </ul>
              )}
            </div>
          </div>
          <div className="wrap-button">
            <button
              className="my-12"
              onClick={() => {
                setLoading(true);
                delay(random);
              }}
            >
              Click
            </button>
            <Checkbox
              onChange={(e) => setIsDuplicate(e.target.checked)}
              value={isDuplicate}
            />
          </div>

          <img
            alt="banner"
            className="banner"
            src="https://firebasestorage.googleapis.com/v0/b/bookstorev2-352401.appspot.com/o/aoe.jpg?alt=media&token=1022e879-7e20-43a2-a927-68472bf6acbf"
          />
        </div>
        <div className="wrapper-right-container">
          <div className="wrapper-right">
            <div className="team-name">Bảng quân</div>
            {initData.map((item, i) => {
              return (
                <div
                  className="wrap-army"
                  key={item.score}
                  style={{
                    backgroundColor: item.isDisable
                      ? disableColor
                      : colors[item.score % 5],
                  }}
                  onClick={() =>
                    setInitData((pre) => {
                      return pre.map((data) => {
                        return data.name === item.name
                          ? { ...data, isDisable: !data.isDisable }
                          : data;
                      });
                    })
                  }
                >
                  <div>{item.name}</div>
                  <div>{item.score}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
