import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import Navbar from './components/navbar/Navbar'
import AllRoutes from './AllRoutes'
//import { useEffect } from 'react'
import {fetchAllQuestions} from './actions/question'
import { fetchAllUsers } from './actions/users'


function App() {  

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])

  return (
    <div className="App">
      <Router>
        <Navbar/>
          <AllRoutes/>
      </Router>
    </div>
  );
}

// App.post("/forogt-password", async (req, res) => {
//   const { email } = req.body;

//     try {
//         const oldUser = await users.findOne({ email });

//         if (!oldUser)
//         {
//             return res.status(404).json({message:"User doesn't exist."})
//         }

//         const secret = JWT_SECRET + oldUser.password;
//         const token = jwt.login({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: '5m' });

//         const link = `https://stack-overflow.herokuapp.com/reset-password/${oldUser._id}/${token}`;
//         console.log(link)

//     } catch (error) {
        
//     }
// })

export default App;
