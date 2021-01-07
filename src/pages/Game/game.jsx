import React, { Component } from 'react';
import Swal from 'sweetalert2'
import './game.css';
import '../../assets/lib/bootstrap.min.css'

import { Redirect, Link } from 'react-router-dom'

import Board from '../../components/board';
import Field from '../../components/field';
import Button from '../../components/button';

class Game extends Component {

    state = {
        game: {
            p1: {
                nickname: "",
            },
            p2: {
                nickname: "",
            }
        },


        board: ['', '', '', '', '', '', '', '', ''],
        symbols: {
            options: ['X', 'O'],
            turn_index: Math.round(Math.random(0, 1)),
            change() {
                this.turn_index = (this.turn_index === 0) ? 1 : 0;
            }
        },

        winning_sequences: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ],
        gameover: false,

        redirect: false

    }

    constructor(props) {
        super(props);

        this.make_play = this.make_play.bind(this);
        this.check_winning_sequences = this.check_winning_sequences.bind(this);
        this.check_tied = this.check_tied.bind(this);
        this.alert = this.alert.bind(this);
        this.scoreBoard = this.scoreBoard.bind(this);
        this.start = this.start.bind(this);
    }

    componentDidMount() {
        const game = game_data.load();
        this.setState({ game });
        themes.loadThemes();
    }

    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}



export default Game;