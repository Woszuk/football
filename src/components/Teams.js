import React from 'react'
import { connect } from 'react-redux'
import { fetchTeams, leagueId } from '../actions'

import './Teams.scss'

class Teams extends React.Component {
    getNameLeague() {
        const {leagueId} = this.props.id;
        if(leagueId === 78) { return 'Bundesliga' }

        if(leagueId === 39) { return 'Premier League' }

        return 'Ekstraklasa'
    }

    componentDidMount() {
        this.props.fetchTeams();
        this.props.leagueId();
    }

    renderTeams() {
        return this.props.teams.map(team => {
            return (
                <div className="teams__item" key={team.team.id}>
                    <img className="teams__item-img" src={team.team.logo} alt="logo"></img>
                    <h2 className="teams__item-name">{team.team.name}</h2>
                </div>
            )
        })
    }

    render() {
        let league = 'Ekstraklasa'
        if(this.props.id) {
            league = this.getNameLeague();
        }

        if(this.props.teams.length <= 0) {
            return <div className="teams">Loading...</div>
        }
        return (
            <div className="teams">
                <h1 className="teams__heading">{league}</h1>
                {this.renderTeams()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        teams: Object.values(state.teams),
        id : state.leagueId
    }
}

export default connect(mapStateToProps, { fetchTeams, leagueId })(Teams);