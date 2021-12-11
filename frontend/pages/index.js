import PropTypes from 'prop-types'
import Navigation from '../components/Base/Navigation.js'
import Footer from '../components/Base/Footer.js'
import BlankLayout from '../components/Layouts/BlankLayout.js'

import cls from '../styles/home/main.module.css'


const Home = () => {
    return (
        <BlankLayout>
            <div className={cls.navigationWrapper}>
                <Navigation />
            </div>

            <div>

            </div>

            <div className={cls.foorerWrapper}>
                <Footer />
            </div>
        </BlankLayout>
    )
}


export default Home 
