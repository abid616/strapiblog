import React from 'react'
import {fetchAPI} from '../lib/api'
import Container from '../components/container'
import Seo from '../components/seo'
import {Posts} from '../components/articles/posts'

const Home = ({ articles, categories, homepage, tags}) => {
  return (
    <Container categories={categories}>
      <Seo seo={homepage.seo}/>
      <Posts articles={articles} categories={categories}/>
      
    </Container>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage, tags] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/tags"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage, tags },
    revalidate: 1,
  };
}

export default Home;