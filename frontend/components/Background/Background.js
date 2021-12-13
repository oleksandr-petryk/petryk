import cls from './background.module.css'
import img from '../../public/road-image.jpg'


const Background = () => {
    return (
        <div className={cls.background_wrapper}>
            <img src={img.src} alt="" />
            <div className={cls.background_eclipse}></div>
        </div>
    )
}


export default Background 
