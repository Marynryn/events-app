import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import InputField from 'components/InputField/InputField';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from 'firebase.js';
import { yupResolver } from '@hookform/resolvers/yup';
import { authSchema } from 'schema/schema';
import sprite from "svg/symbol-defs.svg";
import ErrorBubble from 'components/ErrorBubble/ErrorBubble';



const RegistrationForm = ({ type, onClose }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const methods = useForm({
        resolver: yupResolver(authSchema)
    });
    const { handleSubmit, formState: { errors }, register } = methods;
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    const onSubmit = methods.handleSubmit(async (data) => {
        console.log(data);
        const { email, password, name } = data;

        try {
            if (type === 'login') {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log(userCredential)
                if (name) {
                    await updateProfile(userCredential.user, {
                        displayName: name
                    });
                }
                onClose();
            }
        } catch (error) {
            toast.error("Invalid email or password");
        }
    });

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="block gap-10">
                <p className="mb-5 text-4xl font-medium">{`${type === 'register' ? 'Registration' : 'Log In'}`}</p>
                <p className="mb-10 text-s font-base" style={{ color: "rgba(17, 16, 28, 0.50)" }}>{`${type === 'register' ? 'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.' : 'Welcome back! Please enter your credentials to access your account and continue your babysitter search.'}`}   </p>
                <div className="w-full relative">
                    {type === 'register' && (

                        <InputField name="name" placeholder="Name" />


                    )}
                    <InputField name="email" placeholder="Email" />
                    <div className='relative'>
                        <input type={isPasswordVisible ? 'text' : 'password'} name="password" placeholder="Password" className='border border-border-gray w-full h-12 mb-4 pl-4 focus:border-teal-900 rounded-xl placeholder-black text-base font-normal text-black' {...register("password")} />
                        {errors.password && <ErrorBubble message={errors.password.message} />}
                        <button type='button' className='absolute right-4 ' style={{ top: "14px" }} onClick={togglePasswordVisibility}>
                            {isPasswordVisible ? (<svg className="w-5 h-5  top-3/4 right-1/4 mb-4 fill-white stroke-black" >
                                <use href={`${sprite}#icon-eye`} width={20} height={20} />
                            </svg>) :
                                (<svg className="w-5 h-5  top-3/4 right-1/4 mb-4 fill-white stroke-black" >
                                    <use href={`${sprite}#icon-eye-off`} width={20} height={20} />
                                </svg>)}
                        </button>
                    </div>
                </div>
                <div>
                    <button className=' bg-teal-900  border  border-stone-200 rounded-full w-full py-3 text-center mt-8 text-white  hover:bg-light-teal' type="submit" ><span className=''>{`${type === 'login' ? 'Log In' : 'Sign Up'}`}</span></button>
                </div>
            </form>

        </FormProvider>
    );
};

export default RegistrationForm;
