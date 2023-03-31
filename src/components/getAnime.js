import { useState } from "react";
import jikan from "../service/jikan"
import BoxAnime from "../components/boxAnime"
import BackgroundVideo from "./backgroundVideo";

const SearchAnime = () => {
    const [timer, setTimer] = useState(null);
    const [jikaValue, setJikaValue] = useState(null)
    const [loading, setLoading] = useState(null)
    const [styleContainerAnime, setStyleContainerAnime] = useState({})
    const [styleVideo, setStyleVideo ] = useState({})

    const handleInputChange = (event) => {
        const value = event.target.value
        setStyleContainerAnime({
            margin: "0",
            transition: "1s"
        })

        setStyleVideo({filter : "grayscale(100%)"})

        setLoading(true)

        clearTimeout(timer);
        setTimer(setTimeout(async () => {
            if (Boolean(value)) {
                const { data } = await jikan.getAnime(value)
                setJikaValue(data)
            } else {
                setStyleContainerAnime({})
                setStyleVideo({})
                setJikaValue(null)
            }
            setLoading(false)
        }, 1000))
    }

    return (
        <div>
            <BackgroundVideo {...styleVideo}/>
            <div className="container-anime" style={styleContainerAnime}>
                <h1 className="titule">AnimeHue</h1>
                <div className="input">
                    <input id="anime-input" type="text" onChange={handleInputChange} placeholder={'Busca un anime'} />
                    <p className="shadow-input"></p>
                </div>
                <h2 className="loading">{loading ? 'Buscando anime' : ''}</h2>
                <div className="container-catalog">
                    {jikaValue != null ? jikaValue.map((jika) => <BoxAnime key={jika.mal_id} {...jika} />) : ""}
                </div>
            </div>
        </div>
    );
};

export { SearchAnime }