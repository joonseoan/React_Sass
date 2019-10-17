import React from 'react';
import './Footer.scss';

const Footer = props => {

    return(
        <footer className="footer">
            <div className="footer__logo-box">
                {/* 2) */}
                <picture alt="full_logo">
                    {/* Setup media query in "source"
                        So, when the screen size is 37.5em, it uses "small" in "srcSet"
                    */}
                    <source srcSet="/img/logo-green-small-1x.png 1x, /img/logo-green-small-2x.png 2x" media="(max-width: 37.5em)"/>
                    {/* 
                        [ Pixel!!! ]
                        if the screen size is bigger than phone, the browser uses img setup below
                        
                    */}
                    <img srcSet="/img/logo-green-1x.png 1x, /img/logo-green-2x.png 2x" alt="Full Logo" src="img/logo-green-2x.png"/>
                   
                </picture>

                {/* 1) */}
                {/* 
                    when using two pictures 
                    
                    1) Low resolution image: /img/logo-green-1x.png 1x:  '1x' desity scriptor 
                    2) Higher resolution image: /img/logo-green-2x.png 2x: '2x' density scriptor 
                    
                    Without setup, the last specified image bacomes rendered. 
                    
                    
                */}
            
                {/* <img srcSet="/img/logo-green-1x.png 1x, /img/logo-green-2x.png 2x" alt="full logo" className="footer__logo" /> */}
                {/* When using a single density picture */}
                {/* <img src="/img/logo-green-2x.png" alt="full logo" className="footer__logo" /> */}
            </div>
            <div className="row">
                <div className="col-1-of-2" >
                    <div className="footer__navigation" >
                        <ul className="footer__list">
                            <li className="footer__items">
                                <a href="#" className="footer__link" >Company</a>
                            </li>
                            <li className="footer__items">
                                <a href="#" className="footer__link" >Contact Us</a>
                            </li>
                            <li className="footer__items">
                                <a href="#" className="footer__link" >Careers</a>
                            </li>
                            <li className="footer__items">
                                <a href="#" className="footer__link" >Privacy Policy</a>
                            </li>
                            <li className="footer__items">
                                <a href="#" className="footer__link" >Terms</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built my <a href="#" className="footer__link">Joon An</a>for my better css skill<a href="" className="footer__link"> which is advanced css and Sass</a>.
                        Copyright &copy; by Joon An. You are 100% allowed to use this webpage for both personal and commercial use,
                        but NOT to claim it as your own design. A credit to the original author, Joon An, is of course highly appreciated.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export { Footer };