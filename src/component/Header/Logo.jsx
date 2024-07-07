import { Barbell, House, SignOut, UserCircle } from 'phosphor-react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Provider/UserProvider';
import './logo.css'

const Logo = (props) => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  return (
  <>{userContext.user &&  <div className="Logo">
      <div className="left">
        <Barbell size={32} color="white" />  Nutritionist Clinc
      </div>
      <div className="right">
        {
          userContext.user &&
          <Link to='/login'>
            <UserCircle size={32} />
          </Link>
        }
        <Link to='/Home'>
          <House size={32} weight="fill" />
        </Link>
        <SignOut
          size={28}
          weight="fill"
          color="white"
          onClick={() => {
            userContext.setUser(null)
            navigate('/login')
          }} />


      </div>

    </div>
    }</>
  )
}

export default Logo;
