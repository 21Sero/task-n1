import React from 'react';
import "./instructions.css"
function Instructions() {
    return (
        <section>
            <h2>Instructions</h2>
            <p>Click: "Add Card" to add a new card with a randomly generated and unique number.  </p>
            <p>Click: "Sort Cards" to sort all of the cards by their numbers, from lowest to highest. </p>
            <p>Click: on <i className=" fa fa-trash"></i> to remove card</p>
        </section>
    );
}

export default Instructions;
