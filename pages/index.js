import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ArticleList from '../components/ArticleList'
import { server } from '../config';

export default function Home({articles}) {
  console.log(articles);
  return (
    <div>
    <Head>
      <title>
        Web devs bro
      </title>
      <meta name='keywords' content='web devolepment' />
    </Head>
    
    
    <div>
      <ArticleList articles={articles} />
    </div>
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await res.json();
//   return {
//     props:{
//       articles
//     }
//   }
// }
export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/articles`);
  const articles = await res.json();
  return {
    props:{
      articles
    }
  }
}