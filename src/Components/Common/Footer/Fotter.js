import React from 'react';
import './Footer.scss';

const Footer = props => {
    return(
        <footer className="footer">
            <div className="footer__logo-box">
                <img src="/img/logo-green-2x.png" alt="full logo" className="footer_logo" />
            </div>
            <div className="row">
                <div className="col-1-of-2" className="footer__navigation" >
                    <ul className="footer__list">
                        <li className="footer__items">
                            <a href="#" className="footer__link" >Company</a>
                            <a href="#" className="footer__link" >Contact Us</a>
                            <a href="#" className="footer__link" >Careers</a>
                            <a href="#" className="footer__link" >Privacy Policy</a>
                            <a href="#" className="footer__link" >Terms</a>
                        </li>
                    </ul>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built my <a href="#" className="footer__link">Joon An</a>for better UX design<a href="" className="footer_link">of the website</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export { Footer };