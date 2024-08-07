// app/page.js
// import LanguageSwitcher from '../components/LanguageSwitcher';
// import TranslatedComponent from '../components/TranslatedComponent';
"use client";
import Board from "@/playground/Board";
import { isWin } from "@/playground/WinAllert";
import { useEffect, useState } from "react";

const HomePage = () => {
  const boxs = [
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
  ];
  const [toPlay, setToPlay] = useState(0);
  const [loader, setLoader] = useState(false);
  const [playerOne, setPlayerOne] = useState([]);
  const [playerTwo, setPlayerTwo] = useState([]);

  useEffect(() => {
    // setPlayerOne(localStorage.getItem("playerOne"));
    // setPlayerTwo(localStorage.getItem("playerTwo"));
    // console.log((playerOne[playerOne.length - 1]),  (playerOne[playerOne?.length - 2]))
    console.log({playerOne, playerTwo})
    isWin(playerOne,"Player One win!")
    if (
      ((playerOne[playerOne?.length - 1]) -
        (playerOne[playerOne?.length - 2]) ==
        7 ||
        (playerOne[playerOne?.length - 1]) -
          (playerOne[playerOne?.length - 2]) ==
          -7) &&
      ((playerOne[playerOne?.length - 2]) -
        (playerOne[playerOne?.length - 3]) ==
        7 ||
        (playerOne[playerOne?.length - 2]) -
          (playerOne[playerOne?.length - 3]) ==
          -7) &&
      ((playerOne[playerOne?.length - 3]) -
        (playerOne[playerOne?.length - 4]) ==
        7 ||
        (playerOne[playerOne?.length - 3]) -
          (playerOne[playerOne?.length - 4]) ==
          -7)
    ) {
      window.alert("Player one win")
    }
  }, [loader]);

  const handlePlay = (idx) => {
    // setLoader(!loader);
    console.log(idx);
    if (toPlay === 0) {
      const box = document.getElementById(`box-${idx}`);
      box.style = "background-color: blue";
      if (playerOne?.length === undefined) {
        // localStorage.setItem("playerOne", idx + 1);
        setPlayerOne([idx]);
      }
      // localStorage.setItem("playerOne", [playerOne, idx + 1]);
      setPlayerOne([...playerOne,idx])
      setToPlay(1);
      setLoader(!loader);
      console.log(playerOne)
      // isWin(playerOne,"Player One win!")

    } else {
      const box = document.getElementById(`box-${idx}`);
      box.style = "background-color: red";
      if (playerTwo?.length === undefined) {
        // localStorage.setItem("playerTwo", idx + 1);
        setPlayerTwo([idx]);
      }
      // localStorage.setItem("playerTwo", [playerTwo, idx + 1]);
      setPlayerTwo([...playerTwo,idx])
      setToPlay(0);
      setLoader(!loader);

    }
    console.log({ playerOne, playerTwo });
  };

  return (
    <div className=" border-2 border-black min-w-screen min-h-screen mx-auto">
      {/* <LanguageSwitcher />
      <TranslatedComponent /> */}
      <p>Array One: {playerOne}</p>
      <p>Array Two: {playerTwo}</p>
      <div className=" mx-auto border-2 min-h-screen my-auto flex justify-center items-center">
        <div className=" grid grid-cols-6">
          {boxs?.map((box, idx) => (
            <div
              key={idx}
              onClick={() => handlePlay(idx)}
              id={`box-${idx}`}
              className={` w-20 h-20 border border-black ${
                toPlay === 0 ? "hover:bg-blue-500" : "hover:bg-red-500"
              } `}
            >
              <p>{idx}</p>
              {/* {box?.map((box2, idx) => (
                <div key={idx} className=" w-20 h-20 border border-black"></div>
              ))} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
