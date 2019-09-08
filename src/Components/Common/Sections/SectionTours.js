import React from 'react';
import './SectionTours.scss';

const SectionTours = props => {
    return(
        <section className="section-tours">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Most Popular Tours
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-3">
                    <div className="card">
                        {/* Eelement */}
                        <div className="card__side card__side--front">
                            {/* card picture */}
                            <div className="card__picture card__picture--1">
                                &nbsp;
                            </div>
                            {/* card heading */}
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1">
                                    The Sea Explorer
                                </span>
                            </h4>
                            {/* card details */}
                            <div className="card__details">
                                <ul>
                                    <li>3 day tours</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>Sleep in cozy hotels</li>
                                    <li>Difficulty: easy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Only</p>
                                    <p className="card__price-value">$297</p>
                                </div>
                                {/* "a" element is one of the block elements */}
                                <a href="#" className="btn btn--white">Buy now!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="card">
                        {/* Eelement */}
                        <div className="card__side card__side--front">
                            {/* card picture */}
                            <div className="card__picture card__picture--2">
                                &nbsp;
                            </div>
                            {/* card heading */}
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--2">
                                    The Forest Hiker
                                </span>
                            </h4>
                            {/* card details */}
                            <div className="card__details">
                                <ul>
                                    <li>7 day tours</li>
                                    <li>Up to 40 people</li>
                                    <li>6 tour guides</li>
                                    <li>Sleep in cozy tents</li>
                                    <li>Difficulty: medium</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-2">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Only</p>
                                    <p className="card__price-value">$597</p>
                                </div>
                                {/* "a" element is one of the block elements */}
                                <a href="#" className="btn btn--white">Buy now!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                    <div className="card">
                        {/* Eelement */}
                        <div className="card__side card__side--front">
                            {/* card picture */}
                            <div className="card__picture card__picture--3">
                                &nbsp;
                            </div>
                            {/* card heading */}
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--3">
                                    The Snow Adventure
                                </span>
                            </h4>
                            {/* card details */}
                            <div className="card__details">
                                <ul>
                                    <li>5 day tours</li>
                                    <li>Up to 15 people</li>
                                    <li>3tour guides</li>
                                    <li>Sleep in provided condo</li>
                                    <li>Difficulty: hard</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-3">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Only</p>
                                    <p className="card__price-value">$897</p>
                                </div>
                                {/* "a" element is one of the block elements */}
                                <a href="#" className="btn btn--white">Buy now!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="u-center-text u-margin-top-huge">
                <a href="#" className="btn btn--green">Discover all tours</a>
            </div>
        </section>
    );
}

export { SectionTours };