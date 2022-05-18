import React from 'react';
import './feedbackButton.css';
const FeedbackButton = () =>{

  var onClickButton = (e) =>{
    var redirect_link = "https://ayushjain-forms.herokuapp.com/";
    window.open(redirect_link, "_blank");
  }

  return (
    <div id='feedback'>
      <div onClick={onClickButton} className="tooltip">
        <button className="btn">
          <span>
            Feedback
          </span>
        </button>
        <span className="tooltiptext">
          Give me your valuable feedback
        </span>
      </div>
    </div>
  )
}
export default FeedbackButton;