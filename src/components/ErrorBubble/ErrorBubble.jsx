const ErrorBubble = ({ message }) => {

    if (/ must be a `date` type/i.test(message)) {
        message = "Date of birth is required";
    }


    return (
        <div className="absolute left-72 top-0  mt-1  bg-red-400 text-white  py-1 rounded  text-xs z-50 " style={{ padding: "4px 3px" }}>
            {message}
        </div>
    );
};
export default ErrorBubble;
