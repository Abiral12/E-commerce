import { useState } from 'react'
import LoginForm from '../../Components/Forms/loginForm'
import { login } from './services'
import { setItem } from '../../utils/config/storageConfig'
import { useNavigate } from 'react-router-dom'
// import { setItem } from '../../utils/config/storageConfig'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Authentication = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  })
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const loginResponse = await login(loginInfo)
      if (loginResponse.status === 200 ) {
        setItem("token", loginResponse.data.token)
        console.log(loginResponse.data.role,"role")
        if (Number(loginResponse.data.role) === 1) {
          navigate("/dashboard");
      } else {
          navigate("/customer-dashboard");
      }
      
      }
  }
    catch(e){
      toast.error("Error Notification !"+ e, {
        position: "bottom-left"
      });
    }
  }
  return (
    <div>
      <LoginForm loginInfo={loginInfo} setLoginInfo={setLoginInfo} handleSubmit={handleSubmit}/>
      <ToastContainer />
    </div>
  )
}
export default Authentication