import trollFace from '../images/troll-face.png'

function Header() {
    return (
        <header>
            <div className="title">
                <img src={trollFace} alt="Meme-Generator" className="title__img" />
                <div className="title__item">Meme Generator</div> 
            </div>
            <div className="sub-title">React Course - Project 3</div>
        </header>
    )
}

export default Header