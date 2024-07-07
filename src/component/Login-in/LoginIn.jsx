import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../Common/input/input.component';
import { loginUser } from '../../common-function-data/data';
import './login.css';
import { useContext } from 'react';
import { UserContext } from '../Provider/UserProvider';

const Loginln = (props) => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext)

  useEffect(() => {
    if (userContext.user?.id) {
      navigate('/Home', { replace: true });
    }
  }, []);

  /**
 * Handler function for the form onSubmit event.
 * @param {React.FormEvent<HTMLFormElement>} e Event object.
 */
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (email && password) {
      const user = loginUser(email, password);
     
      if (user) {
        userContext.setUser(user);
        navigate('/Home', { replace: true });
      } else {
        alert("Email or Password are not correct! Please try again.");
      }
    }
  };
  
  return (
    <div className="login-page">
      <h2 className="welcome">Nutritionist Clinc</h2>
      <img src="./loginBlue.png" alt="" />
      <form onSubmit={handleLogin}>
        <h2>Lets Start to Be Healthy</h2>
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Name@example.com"
          />
        <Input
          label="Password"
          name="password"
          type="password"
          />
        <div className="Login-submit">
          <input type="submit" value="Login" />
        </div>
      </form >
    </div >
  );
};

export default Loginln;