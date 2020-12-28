import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import Button from '../../components/button'

import './settings.css'

class Settings extends Component {

    state = {
        maxRounds: 1,

        redirect: false,
        nicknameP1: 'Player 1',
        nicknameP2: 'Player 2',

        inputP1: '',
        inputP2: '',
    }

    constructor(props) {
        super(props);

        this.setRounds = this.setRounds.bind(this);
        this.changeTheme = this.changeTheme.bind(this);

    }

    setRounds(rounds) {
        this.setState({maxRounds: rounds});
    }

    async start() {
        const maxRounds = this.state.maxRounds;
        const nicknameP1 = this.state.nicknameP1;
        const nicknameP2 = this.state.nicknameP2;
        const gameData = await game_data.generateDate(maxRounds, nicknameP1, nicknameP2);
        await game_data.save(gameData);
        this.setState({ redirect: true})

    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Settings;