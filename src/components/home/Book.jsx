import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Book = ({book}) => {

    const navigate = useNavigate();
    
    const { bookId, bookName, author, image, rating, category, tags} = book;

    return (
        <div onClick={()=>navigate(`/books/${bookId}`)} className="w-72 border p-5 space-y-2 shadow-lg hover:cursor-pointer">
            <img src={image} alt={bookName} />
            <div>
                {tags.map((tag,idx)=><div key={idx} className="badge badge-secondary mx-1">{tag}</div>)}
            </div>
            <h1 className="font-bold text-2xl">{bookName}</h1>
            <p>By: <span className="font-bold">{author}</span></p>
            <div className="divider"></div>
            <div className="flex justify-between">
                <p className="font-semibold">{category}</p>
                <p className="flex items-center gap-1">{rating} <span><FaStar /></span></p>
            </div>


        </div>
    );
};

export default Book;