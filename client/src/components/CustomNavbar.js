import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './CustomNavbar.css';

class CustomNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition : false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            condition: !this.state.condition,
        });
    }

    render() {
        return (
            <div className="wrapper">
                <header>
                    <nav>
                        <div className="menu-icon">
                            <i className="fa fa-bars fa-2x" onClick={this.handleClick}></i>
                        </div>
                        <div className="logo">
                            Account Manager
                        </div>
                        <div className="menu">
                            <ul className={this.state.condition? "showing" : null}>
                                <li><Link href="/" to="/">Home</Link></li>
                                <li><Link href="/about" to="/about">About</Link></li>
                                <li><Link href="/profile" to="/profile">Profile</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
            // <Navbar default collapseOnSelect>
            //     <Navbar.Header>
            //         <Navbar.Brand>
            //             <Link href="/" to="/">Account Manager</Link>
            //         </Navbar.Brand>
            //     </Navbar.Header>
            //     <Nav pullRight>
            //         <NavItem eventKey={1} componentClass={Link} href="/about" to="/about">
            //             About
            //         </NavItem>
            //         <NavItem className="profN" eventKey={2} componentClass={Link} href="/profile" to="/profile">
            //             <span className="profS">Profile</span>
            //         </NavItem>
            //     </Nav>
            // </Navbar>
        );
    }
}

export default CustomNavbar;