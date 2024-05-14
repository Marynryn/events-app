import ErrorBubble from 'components/ErrorBubble/ErrorBubble';
import React from 'react';
import { useFormContext } from 'react-hook-form';


const InputField = ({ name, placeholder }) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className='relative'>
            <input className=' bg-white border border-border-gray w-full h-12 mb-4 pl-4 focus:border-teal-900 rounded-xl placeholder-black text-base font-normal text-black' type="text" {...register(name)} placeholder={placeholder} />
            {errors[name] && <ErrorBubble message={errors[name].message} />}

        </div>
    );
};

export default InputField;
