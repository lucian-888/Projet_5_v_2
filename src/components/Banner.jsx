import './banner.scss'


function Banner({title, image}) {
  

    return (

        <section className="ban">
            <img src={image} alt="fond" />
            { title && <h1>{title}</h1> }
        </section>

    )
}
  
export default Banner