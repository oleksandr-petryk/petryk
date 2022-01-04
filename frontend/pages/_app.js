import PropTypes from 'prop-types'
import '../styles/base/base.css'
import '../styles/base/footer.css'
import '../styles/base/navigation.css'
import '../styles/base/typography.css'


function MyApp({ Component, pageProps }) { 
    return (
        <Component {...pageProps} />
    )
}

MyApp.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
}


export default MyApp
