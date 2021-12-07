import React,{useState,useEffect} from 'react';
import './App.css';
import SearchForm from './SearchForm';

const App=()=> {

const [articles, setarticles] = useState([])
const [term, setTerm] = useState('everything')
const [isLoading, setisLoading] = useState(true)

useEffect(()=>{ 
  const fetchArticles = async ()=>{
  try{
     
        const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`)

        const articles = await res.json();
        console.log(articles);
        setarticles(articles.response.docs);
        setisLoading(false);
      }catch(error){
    console.error(error);
  }
  }
  fetchArticles();
},[term])

  return (
   <>
      <div className="showcase">
          <div className="overlay px-5">
              <h1 className="text-4x1 font-bold text-white text-center mb-4 lg:text-6xl capitalize">Viewing Articles About {term}</h1>
              <SearchForm searchText={(text) => setTerm(text)}/>
          </div>
      </div>

      {isLoading? <h1 className="text-center mt-20 font-bold text-6=5xl">Loading ... </h1> : <section className=" grid grid-cols-1 gap-10  px-5 pt-10 pb-20">
    {articles.map((article)=>{
      const {abstract,headline:{main},byline:{original}, lead_paragraph,news_desk,section_name,web_url,_id,word_count} = article
      return(
        <article key={_id} className="bg-white py-10 px-5 rounded-lg lg:w-9/12 lg:mx-auto">
          <h2 className="font-bold text-2xl mb-5 lg:text-4xl">{main}</h2>
          
          <p>{lead_paragraph}</p>
          <ul className="my-4">
            <li>{original}</li>
            <li><span className="font-bold">News Desk : </span>{news_desk}</li>
            <li><span className="font-bold">Section Name :</span> {section_name}</li>
            <li><span className="font-bold">word Count :</span> {word_count}</li>
          </ul>
          <p>{abstract}</p>
             <a href={web_url} className="underline" rel="noreferrer" target="_blank">Web Resourse</a>  
        </article>
      )
    })}
    </section>}
   </>
  );
}

export default App;
