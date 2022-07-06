/* Importing the React library and the useEffect and useState hooks. */
import React, { useEffect, useState } from "react"

/* Importing the Line component from the Line folder. */
import Line from "../Line"

/* Importing the Win component from the Win folder. */
import WinOrLoss from "../WinOrLoss"

/* Importing the words.json file. */
import WORDS from '../../words.json'

/* Importing the index.css file. */
import './index.css'

/**
 * It renders a board with a line for each guess
 */
const Board = () => {

    /* Creating a variable called solution and a function called setSolution. */
    const [solution, setSolution] = useState(null)

    /* Creating a variable called guesses and a function called setGuesses. */
    const [guesses, setGuesses] = useState(Array(6).fill(null))

    /* Creating a variable called currentGuess and a function called setCurrentGuess. */
    const [currentGuess, setCurrentGuess] = useState('')

    /* Creating a variable called isGameOver and a function called setIsGameOver. */
    const [isGameOver, setIsGameOver] = useState(false)

    const [isPlayerWon, setIsPlayerWon] = useState(null)

    /**
     * It handles the user's input
     * @param event - The event object.
     * @returns the new state of the currentGuess variable.
     */
    const handleType = (event) => {

        /* Checking if the game is over. If it is, it returns. */
        if (isGameOver) {
            return
        }

        /* Preventing the user from typing the Alt key. */
        if (event.key === 'Alt') {
            return;
        }

        /* Checking if the user has pressed the Enter key. */
        if (event.key === 'Enter') {

            /* Checking if the length of the current guess is less than 5. If it is, it returns. */
            if (currentGuess.length < 5) {
                return;
            }

            /* Creating a new array with the same values as the guesses array. */
            const newGuess = [...guesses]
            newGuess[guesses.findIndex(val => val == null)] = currentGuess

            /* Setting the state of the guesses and currentGuess. */
            setGuesses(newGuess)
            setCurrentGuess('')

            /* Checking if the current guess is the same as the solution. */
            const isCorrectQuest = solution === currentGuess

            /* Checking if the current guess is the same as the solution. If it is, it 
            sets the isGameOver variable to true. */
            if (isCorrectQuest) {
                setIsGameOver(true)
                setIsPlayerWon(true)
                return;
            }

            /* Checking if there is a line available. */
            const isOneLineAvailability = newGuess.findIndex(val => val == null)

            /* Checking if the player has lost. */
            if (isOneLineAvailability === -1) {
                setIsPlayerWon(false)
                return;
            }

            return;
        }

        /* Removing the last character from the current guess. */
        if (event.key === 'Backspace') {
            setCurrentGuess((prov) => prov.slice(0, prov.length - 1))
            return;
        }

        /* A function that takes the previous state and returns the new state. */
        setCurrentGuess((prov) => prov + event.key?.toUpperCase())

    }

    /* Adding an event listener to the window object. */
    useEffect(() => {

        /* Adding an event listener to the window object. */
        window.addEventListener('keydown', handleType)

        /* Removing the event listener. */
        return () => window.removeEventListener('keydown', handleType)

    }, [guesses, currentGuess, isGameOver, isPlayerWon])

    /* Selecting a random word from the WORDS array and setting the state of the solution. */
    useEffect(() => {

        /* Selecting a random word from the WORDS array. */
        const randomWord = WORDS[parseInt(Math.random() * WORDS.length)]

        /* Setting the state of the solution. */
        setSolution(randomWord)

    }, [])

    return (
        <>
            {/* 
            {JSON.stringify(guesses)}
            */}
            <div className="container">
                {isPlayerWon !== null && <WinOrLoss isPlayerWon={isPlayerWon} solution={solution} />}
                {guesses.map((guess, i) => {

                    /* Checking if the current guess is the current guess. */
                    const isCurrentGuess = i === guesses.findIndex(val => val == null);

                    /* Returning a div with the class name "board" and a key of i. It is also returning a
                    Line component with the props isFinal, guess, actual, and solution. */
                    return (
                        <div className="board" key={i}>
                            <Line
                                isFinal={!isCurrentGuess && guess != null}
                                guess={isCurrentGuess ? currentGuess : guess ?? ""}
                                actual={isCurrentGuess}
                                solution={solution}
                                isGameOver={isGameOver}
                            />
                        </div>
                    )
                })}
                {solution}
            </div>

        </>
    )
}

export default Board; 