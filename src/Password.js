import React, { useState } from "react";
import "./PasswordStyle.css";
import "./Style.css";

const Password = () =>{
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    return(
        
        <div className="password-input-container">

                <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="signup-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <i
                className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"}
                onClick={() => setShowPassword(!showPassword)
                }
                ></i> 
                
            </div>
           

    );
}

export default Password;