import React from 'react';
import './SectionAbout.scss';

const SectionAbout = props => {

    return (
    
        // use block class name 
        // it is a unique css that is not used in any other components
        // . Then, it should be in "page" in Sass folder
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
                            2) 
                            Image selection in terms of width
                            So by using "300w" and "1000w", html informs the browser image's width info
                            The broser will automatically select the best image, either of both specified below.
                        */}
                        <img srcSet="/img/nat-1.jpg 300w, /img/nat-1-large.jpg 1000w"
                            // Browser will select either of both above

                            // We just need to inform the relative value of the picture.
                            // 16vw : relative value: 141 / 900 = 16vw
                            // 24vw : relative value: 141 / 600 = 24vw
                            // 260px : default size, when the browser has big desktop screen.
                            sizes="(max-width: 900px) 16vw, (max-width: 600px) 24vw, 260px"
                            alt="photo_1"
                            className="composition__photo composition__photo--p1"
                            // If the browser does not understand the srcSet above,
                            //  it alternatively will try to understand below.
                            src="/img/nat-1-large.jpg"
                        />

                        <img srcSet="/img/nat-2.jpg 300w, /img/nat-2-large.jpg 1000w"
                            sizes="(max-width: 900px) 16vw, (max-width: 600px) 24vw, 260px"
                            alt="photo_2"
                            className="composition__photo composition__photo--p2"
                            src="/img/nat-2-large.jpg"
                        />
                        <img srcSet="/img/nat-3.jpg 300w, /img/nat-3-large.jpg 1000w"
                            sizes="(max-width: 900px) 16vw, (max-width: 600px) 24vw, 260px"
                            alt="photo_3"
                            className="composition__photo composition__photo--p3"
                            src="/img/nat-3-large.jpg"
                        />
                        {/* 1) */}
                        {/* 
                            composition__photo: element
                            composition__photo--p1 : modifier
                        */}
                       {/*  <img src="/img/nat-1-large.jpg" alt="photo1" className="composition__photo composition__photo--p1" />
                        <img src="/img/nat-2-large.jpg" alt="photo2" className="composition__photo composition__photo--p2" />
                    <img src="/img/nat-3-large.jpg" alt="photo3" className="composition__photo composition__photo--p3" /> */}
                    </div>
                </div>
            </div>
        </section>

    
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

export { SectionAbout };