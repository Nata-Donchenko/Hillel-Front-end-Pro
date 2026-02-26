import { Component } from "react";
import './VCounter.css'

export class VCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      voicesCounts: [0, 0, 0, 0, 0],
      winner: null,
    }
  }

  getVoices = (index) => {
    const newCounts = [...this.state.voicesCounts]
    newCounts[index] += 1

    this.setState({
      voicesCounts: newCounts
    })
  }

  showWinner = () => {
    const winnerVoices = Math.max(...this.state.voicesCounts)
    const winnerIndex = this.state.voicesCounts.indexOf(winnerVoices)

    this.setState({
      winner: winnerIndex
    })
  }

  render() {
    return (
      <div>
        {this.state.voicesCounts.map((voiceCount, index) => (
          <div key={index}>
            <button className='smile-btn' onClick={() => this.getVoices(index)}>
              <img src={`/${index + 1}.png`} alt="smile" />
            </button>
            <p>Voices: {voiceCount}</p>
          </div>
        ))}

        <div>
          <button onClick={this.showWinner}>
            Show winer
          </button>
        </div>

        {this.state.winner !== null && (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <h3>Winner!</h3>
            <img src={`/${this.state.winner + 1}.png`} alt="winner" />
            <p>Votes: {this.state.voicesCounts[this.state.winner]}</p>
          </div>
        )}
      </div>
    )
  }
}