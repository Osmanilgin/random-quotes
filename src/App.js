import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() { 
  const [quotes,setQuotes] = useState('')
  const colors = ["#fff00", "#ffa500", "#ff68ff", "#a9a9e7","#59FF8F","#F8FF60","#FB5348","#60FFF4"]
 
     const sea = useRef()

    const getQuote = () => {
      fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => { const randomNum = Math.floor(Math.random() * data.length) 
        setQuotes(data[randomNum]) })
      }
    

      useEffect(() => {
        getQuote()
        }, [])

        useEffect(() => {
       sea.current.style.color = colors[Math.floor(Math.random() * colors.length)]
          }, [quotes])

       
  return (
    <div className="App">
      <div className="quote">
        <p ref={sea}>{quotes.text}</p>
        <p>Author: {quotes.author}</p>
        <div className="btnContainer">
        <button className="btn" onClick={getQuote}>Get quote</button>
        <a className="btn" href={`https://twitter.com/intent/tweet?text=${quotes.text}`}
        target="_blank"
        rel="noopener noreferrer">Tweet</a>
        </div>
      </div>
     
    </div>
  );
}

export default App;
