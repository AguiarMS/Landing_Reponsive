import '../styles/home.scss'
import LuccaImg from '../assets/img/lucca.png'
import TextLuccaImg from '../assets/img/textLucca.png'
import DisneyImg from '../assets/img/disney.png'

const Home = () => {
  return (

    <div id="page-home">
      <main>
        <div className='logo-lucca'>
          <img src={TextLuccaImg} alt="Texto de introdução" id='logoTextLucca' />
        </div>
        <div className="desc-page">

          Luca é um filme de animação digital estadunidense de 2021, dos gêneros amadurecimento, comédia e fantasia, produzido pela Pixar Animation Studios e distribuído pela Walt Disney Studios Motion Pictures. O filme é dirigido por Enrico Casarosa em sua estreia na direção de longas-metragens, escrito por Mike Jones e Jesse Andrews, e produzido por Andrea Warren. O filme apresenta as vozes de Jacob Tremblay, Jack Dylan Grazer, Emma Berman, Marco Barricelli, Saverio Raimondo, Maya Rudolph e Jim Gaffigan.

          O longa-metragem conta a história de Luca Paguro, um garoto monstro marinho com a capacidade de assumir a forma humana em terra, que explora uma cidade litorânea na Riviera Italiana com seu amigo Alberto Scorfano

        </div>

        <div className="btn-acess">
          <a href="https://www.disneyplus.com" target='_blank' rel="noreferrer">
            <button className='btn-externo'>Assistir</button>
          </a>
          <a href="https://www.youtube.com/watch?v=Gl8B-nQf47E" target='_blank' rel="noreferrer">
            <button className='btn-trailer'>Trailer</button>
          </a>
        </div>

      </main>

      <aside>
        <img src={DisneyImg} alt="Texto da disney" id="logoDisney" />
        <img src={LuccaImg} alt="Wallpaper Lucca" id='logoLucca' />
      </aside>

    </div>
  )
}

export default Home