import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const Signup = (props:{
  onClick:(username: String, password:String) => void
}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return <div>
  <div style={{
      paddingTop: 150,
      marginBottom: 10,
      display: "flex",
      justifyContent: "center"
  }}>
      <Typography variant={"h6"}>
      Welcome to Coursera. Sign up below
      </Typography>
  </div>
<div style={{display: "flex", justifyContent: "center"}}>
  <Card  style={{width: 400, padding: 20}}>
      <TextField
         onChange={(event) => {
          setEmail(event.target.value);
      }}
          fullWidth={true}
          label="Email"
          variant="outlined"
      />
      <br/><br/>
      <TextField
       onChange={(e) => {
        setPassword(e.target.value);
    }}
          fullWidth={true}
          label="Password"
          variant="outlined"
          type={"password"}
      />
      <br/><br/>

      <Button
        onClick={async()=>{
            props.onClick(email,password);
        }}
          size={"large"}
          variant="contained"
      > Signup</Button>
  </Card>
</div>
</div>
}

