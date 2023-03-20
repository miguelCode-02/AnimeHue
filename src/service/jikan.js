import axios from "axios"

const getAnime = async (name) => {
    const {data,status} = await axios.get(`https://api.jikan.moe/v4/anime?q=${name}`)
    console.log(status)
    return data

}

export default { getAnime }