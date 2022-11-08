import { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../../redux/actions';
import styles from './custome.module.css'

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(actions.authenticate({ email, password }, 'register'));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto container mt-3"
      style={{ width: '540px',marginTop:'150px', marginBottom:'100px' }}
    >
      <div>
            <img src="img/avatar.svg" style = {{width: '250px', height:'250px', margin:'auto' }} />
      </div>
      <div style={{marginTop:'30px'}}>
          <p style={{textAlign:'center', fontSize:'xx-large', color:'chocolate'}}>Create Account</p>
        </div>
      <div className="field" style={{ marginTop:'50px' }}>
        <p className="control has-icons-left" style={{textAlign:'center'}}>
          <input
            className={`input ${styles.inputbutton}`}
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          
        </p>
      </div>
      <div className="field" style={{ marginTop:'20px' }}>
        <p className="control has-icons-left" style={{textAlign:'center'}}>
          <input
            className={`input ${styles.inputbutton}`}
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          
        </p>
      </div>
      <div className="field" style={{ marginTop:'20px' }}>
        <p className="control has-text-centered" style={{textAlign:'center'}}>
          <button type="submit" className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none" style={{width:'60%'}}>
            Sign Up
          </button>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
