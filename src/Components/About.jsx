import './About.css'

const About = () => {

    return (
        <div className='container'>
            <h1 className="name">Denisse Paola Hernández Jiménez</h1>
            <img src="../img/denisse.jpg" alt="Me" width={300} /> 
            <h4 className="email">arq.denisseher@gmail.com</h4>
            <h4 className="contacto">https://www.linkedin.com/in/denissephj/</h4>
            <p className="description">Actualmente soy estudiante de un bootcamp de programación en Generation, donde estoy adquiriendo habilidades sólidas en desarrollo web.</p>
        </div>
    )
}

export default About;