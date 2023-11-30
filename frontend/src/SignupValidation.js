function Validation(values){
    
    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    if(values.name===""){
        error.name='name should not be empty';
    }
    else{
        error.name="";
    }
    if(values.email===""){
        error.email='name should not be empty';
    }
    else if(!email_pattern.test(values.email)){
        error.email="email did not match"
    }else{
        error.email=""
    }
    if(values.password===""){
        error.password='name should not be empty';
    }
    else if(!email_pattern.test(values.email)){
        error.password="password did not match";
    }else{
        error.password="";
    }
    return error;
}

export default Validation;