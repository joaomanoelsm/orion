import WorkBackground from '../../../assets/imgs/Background-Works.jpg'

const Works = () => {
    const worksArray = [
        {
            img: 'url',
            title: 'Cliente'
        },
        {
            img: 'url',
            title: 'Cliente'
        },
        {
            img: 'url',
            title: 'Cliente'
        },
        {
            img: 'url',
            title: 'Cliente'
        },
    ]

  return (
    <section id='works' style={{ background: `url(${ WorkBackground })`}}>
        <div id='works__container'>
            <h2 id='works__title'>Nossos trabalhos</h2>
            <p id='works__text'>Alguns trabalhos realizados para nossos clientes</p>
            <div id='works__itens-contain'>
                {
                    worksArray.map( work => (
                        <div className='works__itens'>
                            <div id='works__img-contain'>
                                <img id='works__img' src="" alt="Imagem dos projetos" />
                            </div>
                            <h3 id='works__itens-title'>{ work.title }</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Works