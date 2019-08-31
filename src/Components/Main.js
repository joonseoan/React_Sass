import React from 'react';
import './Main.scss'

export default props => {
    return(
        <main>
            {/* 
                use block class name 
                it is a unique css that is not used in any other components
                . Then, it should be in "page" in Sass folder
            
            */}
            <section className="section-about">
                <h2 className="heading-secondary">
                    Exciting tours for adventurous people
                </h2>
            </section>
        </main>
    );
}