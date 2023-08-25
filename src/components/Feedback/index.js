// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedSelected: false}

  onClickButton = () => {
    this.setState({isFeedSelected: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emoji} = resources

    return (
      <div className="app-container">
        <div className="inner-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emoji-container">
            {emoji.map(eachEmoji => (
              <li key={eachEmoji.id}>
                <button
                  onClick={this.onClickButton}
                  className="button"
                  type="button"
                >
                  <img src={eachEmoji.imageUrl} alt={eachEmoji.name} />
                  <br />
                  <span>{eachEmoji.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThankyou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="app-container">
        <div className="inner-container">
          <img src={loveEmojiUrl} alt="love emoji" />
          <h1>Thank You!</h1>
          <p>
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isFeedSelected} = this.state

    return (
      <div className="app-container">
        <div className="inner-container">
          {isFeedSelected
            ? this.renderThankyou()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
