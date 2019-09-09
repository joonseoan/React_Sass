import React, { Fragment } from 'react';

import { Header, Footer } from './Common';
import Main from './Main';

export default () => {
    return (
        <Fragment>
            <Header />
            <Main />
            <Footer />
        </Fragment>
    );
}