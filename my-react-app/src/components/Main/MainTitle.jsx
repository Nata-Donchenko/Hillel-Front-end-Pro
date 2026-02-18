import './MainTitle.css'

export function MainTitle () {
  return (
    <>
      <div className='row text-center text-warning'>
        <div className='jumbotron'>
          <h1>SWAPI</h1>
          <p className='lead'>The Star Wars API</p>
          <p className='lead'>
            <a href="#">(what happened to seapi.co?)</a>
          </p>
        </div>
      </div>
    </>
  )
}