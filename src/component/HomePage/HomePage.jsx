import { ForkKnife, Plus, Users } from 'phosphor-react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../Provider/UserProvider'
import './Home.css'

const HomePage = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext)

  useEffect(() => {
    if (!userContext.user?.id) {
      navigate('/login', { replace: false });
    }
  }, []);

  return (
    <div className="home">
      <div className="img2">
        <img src='./picture1.jpg' alt='any' />
        <Link to='/AddNewDiet' className="circle"><Plus size={28} /> Add New Diet Program </Link>
        <Link to='/FoodPage' className="circle1"><ForkKnife size={28} /> Mange Food Table</Link>
        <Link to='/AllPatient' className="circle2"><Users size={32} /> View Existing Patient </Link>
      </div>
    </div>
  )
}

export default HomePage
