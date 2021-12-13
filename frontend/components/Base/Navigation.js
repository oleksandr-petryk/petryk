import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Navigation = () => {
    const router = useRouter().route

    console.log(router, '/')
    console.log(router == '/')


    return (
        <div className="navigation balance">
            <nav>
                <Link 
                    href="/"
                >
                    <a
                        className={
                            router == '/' 
                                ? "navigation-active"
                                : null
                        } 
                    >
                        home
                    </a> 
                </Link>

                <Link 
                    href="/about"
                >
                    <a   
                        className={
                            router == '/about' 
                                ? "navigation-active"
                                : null
                        } 
                    >
                        about
                    </a> 
                </Link>

                {/* <Link href="/">
                    <a>works</a> 
                </Link>  */}
            </nav>
        </div>
    )
}


export default Navigation

