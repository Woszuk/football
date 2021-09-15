import React from 'react'
import { fetchTeams, leagueId } from '../actions'
import { connect } from 'react-redux'

import './Nav.scss'

class Nav extends React.Component {
    onClick = (id) => {
        this.props.fetchTeams(id);
        this.props.leagueId(id);
    }

    render() {
        return (
            <nav className="nav">
                <div onClick={() => this.onClick(106)} className="nav__item">
                    <img className="nav__item-img" src="https://www.thesportsdb.com/images/media/league/badge/l3jovw1516960585.png" alt="Ekstraliga"></img>
                </div>
                <div onClick={() => this.onClick(78)} className="nav__item">
                    <img className="nav__item-img" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png" alt="Bundelsiga"></img>
                </div>
                <div onClick={() => this.onClick(39)} className="nav__item">
                    <img className="nav__item-img" src="https://download.logo.wine/logo/Premier_League/Premier_League-Logo.wine.png" alt="Premier League"></img>
                </div>
            </nav>
        )
    }
}

export default connect(null, { fetchTeams, leagueId })(Nav)