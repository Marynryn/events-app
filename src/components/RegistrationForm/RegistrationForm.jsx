import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import InputField from 'components/InputField/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import { authSchema } from 'schema/schema';
import Button from 'components/Button/Button';
import ErrorBubble from 'components/ErrorBubble/ErrorBubble';
import { useDispatch } from 'react-redux';
import { eventRegistration } from 'store/operations';
import { useParams } from 'react-router-dom/dist';


const RegistrationForm = () => {
    const dispatch = useDispatch();
    const methods = useForm({
        resolver: yupResolver(authSchema)
    });
    const { handleSubmit, formState: { errors }, register, reset } = methods;
    const { id } = useParams();

    const onSubmit = async (data) => {
        try {

            await dispatch(eventRegistration({ id, data }));
            reset();
            toast.success("Registration successful");
        } catch (error) {

            toast.error("Failed to register");
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="block gap-10 h-full">
                <h2 className="mb-10 text-6xl font-medium">Event registration</h2>

                <div className=" relative">
                    <InputField type="text" name="name" label="Full Name" />
                    <InputField type="email" name="email" label="Email" />
                    <InputField type="date" name="date_of_birth" label="Date of birth" />
                    {errors.dateOfBirth && <ErrorBubble message={errors.dateOfBirth.message} />}
                </div>
                <div className='relative '>
                    <p className='mb-4 mt-8'>Where did you hear about this event?</p>
                    <input type="radio" id="option1" name="about_us" value="Social media" {...register("about_us")} />
                    <label className=' ml-2 mr-8' htmlFor="option1">Social media</label>
                    <input type="radio" id="option2" name="about_us" value="Friends" {...register("about_us")} />
                    <label className=' ml-2 mr-8' htmlFor="option2">Friends</label>
                    <input type="radio" id="option3" name="about_us" value="Found myself" {...register("about_us")} />
                    <label className=' ml-2 ' htmlFor="option3">Found myself</label>
                    {errors.about_us && <ErrorBubble message={errors.about_us.message} />}
                </div>
                <div className='ml-32 mt-16'><Button type="submit" >Register</Button></div>

            </form>

        </FormProvider>
    );
};

export default RegistrationForm;
