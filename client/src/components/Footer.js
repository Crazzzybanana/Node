import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footerWraper">
                <footer>
                    <div className="footerContact">
                        <div className="fab fa-telegram-plane"><a rel="noopener noreferrer" target="_blank" href="https://telegram.me/CrazzyBanan">Telegram</a></div>
                        <div className="fab fa-linkedin"><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/dima-ponomarchuk-098a53150/">LinkedIn</a></div>
                        <div className="fas fa-robot"><a href="https://telegram.me/CrazzyBanan">TBot</a></div>
                        <div className="fas fa-at"><a href="https://telegram.me/CrazzyBanan">Email</a></div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;