import React from 'react';
import './SectionStories.scss';

const SectionStories = props => {
    return(
        <section className="section-stories">
            <div className="bg-video">
                {/* video content */}
                <video className="bg-video__content" autoPlay muted loop>
                    <source src="/img/video.mp4" type="video/mp4" />
                    <source src="/img/video.webm" type="video/webm" />
                    Your brwoser is not supported
                </video>
            </div>
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    We make people genuinely happy
                </h2>
            </div>
            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <img src="/img/nat-8.jpg" alt="person on a tour" className="story__img" />
                        <figcaption className="story__caption">Mary Smith</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">I hae the best week ever with my family</h3>
                        <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <img src="/img/nat-9.jpg" alt="person on a tour" className="story__img" />
                        <figcaption className="story__caption">Michael Jose</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">Wow My Life is Completely Different</h3>
                        <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                    </div>
                </div>
            </div>
            
            <div className="u-center-text u-margin-top-huge">
                <a href="#" className="btn-text">Read all stories &rarr;</a>
            </div>
        </section>
    );
}

export { SectionStories };