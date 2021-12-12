import PropTypes from 'prop-types'
import Navigation from '../components/Base/Navigation.js'
import Footer from '../components/Base/Footer.js'
import BlankLayout from '../components/Layouts/BlankLayout.js'

import cls from '../styles/home/main.module.css'
import roadImage from '../public/road-image.jpg'

console.log(roadImage)

const Home = () => {
    return (
        <BlankLayout>
            <div className="container">
                <div className={cls.navigationWrapper}>
                    <Navigation />
                </div>

                <div className={cls.background_wrapper}>
                    <img src={roadImage.src} alt="" />
                    <div className={cls.background_eclipse}></div>
                </div>

                <header className={cls.header}>
                    <div className={cls.inscription}>
                        <h4>Petryk Oleksandr</h4>
                        <h1>Web developer</h1>
                    </div>
                </header>

                <div className={cls.foorerWrapper}>
                    <Footer />
                </div>
            </div>
        </BlankLayout>
    )
}


export default Home 
