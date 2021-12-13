import PropTypes from 'prop-types'
import Footer from '../Base/Footer.js'
import Navigation from '../Base/Navigation.js'


const BaseLayout = ({children}) => {
    return (
        <>
            {/* block to separate navigation+content form footer */}
            <div className="wrapper">
                <div className="separate">
                    {/* navigation */}
                    <Navigation />

                    {/* page content */}
                    {children}
                </div>

                {/* footer */}
                <Footer />
            </div>
        </>
    )
}

BaseLayout.propTypes = {
    children: PropTypes.node,
}


export default BaseLayout
