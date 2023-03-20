import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="mainContainer">
      <div className="subContainer">
        <h1 className="mainheading">FAQUs</h1>
        <ul className="listContainer">
          {faqsList.map(each => (
            <FaqItem key={each.id} faqDetails={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
