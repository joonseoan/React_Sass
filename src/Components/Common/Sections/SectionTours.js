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
                            Front
                        </div>
                        <div className="card__side card__side--back">
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