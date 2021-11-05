import useInput from '../hooks/use-input'

const isNotEmpty = (value) => value.trim() !== ''
const isEmail = (value) => value.includes('@')

const errorClass = value => !value ? 'form-control' : 'form-control invalid'

// Test updated commit to see if my name is attached to this repo 
const BasicForm = (props) => {
  const {
    value: firstNameValue, 
    isValid: firstNameIsValid, 
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler, 
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(isNotEmpty)

  const {
    value: lastNameValue, 
    isValid: lastNameIsValid, 
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler, 
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(isNotEmpty)

  const {
    value: emailValue, 
    isValid: emailIsValid, 
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler, 
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isEmail)

  let formIsValid = false

  if(firstNameIsValid && lastNameIsValid && emailIsValid)
    formIsValid = true

  const formSubmitHandler = event => {
    event.preventDefault()
    if(!formIsValid)
      return

    resetFirstName()
    resetLastName()
    resetEmail()
  }

  const fistNameInputClasses = errorClass(firstNameHasError)
  const lastNameInputClasses = errorClass(lastNameHasError)
  const emailErrorClass = errorClass(emailHasError)
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={errorClass(firstNameHasError)}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name' 
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
            />
        {firstNameHasError && <p className="error-text">Invalid First name</p> }
        </div>
        
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='name' 
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
            />
        {lastNameHasError && <p className="error-text">Invalid Last name</p> }
        </div>
        

      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='text' 
          id='name' 
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
          />
      {emailHasError && <p className="error-text">Invalid email</p> }
      </div>
      

      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
