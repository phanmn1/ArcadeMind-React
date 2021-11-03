import { useState } from 'react'

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  let formIsValid = false;

  if(enteredNameIsValid) {
    formIsValid = true
  } 

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const namedInputBlurHandler = event => {
    setEnteredNameTouched(true)
  }

  const formSubmissionHandler = event => {
    event.preventDefault()

    setEnteredNameTouched(true)
    if(!enteredNameIsValid) {
      return
    }
    setEnteredName('')
    setEnteredNameTouched(false)
  }

  

  const nameInputClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler}
          onBlur={namedInputBlurHandler}
          value={enteredName}
          />
      </div>
      {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
