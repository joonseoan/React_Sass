import React from 'react';
import './SectionFeatures.scss';

const SectionFeatures = props => {
    return (
        <section className="section-features">
            {/* for icon example */}
            {/* <i className="icon-basic-world"></i> */}
            <div className="row">
                <div className="col-1-of-4">
                    {/* make a box inside of grid */}
                    <div className="feature-box">
                        {/* for icon example */}
                        <i className="icon-basic-world feature-box__icon"></i>
                        {/* implement the exisitng class. Threfore, class name is "box" type */}
                        <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="icon-basic-compass feature-box__icon"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="icon-basic-map feature-box__icon"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <i className="icon-basic-heart feature-box__icon"></i>
                        <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { SectionFeatures };