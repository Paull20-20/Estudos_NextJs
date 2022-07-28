import Link from "next/link"
import styles from '../styles/Navbar.module.css'


export default function Navbar(){
    return (

        <ul className={styles.navbar} >
        <li>
          <Link href="/">  
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/products">  
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/about">  
            <a>About</a>
          </Link>
        </li>
        <li>
         <Link href="/contact">  
            <a>Contatos</a>
         </Link>
        </li>
        <li>
         <Link href="/todos">  
            <a>Api</a>
         </Link>
        </li>
      </ul>
  
    )
}


