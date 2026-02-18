import './MainInformation.css'

export function MainIformation () {
  return (
    <>
      <div className='row pad_bot'>

        <div className='col-sm-3 col-lg-3 col-md-3'>
          <h4 className='text-center'>What is this?</h4>
          <p>
            The Star Wars API, or "swapi" (Swah-pee) is the world's first quantified and programmatically-accessible data source for all the data from the Star Wars canon universe!
          </p>
          <p>
            We've taken all the rich contextual stuff from the universe and formatted into something easier to consume with software. Then we went and stuck an API on the front so you can access it all!
          </p>
        </div>

        <div className='col-sm-4 col-lg-4 col-md-4'>
          <h4 className='text-center'>How can I use it?</h4>
          <p>
            All the data is accessible through our HTTP web API. Consult our 
            <a href="#"> documentation </a>
            if you'd like to get started.
          </p>
          <p>
            Helper libraries for popular programming languages are also provided so you can consume swapi in your favourite programming language, in a style that suits you.
          </p>
        </div>

        <div className='col-sm-3 col-lg-3 col-md-3'>
          <h4 className='text-center'>What happened with old swapi.co?</h4>
          <p>
            swapi.co is not supported and maintained anymore. But since so many projects and tutorials used it as their educational playground, this is an "unofficial" branch.
          </p>
          <p>
            This project is open source and you can contribute 
            <a href="#"> on GitHub</a>
            .
          </p>
        </div>
      </div>
    </>
  )
}