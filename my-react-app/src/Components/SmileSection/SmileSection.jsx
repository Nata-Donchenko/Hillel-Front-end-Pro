import SmileList from '../SmileList/SmileList.jsx'
import ResultSection from "../ResultSection/ResultSection.jsx";
import {smilesData} from "../SmilesData.jsx";
import './SmileSection.css'

import {useState} from "react";

function SmileSection() {

  const [smiles, setSmiles] = useState([...smilesData])
  const [winner, setWinner] = useState("")

  function handleVote(id) {
    const newSmilesData = smiles.map(smile => {
      if(smile.id === id) return {...smile, voices: smile.voices + 1}

      return smile
    })

    setSmiles(newSmilesData)
  }

  function getWinner(arr) {
    const maxVoices = Math.max(...arr.map(item => item.voices))
    const winner = arr.find(item => item.voices === maxVoices)

    setWinner(winner)
  }

  return (
    <>
      <div className={'container'}>
        <ul>
          {smiles.map(smile => (
            <li key={smile.id}>
              <SmileList
                src = {smile.src}
                alt ={smile.alt}
                voices = {smile.voices}
                onVote = {() => handleVote(smile.id)}
              />
            </li>
          ))}
        </ul>

        <button
          onClick={() => getWinner(smiles)}
          className='btn-result'
        >
          Show Results
        </button>

        {winner && (
          <ResultSection
            src={winner.src}
            alt={winner.alt}
            voices={winner.voices}
          />
        )}
      </div>
    </>
  )
}

export default SmileSection