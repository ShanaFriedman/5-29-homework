import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useEffect } from "react";

const Logout = () => {
    const {setUser} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        const logout = async() => {
            await axios.post('/api/account/logout')
            setUser(null)
            navigate('/')
        }
        logout()
    }, [])

    return (<></>)
}
export default Logout