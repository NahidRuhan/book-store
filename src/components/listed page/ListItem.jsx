import { CiLocationOn } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { LuFileSpreadsheet } from "react-icons/lu";
import { useNavigate } from "react-router-dom";


const ListItem = ({bookuntola}) => {

    const navigate = useNavigate();

    const { bookId,bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = bookuntola;


    return (
        <div className="flex py-5 gap-10">

            <div className="basis-1/5">
                <img src={image} alt={bookName} />
            </div>
            <div className="basis-4/5 space-y-4">

                <h1 className="font-bold text-2xl">{bookName}</h1>
                <p>By: {author}</p>
                <div className="flex gap-5">
                <p><span className="font-bold">Tags: </span>{tags.map((tag,idx)=><div key={idx} className="badge badge-secondary mx-1"># {tag}</div>)}</p>
                <p className="flex items-center gap-2"><span><CiLocationOn /></span> Year of Publishing: {yearOfPublishing}</p>
                </div>
                <div className="flex gap-5">

                <p className="flex items-center gap-2"><span><IoBookOutline /></span> Publisher: {publisher}</p>
                <p className="flex items-center gap-2"><span><LuFileSpreadsheet /></span> Page {totalPages}</p>

                </div>
                <div className="divider"></div>
                <div className="flex gap-5">
                    <p className="py-2 px-3 rounded-full text-sm bg-blue-100 text-blue-600">Category: {category}</p>
                    <p className="py-2 px-3 rounded-full text-sm bg-orange-100 text-orange-600">Rating: {rating}</p>
                    <p onClick={()=> navigate(`/books/${bookId}`)} className="py-2 px-3 rounded-full text-sm bg-green-500 text-white hover:cursor-pointer">Details</p>
                </div>

            </div>




            
        </div>
    );
};

export default ListItem;