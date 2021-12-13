import PropTypes from 'prop-types'
import Navigation from '../components/Base/Navigation.js'
import Footer from '../components/Base/Footer.js'
import BlankLayout from '../components/Layouts/BlankLayout.js'
import Background from '../components/Background/Background.js'

import cls from '../styles/home/main.module.css'


const Home = () => {
    return (
        <BlankLayout>
            <div className="container">
                <div className={cls.navigationWrapper}>
                    <Navigation />
                </div>

                <Background />

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
