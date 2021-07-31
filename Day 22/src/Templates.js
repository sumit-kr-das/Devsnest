import './App.css';
import {useState, useEffect} from "react";

function App({templates, setMeme}) {
  return (
    <div className="templates">
      {
        templates.map((template)=>{
          return <div
            key={template.id}
            className={"template"}
            onClick={()=>setMeme(template)}
          >
            <div
              style={{background: `url("${template.url}")`}}
              className='image'
            />
          </div>
        })
      }
    </div>
  );
}

export default App;
