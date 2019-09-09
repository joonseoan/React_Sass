import React from 'react';
import './SectionBooking.scss';

const SectionBooking = props => {
    return(
        <section className="section-booking">
            <div className="row">
                <div className="booking">
                    <div className="booking__form">
                        {/* reuseful */}
                        <form className="form">
                            <div className="u-margin-bottom-medium">
                                <h2 className="heading-secondary">
                                    Start booking now!
                                </h2>
                            </div>
                            <div className="form__group">
                                <input type="text" id="name" className="form__input" placeholder="Full Name" required />
                                {/* for="name" if the label is clicked, the full name input will be focused */}
                                <label for="name" className="form__label">Full Name</label>
                            </div>
                            <div className="form__group">
                                <input type="email" id="email" className="form__input" placeholder="Email Address" required />
                                {/* for="name" if the label is clicked, the full name input will be focused */}
                                <label for="email" className="form__label">Email Address</label>
                            </div>
                            {/* 
                                [Important] : form__group has margin-bottom: 2rem
                                Therefore, u-margin-bottom-media has overlapped can't kick in!
                                because form__group has two class, sudo and form_group itself.

                                In order for u-margin-bottom-media to kick in, the class has to have !important keyworkd.
                                Please, find utilities.scsss!!

                            */}
                            <div className="form__group u-margin-bottom-medium">
                                <div className="form__radio-group">
                                    <input type="radio" className="form__radio-input" id="small" name="size" />
                                    <label for="small" className="form__radio-label" >
                                        <span className="form__radio-button"></span>
                                        Small tour group
                                    </label>
                                </div>
                                <div className="form__radio-group">
                                    <input type="radio" className="form__radio-input" id="large" name="size" />
                                    <label for="large" className="form__radio-label" >
                                        <span className="form__radio-button"></span>
                                        Large tour group
                                    </label>
                                </div>
                            </div>
                            <div className="form__group">
                                <button className="btn btn--green">Next Step &rarr;</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { SectionBooking };