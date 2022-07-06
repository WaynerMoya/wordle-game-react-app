/* It's importing the React library from the node_modules folder. */
import React from 'react'

/* It's importing the CSS file. */
import './index.css'

/**
 * It returns a div containing five divs, each of which contains a single character
 * @returns A div with 5 divs inside of it.
 */
const Line = ({ guess, solution, isFinal, actual, isGameOver }) => {

    /* It's creating an empty array. */
    const blocks = []

    /* It's creating an array of 5 divs, each of which contains a single character. */
    for (let i = 0; i < 5; i++) {

        /* It's getting the character at the index i of the guess string. */
        const char = guess[i]

        /* It's creating a variable called className and assigning it the value 'block'. */
        let className = 'block'

        /* It's adding the class name "correct" to the div if the character is correct, "close" if the
        character is close, and "incorrect" if the character is incorrect. */
        if (isFinal) {
            if (char === solution[i]) {
                className += ' correct'
            } else if (solution.includes(char)) {
                className += ' close'
            } else {
                className += ' incorrect'
            }
        }

        /* It's adding the class name "active" to the div if the line is the actual line and the game
        is not over. */
        if (actual && !isGameOver) {
            className += ' active'
        }

        /* It's creating an array of 5 divs, each of which contains a single character. */
        blocks.push(
            <div key={i} className={className}>
                {char}
            </div>
        )

    }

    /* It's returning a div with the class name "line" and the blocks array inside of it. */
    return <div className="line">{blocks}</div>
}

/* It's exporting the Line component. */
export default Line;