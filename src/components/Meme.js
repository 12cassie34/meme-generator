import { useState } from "react"

import memeData from "../memeData"

function Meme() {
    const [memeImg, setMemeImg] = useState("")

    function getRandomMeme() {
        setMemeImg(
            memeData.data.memes[
                Math.floor(Math.random() * memeData.data.memes.length)
            ].url
        )
    }

    return (
        <main className="meme">
            <div className="meme__inputs">
                <input
                    className="meme__inputs__input"
                    type="text"
                    placeholder="Top Text"
                />
                <input
                    className="meme__inputs__input"
                    type="text"
                    placeholder="Bottom Text"
                />
            </div>
            <button onClick={getRandomMeme} className="meme__btn">
                Get a new meme image 🖼
            </button>
            <div className="img-container">
                <img src={memeImg} alt="Meme" />
            </div>
        </main>
    )
}

export default Meme
