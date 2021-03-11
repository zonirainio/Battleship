import React from 'react'
import { Text, View, Pressable } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'
import styles from '../style/style'

let board = [];
const NBR_OF_ROWS = 4;
const NBR_OF_COLS = 4;
const START = 'plus'
const CROSS = 'cross'
const CIRCLE = 'circle'

export default class Gameboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isCross: true,
            winner: ''
        }
        this.initializeBoard();
    }

    initializeBoard() {
        for (let i = 0; i < NBR_OF_ROWS * NBR_OF_COLS; i++) {
            board[i] = START;
        }
    }

    drawItem(number) {
        if (board[number] === START && this.WinGame() === "") {
            board[number] = this.state.isCross ? CROSS : CIRCLE;
            this.setState({ isCross: !this.state.isCross });
            if (this.WinGame() !== "") {
                this.setState({ winner: this.WinGame() });
            }
            else if (board.indexOf(START) === -1) {
                this.setState({ winner: 'No winner' });
            }
        }
    }

    chooseItemColor(number) {
        if (board[number] === CROSS) {
            return "#FF3031";
        }
        else if (board[number] === CIRCLE) {
            return "#45CE30";
        }
        else {
            return "#74B9FF";
        }
    }

    resetGame() {
        this.setState({
            isCross: true,
            winner: ''
        });
        this.initializeBoard();
    }

    WinGame() {
        if (board[0] != START && board[0] == board[1] && board[1] == board[2] && board[2] == board[3]) {
            return board[0];
        }
        else if (board[4] != START && board[4] == board[5] && board[5] == board[6] && board[6] == board[7]) {
            return board[4];
        }
        else if (board[8] != START && board[8] == board[9] && board[9] == board[10] && board[10] == board[11]) {
            return board[8];
        }
        else if (board[12] != START && board[12] == board[13] && board[13] == board[14] && board[14] == board[15]) {
            return board[12];
        }
        else if (board[0] != START && board[0] == board[4] && board[4] == board[8] && board[8] == board[12]) {
            return board[0];
        }
        else if (board[1] != START && board[1] == board[5] && board[5] == board[9] && board[9] == board[13]) {
            return board[1];
        }
        else if (board[2] != START && board[2] == board[6] && board[6] == board[10] && board[10] == board[14]) {
            return board[2];
        }
        else if (board[0] != START && board[0] == board[5] && board[5] == board[10] && board[10] == board[15]) {
            return board[0];
        }
        else if (board[3] != START && board[3] == board[6] && board[6] == board[9] && board[9] == board[12]) {
            return board[3];
        }
        else {
            return "";
        }
    }

    render() {
        const firstRow = [];
        const secondRow = [];
        const thirdRow = [];
        const fourthRow = [];

        for (let i = 0; i < NBR_OF_ROWS; i++) {
            firstRow.push(
                <Pressable key={i} style={styles.row} onPress={() => this.drawItem(i)}>
                    <Entypo key={i} name={board[i]} size={32} color={this.chooseItemColor(i)} />
                </Pressable>
            )
        }

        for (let i = NBR_OF_ROWS; i < NBR_OF_ROWS * 2; i++) {
            secondRow.push(
                <Pressable key={i} style={styles.row} onPress={() => this.drawItem(i)}>
                    <Entypo key={i} name={board[i]} size={32} color={this.chooseItemColor(i)} />
                </Pressable>
            )
        }

        for (let i = NBR_OF_ROWS * 2; i < NBR_OF_ROWS * 3; i++) {
            thirdRow.push(
                <Pressable key={i} style={styles.row} onPress={() => this.drawItem(i)}>
                    <Entypo key={i} name={board[i]} size={32} color={this.chooseItemColor(i)} />
                </Pressable>
            )
        }

        for (let i = NBR_OF_ROWS * 3; i < NBR_OF_ROWS * 4; i++) {
            fourthRow.push(
                <Pressable key={i} style={styles.row} onPress={() => this.drawItem(i)}>
                    <Entypo key={i} name={board[i]} size={32} color={this.chooseItemColor(i)} />
                </Pressable>
            )
        }

        return (
            <View style={styles.gameboard}>
                <View style={styles.flex}>{firstRow}</View>
                <View style={styles.flex}>{secondRow}</View>
                <View style={styles.flex}>{thirdRow}</View>
                <View style={styles.flex}>{fourthRow}</View>
                <Text style={styles.gameinfo}>Winner: {this.state.winner}</Text>
                <Pressable style={styles.button} onPress={() => this.resetGame()}>
                    <Text style={styles.buttonText}>Restart Game</Text>
                </Pressable>
            </View>
        )
    }
}