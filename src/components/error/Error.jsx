import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5">
            <h1 className="text-center">Ooops!</h1>
            <p>Something Went Wrong!!!!!</p>
            <Link to='/'><button className="btn btn-primary">GO BACK TO HOME</button></Link>
        </div>
    );
};

export default Error;
