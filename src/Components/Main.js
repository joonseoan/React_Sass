import React from 'react';

import { SectionAbout, SectionFeatures, SectionTours } from './Common';

export default props => {
    return(
        <main>
            <SectionAbout />
            <SectionFeatures />
            <SectionTours />
        </main>
    );
}