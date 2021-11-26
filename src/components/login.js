import React from 'react'
import {TextField, Button} from '@mui/material'
export default function login() {
    return (
        <div>
            <h1>Login Page</h1>
            <TextField id="outlined-basic" label="Username" variant="outlined" required="true"/>
            <TextField id="outlined-basic" label="Password" variant="outlined" required="true"/>
            <Button className="field" variant="contained">Submit</Button>
        </div>
    )
}
