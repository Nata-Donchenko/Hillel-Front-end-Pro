import './ResultSection.css'

function ResultSection(props) {

  return (
    <>
      <h2>Результати голосування:</h2>
      <h3>Переможець:</h3>
      <img src={props.src} alt={props.alt}/>
      <span>Кількість голосів: {props.voices}</span>
    </>
  )
}

export default ResultSection