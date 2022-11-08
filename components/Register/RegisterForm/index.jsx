import { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../../redux/actions';

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
      style={{ width: '540px',marginTop:'100px' }}
    >
      <div>
            <img src="img/avatar.svg" style = {{width: '300px', height:'300px'}} />
      </div>
      <div className="field" style={{ marginTop:'50px' }}>
        <p className="control has-icons-left">
          <input
            className="input"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="material-icons md-dark md-inactive">Your email</i>
          </span>
        </p>
      </div>
      <div className="field" style={{ marginTop:'20px' }}>
        <p className="control has-icons-left">
          <input
            className="input"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="material-icons md-dark md-inactive">Your password</i>
          </span>
        </p>
      </div>
      <div className="field" style={{ marginTop:'20px' }}>
        <p className="control has-text-centered">
          <button type="submit" className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none">
            Create account
          </button>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
