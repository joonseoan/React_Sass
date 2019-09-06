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
                        <div className="card__side card__side--front card__side--front-1">
                            {/* card picture */}
                            <div className="card__picture card__picture--1">
                                &nbsp;
                            </div>
                            {/* card heading */}
                            <div className="card__heading">
                                Heading
                            </div>
                            {/* card details */}
                            <div className="card_details">
                                details
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            Back
                        </div>
                    </div>
                </div>
                <div className="col-1-of-3">
                </div>
                <div className="col-1-of-3">
                </div>
            </div>
        </section>
    );
}

export { SectionTours };