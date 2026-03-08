import './SmileList.css'

function SmileList(props) {

  return (
    <>
      <div>
        <button onClick={props.onVote}>
          <img
            src={props.src}
            alt={props.alt}
          />
        </button>

        <div>
          voices: {props.voices}
        </div>

      </div>
    </>
  )
}

export default SmileList