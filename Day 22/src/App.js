import './App.css';
import {useState, useEffect} from "react";
import Templates from "./Templates";
import Meme from "./Meme";

function App() {
  const [templates, setTemplates] = useState([])
  const [meme, setMeme] = useState(null)
  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then((json)=>{
        setTemplates(json.data.memes)
      })
  }, [])
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      {
        (meme === null)? <Templates templates={templates} setMeme={setMeme}/> : <Meme meme={meme} setMeme={setMeme}/>
      }
    </div>
  );
}



export default App;
