import React from 'react'

import './Nav.scss'

class Nav extends React.Component {
    render() {
        return (
                <nav className="nav">
                    <div className="nav__item">
                        <img className="nav__item-img" src="https://www.thesportsdb.com/images/media/league/badge/l3jovw1516960585.png" alt="Ekstraliga"></img>
                    </div>
                    <div className="nav__item">
                        <img className="nav__item-img" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png" alt="Bundelsiga"></img>
                    </div>
                    <div className="nav__item">
                        <img className="nav__item-img" src="https://download.logo.wine/logo/Premier_League/Premier_League-Logo.wine.png" alt="Premier League"></img>
                    </div>
                </nav>
        )
    }
}

export default Nav