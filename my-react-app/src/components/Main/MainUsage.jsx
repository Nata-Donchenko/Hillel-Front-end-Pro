import './MainUsage.css'

export function MainUsage () {
  return (
    <>
      <div className='row usage'>

        <div className='col-lg-8 col-md-8 col-sm-8'>
          <h1 className='text-center'>Try it now!</h1>
          
          <div className='input-group'>
            <span className='input-group-text'>https://swapi.dev/api/</span>
            <input type="text" className='form-control' placeholder='people/1/'/>
            <span className='input-group-btn'>
              <button className='btn btn-secondary'>request</button>
            </span>
          </div>

          <small>
            "Need a hint? try
            <a href="#">
              <i> people/1/ </i>
            </a>
            or
            <a href="#">
              <i> planets/3/ </i>
            </a>
            or
            <a href="#">
              <i> starships/9/ </i>
            </a>
          </small>
        
          <p className='lead pad_top'>Result:</p>

          <div className='card p-3 mb-3 usage-border'>
            <pre className="overflow-auto pre-scroll">
              {`{
	              "name": "Luke Skywalker",
	              "height": "172",
	              "mass": "77",
	              "hair_color": "blond",
	              "skin_color": "fair",
	              "eye_color": "blue",
	              "birth_year": "19BBY",
	              "gender": "male",
	              "homeworld": "https://swapi.dev/api/planets/1/",
	              "films": [
		              "https://swapi.dev/api/films/2/",
		              "https://swapi.dev/api/films/6/",
		              "https://swapi.dev/api/films/3/",
		              "https://swapi.dev/api/films/1/",
		              "https://swapi.dev/api/films/7/"
	              ],
	              "species": [
		              "https://swapi.dev/api/species/1/"
	              ],
	              "vehicles": [
		            "https://swapi.dev/api/vehicles/14/",
		            "https://swapi.dev/api/vehicles/30/"
	              ],
	              "starships": [
		            "https://swapi.dev/api/starships/12/",
		            "https://swapi.dev/api/starships/22/"
	              ],
	              "created": "2014-12-09T13:50:51.644000Z",
	              "edited": "2014-12-20T21:17:56.891000Z",
	              "url": "https://swapi.dev/api/people/1/"
                }`}
              </pre>
            </div>
          </div>
       </div>
    </>
  )
}