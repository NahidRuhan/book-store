import { useLoaderData, useParams } from "react-router-dom";
import {setReadData,setWishlistData,removeFromWishlist, getReadData} from '../../utils/localStorage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const BookDetails = () => {
    const books = useLoaderData();
    const id = useParams();
    const book = books.find(elem=> elem.bookId === parseInt(id.id))
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    const [isRead, setIsRead] = useState(false);
    const [isWishlist, setIsWishlist] = useState(false);

    const handleRead = (bookId) => {
        if(!isRead){
            removeFromWishlist(bookId);
            // setIsWishlist(!isWishlist);
            setReadData(bookId);  //send the bookId to local storage
            toast.success('Book Read Successfully');
            setIsRead(!isRead);
        }
        else toast.error('Book Already Read');

    }

    const handleWishlist = (bookId) => {

        const readData = getReadData(); 

        const doesExist = readData.find(data=> data === bookId);
        if(!doesExist){
            if(!isRead && !isWishlist){
            setWishlistData(bookId);   //send the bookId to local storage
            toast.success('Book Wishlist Successfully');
            setIsWishlist(!isWishlist);            
        }
        else if(isRead) toast.error('Book Already Read');
        else toast.error('Book Already Wishlist'); 
        }
        else toast.error('Book Already Read');
    }

    return (
        <div className="flex gap-10">
            <div className="basis-1/2">
                <img className="w-full" src={image} alt={bookName} />
            </div>
            <div className="space-y-5 basis-1/2">
                <h1 className="font-bold text-4xl">{bookName}</h1>
                <p className="text-xl">By: <span className="font-bold">{author}</span></p>
                <div className="divider"></div>
                <p className="font-semibold text-xl">Category: {category}</p>
                <div className="divider"></div>
                <p><span className="font-bold">Review: </span>{review}</p>
                <p><span>Tags: </span>{tags.map((tag,idx)=><div key={idx} className="badge badge-secondary mx-1"># {tag}</div>)}</p>
                <div className="divider"></div>
                <div className="space-y-5">
                    <p><span className="w-52 inline-block">Number of Pages :</span><span className="font-bold">{totalPages} Pages</span></p>
                    <p><span className="w-52 inline-block">Publishers :</span><span className="font-bold">{publisher}</span></p>
                    <p><span className="w-52 inline-block">Year of Publishing :</span><span className="font-bold">{yearOfPublishing}</span></p>                    
                    <p><span className="w-52 inline-block">Rating :</span><span className="font-bold">{rating}⭐</span></p>                    
                </div>
                <div className="flex gap-10 py-5">
                    <button onClick={()=>handleRead(bookId)} className="btn btn-outline">Read</button>
                    <button onClick={()=>handleWishlist(bookId)} className="btn btn-info">Wishlist</button>
                </div>
                

            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;