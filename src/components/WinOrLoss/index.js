/* Importing the React library */
import React from "react";

/* Importing the index.css file. */

import './index.css'

/**
 * It returns a div with a className of either win-container or loss-container, depending on the value
 * of the isPlayerWon prop
 * @returns A div with a p tag inside of it.
 */
const WinOrLoss = ({ isPlayerWon, solution }) => {
    return (
        <div className={`${isPlayerWon ? 'win-container' : 'loss-container'}`}>
            <p className={`${isPlayerWon ? 'win-letter' : 'loss-letter'}`}
            >

            </p>
            {isPlayerWon ?
                <p className="win-letter">
                    YOU WIN THE GAME
                </p>
                :
                <>
                    <p className="loss-letter">YOU LOSS THE GAME</p>
                    <p className="loss-subtitle-letter">THE WORD WAS {solution}</p>
                </>
            }
        </div>
    )
}

/* Exporting the WinOrLoss component so that it can be imported into other files. */
export default WinOrLoss; 