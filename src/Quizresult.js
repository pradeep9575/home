import React from 'react'
import "./Quizresult.css"

export default function Quizresult(props) {
  return (
    <div className='dv'>

<p> score : {props.score}</p>


       <p>Total score : {props.totalscore}</p>
    </div>
  )
}
