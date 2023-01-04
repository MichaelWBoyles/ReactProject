import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNav from './components/AppNav'
import ArticleTeaser from './components/ArticleTeaser'
import Article from './components/Article'

import newsData from "./data/news.json"



function App() {

  // console.log(newsData)
  const[all_articles, setAllArticles] = useState(newsData.map((article,index) => {
    return {
      id: index + 1,
      title: article.title,
      created_date: article.created_at,
      url: article.url,
      author: article.author,
      object_id:article.objectID
    }
  }))
  console.log(all_articles) 

  return (
    <div>
      <AppNav/>
      {all_articles.map(article => {
        return <ArticleTeaser key={article.id} article={article} /> 
      })}
      
    </div>
  )
}

export default App
