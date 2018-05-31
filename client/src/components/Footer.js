import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footerWraper">
                <footer>
                    <div>
                        <div className="footerContact">
                            <div className="fab fa-telegram-plane"><a className="tLink" rel="noopener noreferrer" target="_blank" href="https://telegram.me/CrazzyBanan">Telegram</a></div><br/>
                            <div className="fas fa-robot"><a className="tbLink" href="https://telegram.me/CrazzyBanan">TBot</a></div><br/>
                            <div className="fas fa-at"><a className="eLink" href="https://telegram.me/CrazzyBanan">e-mail</a></div><br/>
                        </div>
                        <div className="footerAbout">
                            <div>
                                <h3>About Account Manager</h3>
                                <p>
                                    WebApp for storage, selling and purchase accounts data from diferent services.
                                    If you are always losing your account data from differnt accounts or you just want 
                                    to sell, share your accounts this WebApp for you;
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;