import React from "react";
import AuthForm from "./AuthForm";
 
function Signup() {
  return (
    <AuthForm  
    headerText="Sign up"
    isUsername={true}
    isConfirmPassword={true}
    footerText="Already have an account?"
    linkUrl="/login"
    linkText="Login"
    isRememberMe={false}
    url={"signUp"}
    />
  );
}
 
export default Signup;