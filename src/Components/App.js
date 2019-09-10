import React, { Fragment } from 'react';

import Navigation from './Navigation/Navigation';
import { Header, Footer } from './Common';
import Main from './Main';

export default () => {
    return (
        <Fragment>
            <Navigation />
            <Header />
            <Main />
            <Footer />
        </Fragment>
    );
}