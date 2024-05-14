
import Header from "components/Header.jsx/Header";
import "./Home.css"
import sprite from "svg/symbol-defs.svg";
import { NavLink } from 'react-router-dom';


export default function Home() {

    return (
        <div className="h-full bg-white">
            <div className=" bg-teal-900 bg bg-cover  bg-center text-white  rounded-3xl relative" style={{
                margin: "calc(32 / 1440 * 100%)",
                width: "calc(100% - ((32 / 1440 * 100%) * 2))",

                padding: "20px calc(96 / 1376 * 100%) 50px calc(96 / 1376 * 100%)",
            }} >
                <Header />
                <div className='w-screen bg-stone-200 absolute left-0 mt-4' style={{ height: "1px" }} ></div>
                <h1 className="font-medium text-4xl  md:text-5xl lg:text-6xl 2xl:text-7xl  mt-48" style={{ width: "calc(517 / 1184 * 100%)", minWidth: "260px" }} >Make Life Easier for the Family:</h1>
                <p className="text-2xl font-normal mt-7 mb-16 " style={{ width: "calc(517 / 1184 * 100%)", minWidth: "260px" }}>Find Babysitters Online for All Occasions</p>
                <div className='mb-8' style={{ height: "60px", width: "231px" }}>
                    <NavLink to="/nannies" >

                        <button className=
                            ' bg-teal-900 button rounded-full ' style={{ border: "solid 1px", borderColor: "rgba(251, 251, 251, 0.40)" }} type={"button "}><span className="flex items-center   text-xl" style={{ padding: "18px 50px", height: "60px", width: "230px" }} >Get started
                                <svg className="ml-4 svg fill-white hover:rotate-45" width={16} height={16}>
                                    <use href={`${sprite}#icon-arrow-up-right2`} />

                                </svg></span>
                        </button>

                    </NavLink></div>
                <div className=" p-4 bg-white rounded-2xl ml-auto flex items-center lg:p-8 2xl:-mr-11" style={{ height: "118", maxWidth: "284px", }}>
                    <div className='  bg-teal-900 rounded-xl flex items-center justify-center mr-4 ' style={{ width: "54px", height: "54px" }}>
                        <svg className='fill-white' width={16} height={16}>
                            <use href={`${sprite}#icon-checkmark`} />
                        </svg>
                    </div>
                    <div>
                        <p className="text-black">Experienced nannies</p>
                        <p className="text-black text-2xl font-medium">15,000</p></div>
                </div>
            </div>
        </div>
    );
}
