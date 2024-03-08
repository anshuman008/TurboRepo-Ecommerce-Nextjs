import { FC, useState } from 'react'
import {Signup} from "../../../../packages/ui/src/Signup"
import axios from 'axios'

interface loginProps {

}

const login: FC<loginProps> = () => {
  return <div>
   <Signup onClick={ async(username: string, password: string) => {
       const responce = await axios.post("/api/signup",{
        username,
        password
       });

       localStorage.setItem("token",responce.data.token);
   }}/>
</div>
}

export default login