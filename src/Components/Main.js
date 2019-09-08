import React from 'react';

import { SectionAbout, SectionFeatures, SectionTours, SectionStories } from './Common';

export default props => {
    return(
        <main>
            <SectionAbout />
            <SectionFeatures />
            <SectionTours />
            <SectionStories />
        </main>
    );
}