import "./style.css"
import HeroImg from '../../assets/Hero/HomeHero.png'

export default function HomeHero(){
    return(
        <div className='heroContainer'>
        <img src={HeroImg} className='heroImg'/>
        </div>
    )
}