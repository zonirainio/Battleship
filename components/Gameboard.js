import React, { useState, useEffect, useRef } from 'react'
import { Text, View, Pressable } from 'react-native'
import styles from '../style/style'
import { FontAwesome } from '@expo/vector-icons';

const START = 'life-buoy'
const HIT = 'life-saver'
const MISSED = 'arrows-alt'
const SHIP = 'ship'
let initialBoard = [
    HIT, HIT, HIT, START, START,
    START, START, START, START, START,
    START, START, START, START, START,
    START, START, START, START, START,
    START, START, START, START, START
];
initialBoard.sort(() => Math.random() - 0.5);

export default function Gameboard() {

    const timerRef = useRef();
    const [time, setTime] = useState(30);
    const [board, setBoard] = useState(initialBoard);
    const [nbrOfBombsLeft, setNbrOfBombsLeft] = useState(15);
    const [hits, setHits] = useState(0);
    const [misses, setMisses] = useState(0);
    const [ships, setShips] = useState(3);
    const [status, setStatus] = useState("Click start button to start game.");
    const [button, setButton] = useState("Start game");

    useEffect(() => {
        stop();
        return () => {
            start();
        }
    }, []);

    function start() {
        let seconds = 31;
        const id = setInterval(() => {
            seconds--;
            setTime(seconds);

        }, 1000);
        timerRef.current = id;

    }

    function stop() {
        clearInterval(timerRef.current);
    }

    function StartGame() {
        if (button == "Start game") {
            setButton("New game");
            setStatus("Game is on.");
            start();
            setHits(0);
            setMisses(0);
            setShips(3);
        }
        else if (button == "New game") {
            initialBoard = [
                HIT, HIT, HIT, START, START,
                START, START, START, START, START,
                START, START, START, START, START,
                START, START, START, START, START,
                START, START, START, START, START
            ];
            initialBoard.sort(() => Math.random() - 0.5);
            setBoard(initialBoard);
            setNbrOfBombsLeft(15);
            setHits(0);
            setMisses(0)
            setShips(3);
            setButton("Start game");
            setStatus("Click start button to start game.");
            setTime(30);
            stop();
        }
    }


    function showbombs() {

        const arrayBombs = [];
        for (let i = 0; i < nbrOfBombsLeft; i++) {
            const pommit = <FontAwesome key={i} name="bomb" size={24} color="#569CD6" />;
            arrayBombs.push(pommit);
        }
        return arrayBombs;
    }


    function drawItem(number) {
        if (button == "Start game") {
            setStatus("Click the start button first...");
        }

        if (board[number] === START && WinGame() === status && button !== "Start game") {
            board[number] = MISSED;
            setMisses(misses + 1);
            setNbrOfBombsLeft(nbrOfBombsLeft - 1);
        }
        if (board[number] === HIT && WinGame() === status && button !== "Start game") {
            board[number] = SHIP;
            setHits(hits + 1);
            setShips(ships - 1);
            setNbrOfBombsLeft(nbrOfBombsLeft - 1);
        }

    }

    function chooseItemColor(number) {
        if (board[number] === MISSED) {
            return "#B267E6";
        }
        else if (board[number] === SHIP) {
            return "#4EC9B0";
        }
        else {
            return "#DCDCAA";
        }
    }

    function WinGame() {
        if (nbrOfBombsLeft >= 0 && hits == 3) {
            stop();
            return "You won! Game over.";
        }
        if (nbrOfBombsLeft == 0 && hits < 3) {
            stop();
            return "You lost, out of bombs";
        }
        if (time == 0) {
            stop();
            return "Time's out you lost."
        }
        else {
            return status;
        }
    }

    return (

        <View style={[styles.gameboard,
        { flexDirection: "row" }]}>
            <View style={styles.gameboard}>
                <View style={styles.flex}>
                   <View style={styles.flex}> 
                   <Text style={[styles.gameinfo, {color: "#4EC9B0"}]}>Hits: </Text>
                   <Text style={[styles.gameinfo, {color: "#B5CEA8"}]}>{hits}     </Text>
                   </View>
                   <View style={styles.flex}> 
                   <Text style={styles.gameinfo}>Ships left: </Text>
                   <Text style={[styles.gameinfo, {color: "#B5CEA8"}]}>{ships}     </Text>
                   </View>
                   <View style={styles.flex}> 
                   <Text style={[styles.gameinfo, {color: "#B267E6"}]}>Misses: </Text>
                   <Text style={[styles.gameinfo, {color: "#B5CEA8"}]}>{misses}     </Text>
                   </View>
                </View>
                <View style={styles.flex}>
                    <Pressable style={styles.row} onPress={() => drawItem(0)}>
                        <FontAwesome key={0} name={board[0]} size={24} color={chooseItemColor(0)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(1)}>
                        <FontAwesome key={1} name={board[1]} size={24} color={chooseItemColor(1)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(2)}>
                        <FontAwesome key={2} name={board[2]} size={24} color={chooseItemColor(2)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(3)}>
                        <FontAwesome key={3} name={board[3]} size={24} color={chooseItemColor(3)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(4)}>
                        <FontAwesome key={4} name={board[4]} size={24} color={chooseItemColor(4)} />
                    </Pressable>
                </View>
                <View style={styles.flex}>
                    <Pressable style={styles.row} onPress={() => drawItem(5)}>
                        <FontAwesome key={5} name={board[5]} size={24} color={chooseItemColor(5)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(6)}>
                        <FontAwesome key={6} name={board[6]} size={24} color={chooseItemColor(6)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(7)}>
                        <FontAwesome key={7} name={board[7]} size={24} color={chooseItemColor(7)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(8)}>
                        <FontAwesome key={8} name={board[8]} size={24} color={chooseItemColor(8)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(9)}>
                        <FontAwesome key={9} name={board[9]} size={24} color={chooseItemColor(9)} />
                    </Pressable>
                </View>
                <View style={styles.flex}>
                    <Pressable style={styles.row} onPress={() => drawItem(10)}>
                        <FontAwesome key={10} name={board[10]} size={24} color={chooseItemColor(10)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(11)}>
                        <FontAwesome key={11} name={board[11]} size={24} color={chooseItemColor(11)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(12)}>
                        <FontAwesome key={12} name={board[12]} size={24} color={chooseItemColor(12)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(13)}>
                        <FontAwesome key={13} name={board[13]} size={24} color={chooseItemColor(13)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(14)}>
                        <FontAwesome key={14} name={board[14]} size={24} color={chooseItemColor(14)} />
                    </Pressable>
                </View>
                <View style={styles.flex}>
                    <Pressable style={styles.row} onPress={() => drawItem(15)}>
                        <FontAwesome key={15} name={board[15]} size={24} color={chooseItemColor(15)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(16)}>
                        <FontAwesome key={16} name={board[16]} size={24} color={chooseItemColor(16)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(17)}>
                        <FontAwesome key={17} name={board[17]} size={24} color={chooseItemColor(17)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(18)}>
                        <FontAwesome key={18} name={board[18]} size={24} color={chooseItemColor(18)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(19)}>
                        <FontAwesome key={19} name={board[19]} size={24} color={chooseItemColor(19)} />
                    </Pressable>
                </View>
                <View style={styles.flex}>
                    <Pressable style={styles.row} onPress={() => drawItem(20)}>
                        <FontAwesome key={20} name={board[20]} size={24} color={chooseItemColor(20)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(21)}>
                        <FontAwesome key={21} name={board[21]} size={24} color={chooseItemColor(21)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(22)}>
                        <FontAwesome key={22} name={board[22]} size={24} color={chooseItemColor(22)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(23)}>
                        <FontAwesome key={23} name={board[23]} size={24} color={chooseItemColor(23)} />
                    </Pressable>
                    <Pressable style={styles.row} onPress={() => drawItem(24)}>
                        <FontAwesome key={24} name={board[24]} size={24} color={chooseItemColor(24)} />
                    </Pressable>
                </View>
                <Text style={styles.gameinfo}>{WinGame()}</Text>
                <Pressable style={styles.button} onPress={() => StartGame()}>
                    <Text style={styles.buttonText}>{button}</Text>
                </Pressable>
                <Text style={styles.time}>{time}</Text>
            </View>
            <View style={[{ marginBottom: 110 }]}>
                <View>{showbombs()}</View>
            </View>
        </View>


    )
}
