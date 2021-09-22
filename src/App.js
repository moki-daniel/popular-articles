import React, {useState, useEffect} from 'react'
import SearchForm from './SearchForm'
const App = () => {
  const [articles, setArticles] = useState([])
  const [term, setTerm] = useState('everything')
  const [isLoading, setIsLoading] = useState(true)

  //set useEffect
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=
          ${process.env.REACT_APP_ARTICLES_API_KEY}`
          )
          const articles = await res.json()
          console.log(articles.results);
          setArticles(articles.results)
          setIsLoading(false)
        } catch (error) {
          console.error(error);
        }
      }
      fetchArticles();
    }, [term])
 
  return (
   <>
   <div className="showcase px-5 py-5">
     <div className="overlay px-5">
       <h1 className="text-2xl font-bold text-white
        lg:text-3xl">Most Popular Articles by {term}</h1>
       <SearchForm searchText={(text) => setTerm(text)}/>
     </div>
   </div>
   {isLoading ? <h1 className=" text-center mt-20 text-2xl">Loading...</h1>
  :    <section className="grid grid-cols-1 pag-10 px-5 pt-10 pb-20">
  {articles.map((article) => {
    const {title, abstract, byline, section, id, url, published_date, type, updated} = article

    return (
      <article key={id} className="bg-white py-10 px-5 mb-7
       rounded-lg lg:w-9/12 lg:mx-auto">
        <h2 className="font-bold text-4x1 mb-5 lg:text-2xl">{title}</h2>
        <p>{abstract}</p>
        <ul className="my-4">
          <li><span className="font-bold">Author:</span> {byline}</li>
          <li><span className="font-bold">Section Name: </span> {section}</li>
          <li><span className="font-bold">Blog Type:</span> {type}</li>
          <li><span className="font-bold">Date of Publication:</span> {published_date}</li>
          <li><span className="font-bold">Last Date of Update:</span> {updated}</li>
        </ul>
        <a href={url} target="blank" className="underline">Web Resource</a>
      </article>
    )
  })}
  </section>}

  
     </>
     );
    }
    export default App;
