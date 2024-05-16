import ErrorBubble from 'components/ErrorBubble/ErrorBubble';
import React from 'react';
import { useFormContext } from 'react-hook-form';


const InputField = ({ name, label, type }) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className='relative mb-4 block'>
            <label htmlFor={name}>{label}</label><br />
            <input className=' bg-white border border-border-gray w-72 h-12  px-4 focus:border-teal-900 rounded-xl text-base font-normal text-black' type={type} {...register(name)} />
            {errors[name] && <ErrorBubble message={errors[name].message} />}

        </div>
    );
};

export default InputField;
