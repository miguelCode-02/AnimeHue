const BoxAnime = ({images, title_japanese, title}) => {
   return (
   <div className="catalog">
        <div className="contenedor-img-catalog">
            <img className="img-catalog" src={images.webp.image_url} alt={title_japanese}/>
        </div>
        <h3 className="titule-catalog">{title}</h3>
    </div>)
}

export default BoxAnime