const ErrorBubble = ({ message }) => {

    if (/age must be a `number` type/i.test(message)) {
        message = "Age must be a number";
    }


    return (
        <div className="absolute  -top-4 mt-1 right-0 bg-red-400 text-white  py-1 rounded  text-xs z-50 " style={{ padding: "4px 3px" }}>
            {message}
        </div>
    );
};
export default ErrorBubble;
