import React, { Component } from 'react';
import './CustomNavbar.css';
import {Link} from 'react-router-dom';
import Logo from './assets/logo.png';

class CustomNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: false,
            scrollPosition: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        return window.addEventListener('scroll', this.handleScroll)
    }
    
    componentWillUnmount() {
        return window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        const scrollPositionY = +window.scrollY
        return this.setState({ scrollPositionY })
    }

    handleClick(){
        this.setState({
            condition: !this.state.condition,
        });
    }

    render() {
        const isScrolling = !!this.state.scrollPositionY
        return (
            <div className="wrapper">
                <header>
                    <nav className={isScrolling? "black" : null}>
                        <div className="menu-icon">
                            <i className="fa fa-bars fa-2x" onClick={this.handleClick}></i>
                        </div>
                        <div className="logo">
                            <Link className="logoLink" href="/" to="/"><img src={Logo} alt="logo"/></Link>
                        </div>
                        <div className="menu">
                            <ul className={this.state.condition? "showing" : null}>
                                <li><Link href="/about" to="/about">About</Link></li>
                                <li><Link href="/profile" to="/profile">Shop</Link></li>
                                <li><Link href="/profile" to="/profile">Profile</Link></li>
                                <li><Link href="/profile" to="/profile">Register/LogIn</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default CustomNavbar;