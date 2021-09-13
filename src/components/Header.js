import React from 'react'
import Form from './Form'
import Nav from './Nav';

class Header extends React.Component {
    

    render() {
        return (
            <Nav />
            // <Form onSubmit={this.onSubmit} onChange={this.onChange}/>
        )
    }
}

export default Header;