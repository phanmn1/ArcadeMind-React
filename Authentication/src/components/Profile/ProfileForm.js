
import { useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';

const API_KEY = 'AIzaSyBDi1CwJmEJHPoJpgg3E9PqXD1m2xQwkYg'
const API_HEADER = 'https://identitytoolkit.googleapis.com/v1/accounts:'

const ProfileForm = () => {
  const newPasswordInputRef = useRef()
  const history = useHistory()
  const authCtx = useContext(AuthContext)


  const submitHandler = event => {
    event.preventDefault()

    const enteredNewPassword = newPasswordInputRef.current.value
    // add validation

    fetch(
      `${API_HEADER}update?key=${API_KEY}`, 
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecuretoken: false
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        // assumption: Always succeeds! 
        history.replaceState('/')
      })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
