import React from 'react';
import './feedbackButton.css';
const FeedbackButton = () =>{

  var onClickButton = (e) =>{
    var redirect_link = "https://ayushjainforms.herokuapp.com/";
    window.open(redirect_link, "_blank");
  }
    return(
        <div id='feedback'>
            <div onClick={onClickButton} class="tooltip">
              <button class="btn">
                <span>
                  Feedback
                </span>
              </button>
              <span class="tooltiptext">
                Give me your valuable feedback
              </span>
            </div>
        </div>
    )
}
export default FeedbackButton;