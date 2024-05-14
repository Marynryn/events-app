import React, { useState } from 'react';

import { Controller, FormProvider, useForm } from 'react-hook-form';

import InputField from 'components/InputField/InputField';
import Select from 'react-select';
import sprite from "svg/symbol-defs.svg";
import { generateTimeOptions } from 'helpers/generateTimeOptions';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from 'schema/schema';
import ErrorBubble from 'components/ErrorBubble/ErrorBubble';

const BookingForm = ({ props, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const methods = useForm({
        resolver: yupResolver(schema)
    });
    const { handleSubmit, control, formState: { errors }, register } = methods;

    const onSubmit = (data) => {

        console.log(data);
        onClose();
    };

    return (
        <FormProvider {...methods}>
            <div className='overflow-y-auto'>
                <h2 className=" text-3xl font-medium mb-5" style={{ "@media screen and (minWidth:1024px)": { fontSize: "40px", lineHeight: "48px " } }}>Make an appointment with a babysitter</h2>
                <p className="text-base font-normal text-gray mb-10">Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner.</p>
                <div className="flex mb-10" style={{ gap: "14px" }}>
                    <div>
                        <img className="" style={{ borderRadius: "15px" }} alt="nanny" src={props.avatar_url} width={44} height={44} />
                    </div>
                    <div>
                        <p className='text-gray font-medium text-xs'>Your Nanny</p>
                        <h3 className='text-base font-medium mt-1'>{props.name}</h3>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="">

                    <div className="">
                        <div className='flex gap-2'>
                            <InputField type="text" name="address" placeholder="Address" />

                            <InputField type="phone" name="phone" placeholder="+380" />

                        </div>
                        <div className='flex gap-2'>
                            <div className=' border border-border-gray  h-12 mb-4  items-center rounded-xl relative'>
                                <input type="number" name="age" placeholder="Child's age" className=" bg-white pl-4 focus:border-teal-900  h-full w-full rounded-xl placeholder-black text-base font-normal text-black"  {...register("age")} />
                                {errors.age && <ErrorBubble message={errors.age.message} />}
                            </div>
                            <div className="  border border-border-gray  h-12 mb-4  items-center rounded-xl relative">

                                <input
                                    type="text"
                                    name="meetingTime"
                                    value={methods.watch("meetingTime.value") || "00:00"}
                                    readOnly
                                    required
                                    className=' bg-white pl-4 focus:border-teal-900  h-full w-full rounded-xl placeholder-black text-base font-normal text-black'
                                />
                                <svg className="absolute right-4 top-4 fill-white stroke-black" onClick={() => setIsOpen(!isOpen)} width={20} height={20}>
                                    <use href={`${sprite}#icon-clock`} />
                                </svg>
                                {errors.meetingTime && <ErrorBubble message={errors.meetingTime.message} />}
                                {isOpen && (
                                    <div className="right-0 absolute rounded-3xl text-center" style={{ width: "151px", height: "180px", fill: "#FFF", boxShadow: "rgba(0, 0, 0, 0.07))" }}>
                                        <Controller
                                            name="meetingTime"
                                            control={control}
                                            defaultValue={''}
                                            render={({ field }) => (
                                                <Select
                                                    {...field}
                                                    options={generateTimeOptions()}
                                                    menuIsOpen={isOpen}
                                                    onMenuClose={() => setIsOpen(false)}
                                                    autoFocus
                                                    classNamePrefix="select"
                                                    styles={{
                                                        menu: (provided) => ({
                                                            ...provided,
                                                            zIndex: 9999,
                                                            borderRadius: "15px"
                                                        }),
                                                        control: () => ({
                                                            display: 'none'
                                                        }),
                                                        option: (provided, state) => ({

                                                            ...provided,
                                                            fontSize: "16px",
                                                            lineHeight: "20px",
                                                            fontWeight: "500",
                                                            padding: "6px",
                                                            display: 'flex',

                                                            justifyContent: "center",
                                                            backgroundColor: 'transparent',
                                                            color: state.isDisabled ? 'black' : state.isFocused ? 'black' : 'rgba(0,0,0,0.5)'
                                                        })
                                                    }}
                                                />
                                            )}
                                        />
                                    </div>
                                )}

                            </div></div>
                        <InputField type="email" name="email" placeholder="Email" />

                        <InputField type="text" name="name" placeholder="Father's or mother's name" />

                        <div className='border border-border-gray w-full  mb-4 flex items-center rounded-xl'>
                            <textarea className=' bg-white pl-4 focus:border-teal-900 w-full h-full rounded-xl placeholder-black text-base font-normal text-black pt-4' as="textarea" rows="6" cols="50" name="comment" placeholder="Comment" style={{ height: "116px" }} />
                        </div>



                    </div>
                    <button type="submit" className=' text-white w-full mt-10 bg-teal-900 rounded-full hover:bg-light-teal hover:text-teal-900' style={{ height: "48px", border: "solid 1px", borderColor: "rgba(251, 251, 251, 0.40)" }} ><span className=''>Send</span></button>

                </form>
            </div>
        </FormProvider>
    );
};

export default BookingForm;
