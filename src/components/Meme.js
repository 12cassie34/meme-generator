import { useState } from "react"

import memeData from "../memeData"

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState(memeData)

    function getRandomMeme() {
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: allMemeImages.data.memes[Math.floor(Math.random() * allMemeImages.data.memes.length)].url
        }))
    }

    function changeText(e) {
        const { name, value } = e.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main className="meme">
            <div className="meme__inputs">
                <input
                    className="meme__inputs__input"
                    type="text"
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={changeText}
                />
                <input
                    className="meme__inputs__input"
                    type="text"
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={changeText}
                />
            </div>
            <button onClick={getRandomMeme} className="meme__btn">
                Get a new meme image 🖼
            </button>
            <div className="img-container">
                <img src={meme.randomImage} alt="Meme" />
                <h2 className="meme__text top">{meme.topText}</h2>
                <h2 className="meme__text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme
