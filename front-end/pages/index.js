import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
    
      <Head>
      
        <title>Página principal</title>
        <meta name='keywords' content='Roupas, Calçados, Boné ' ></meta>
        <meta name='description' content='Encontre a melhor roupa para você' ></meta>
      
      </Head>    

      <div>
      
        <h1 className={styles.title} >Hello world next js</h1>
        <Image 
          src="/images/city.jpg" 
          width="400px" 
          height="500px" 
          alt='Cidade a noite' 
        />

      </div>
    
    </>

  )
}





