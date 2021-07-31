"use strict"
import React, {useState} from 'react';

function Meme({meme, setMeme}) {
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "teasty",
    password: "PPS$Asr52ttCfaF",
    boxes: []
  })

  const generateMeme = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box, i) =>{
      url += `&boxes[${i}][text]]=${box.text}`;
    })
    console.log(url)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMeme({...meme, url: data.data.url})
      })
  }

  return (
    <div className="meme">
      <img src={`${meme.url}`} alt=""/><br/>
      {
        [...Array(meme.box_count)].map((value, i) =>
          <input
            key={i}
            onChange = {
              (e) => {
                const newBoxes = form.boxes;
                newBoxes[i] = {
                  text: e.target.value
                }
                setForm({...form, boxes: newBoxes})
              }
            }
          />)
      }
      <br/>
      <button onClick={generateMeme}>Generate</button>
      <button onClick={() => setMeme(null)}>Choose Template</button>
    </div>
  );
}

export default Meme;