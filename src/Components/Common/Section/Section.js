import React, { Fragment } from 'react';
import './Section.scss';

const Section = props => {

    return (
        <Fragment>
            {/* 
                use block class name 
                it is a unique css that is not used in any other components
                . Then, it should be in "page" in Sass folder
            
            */}
            <section className="section-about">
                {/* utility classes */}
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Exciting tours for adventurous people
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">You are going to fall in love with nature</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                        <p className="paragraph">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <a href="#" className="btn-text">Learn more &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        {/* block */}
                        <div className="composition">
                            {/* 
                                composition__photo: element
                                composition__photo--p1 : modifier
                            */}
                            <img src="/img/nat-1-large.jpg" alt="photo 1" class="composition__photo composition__photo--p1" />
                            <img src="/img/nat-2-large.jpg" alt="photo 2" class="composition__photo composition__photo--p2" />
                            <img src="/img/nat-3-large.jpg" alt="photo 3" class="composition__photo composition__photo--p3" />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>

        
        // 1 Grid
        // <section className="grid-test">
        //     <div className="row">
        //         <div className="col-1-of-2">
        //             Col 1 of 2
        //         </div>
        //         <div className="col-1-of-2">
        //             Col 1 of 2
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-1-of-3">
        //             Col 1 of 3
        //         </div>
        //         <div className="col-1-of-3">
        //             Col 1 of 3
        //         </div>
        //         <div className="col-1-of-3">
        //             Col 1 of 3
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-1-of-3">
        //             Col 1 of 3
        //         </div>
        //         <div className="col-2-of-3">
        //             Col 2 of 3
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-1-of-4">
        //             Col 1 of 4
        //         </div>
        //         <div className="col-1-of-4">
        //             Col 1 of 4
        //         </div>
        //         <div className="col-1-of-4">
        //             Col 1 of 4
        //         </div>
        //         <div className="col-1-of-4">
        //             Col 1 of 4
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-1-of-4">
        //             Col 1 of 4
        //         </div>
        //         <div className="col-1-of-4">
        //             Col 1 of 4
        //         </div>
        //         <div className="col-2-of-4">
        //             Col 2 of 4
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-1-of-4">
        //             Col 1 of 4
        //         </div>
        //         <div className="col-3-of-4">
        //             Col 3 of 4
        //         </div>
        //     </div>
        // </section>
    );
    
}

export { Section };