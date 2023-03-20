// Write your code here.
import {Component} from 'react'
import './index.css'

const pluImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
const minus =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '

export default class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswers = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div className="">
          <hr />
          <p className="answers">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleButton = () => {
    this.setState(prevstate => ({
      isActive: !prevstate.isActive,
    }))
  }

  isButtonImages = () => {
    const {isActive} = this.state
    const button = isActive ? minus : pluImg
    const altText = isActive ? 'minus' : 'plus'
    return (
      <button className="button" type="button" onClick={this.onToggleButton}>
        <img src={button} alt={altText} className="img" />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="listItemContainer">
        <div className="container">
          <h1 className="questions">{questionText}</h1>
          {this.isButtonImages()}
        </div>
        {this.renderAnswers()}
      </li>
    )
  }
}
