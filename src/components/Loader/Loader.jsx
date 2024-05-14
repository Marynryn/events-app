import { ThreeCircles } from "react-loader-spinner"



const Loader = () => {
    return (
        <div className="flex justify-center items-center m-auto h-screen">
            <ThreeCircles
                height="200"
                width="200"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""

            /></div>
    )
}
export default Loader