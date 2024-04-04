import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="banner flex flex-col gap-5 justify-center items-center rounded-3xl">
      <h1 className="text-5xl w-[800px] text-center">
        Explore a World of Books at Our Exceptional Bookstore!
      </h1>
      <p className="w-[850px] text-center">
        Embark on a literary adventure like no other with our curated collection
        of books! Whether you&apos;re a bookworm or a casual reader, dive into
        the world of literature tailored to your interests and reading level.
      </p>
      <div className="flex gap-4 justify-center">
        <button onClick={()=> navigate('/listed-books')} className="btn bg-[#0BE58A] text-black rounded-full border-none outline-none w-[176px]">
          View The List
        </button>
      </div>
    </div>
  );
};

export default Banner;
