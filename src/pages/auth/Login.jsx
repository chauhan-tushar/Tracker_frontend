import React, { useState } from 'react';
import Button from './../../components/Button';
import Input from './../../components/Input';
import Card from './../../components/Card';
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from './../../components/Icons/GoogleIcon';
import { validateLogin,__isErrors } from '../../validations/index';
import useAxiosFunction from '../../hooks/useAxiosFunction';
import axiosConfig from "../../api/authApi"
import { loginSuccess } from '../../utils/constants';

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        errors: {}
    });
    const [data,error,loading,axiosFetch] = useAxiosFunction(loginSuccess);

    const handleFormInput = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value})
    };
    
    const formData = {
        email: form.email,
        password:form.password
    }
    
    const handleSubmitForm = () => {
        const errors = validateLogin(form)
        if (__isErrors(errors)){
            setForm({...form,errors})
            return false
        }
        axiosFetch({
            axiosInstance:axiosConfig,
            method:'POST',
            url:'/login',
            requestConfig:formData,
            redirectUrl: '/admin'
        })
    }

    return (
        <>
           <Card className="sm:min-w-[500px]">
               <h1 className="text-indigo-950 text-title-md text-center">
                   Login Into Tracker
               </h1>
               <Button 
                   variant="secondary"
                   icon={<GoogleIcon />}
                   text="Google Login"
                   className="my-14 w-full"
               />
               <div className="flex flex-col gap-5">
                   <Input
                       type="text"
                       name="email"
                       value={form.email}
                       onChange={handleFormInput}
                       autofocus 
                       placeholder="Email"
                       error={form.errors?.email}
                   />
                   <Input 
                       type="password"
                       name="password"
                       value={form.password}
                       onChange={handleFormInput}
                       placeholder="Password"
                       error={form.errors?.password}
                   />
               </div>
               <Button 
                   onClick={handleSubmitForm}
                   className="mt-12 w-full" 
                   variant="primary" 
                   text="Login"
                   type="submit"
                   loader={loading}
               />
               <p className="mt-12 text-center">
                   <span>Don’t have account ? </span> 
                   <Link to="/register" 
                         className="text-semibold text-violet-700"
                   >Sign Up
                   </Link>
               </p>
           </Card>
        </>
    );
};

export default Login;
