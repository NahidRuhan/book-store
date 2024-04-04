import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Book = ({book}) => {

    const navigate = useNavigate();

    // const data = {
    //     "bookId": 4,
    //     "bookName": "The Three-Body Problem",
    //     "author": "Liu Cixin",
    //     "image": "https://i.ibb.co/7rXL4dS/three-body-problem.jpg",
    //     "review": "Dive into the mind-bending world of 'The Three-Body Problem' by Liu Cixin. This groundbreaking science fiction novel explores themes of physics, philosophy, and the fate of humanity in the face of an impending alien invasion. A must-read for fans of hard science fiction.",
    //     "totalPages": 400,
    //     "rating": 4.5,
    //     "category": "Science Fiction",
    //     "tags": ["Aliens", "Physics", "Philosophy"],
    //     "publisher": "Tor Books",
    //     "yearOfPublishing": 2008
    // }
    

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