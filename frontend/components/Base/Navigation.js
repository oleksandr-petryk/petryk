import PropTypes from 'prop-types'
import Link from 'next/link'


const Navigation = () => {
    return (
        <div className="navigation balance">
            <nav>
               <Link href="/">
                    <a>home</a> 
               </Link>

               <Link href="/">
                    <a>about</a> 
               </Link>

               <Link href="/">
                    <a>works</a> 
               </Link> 
            </nav>
        </div>
    )
}


export default Navigation

