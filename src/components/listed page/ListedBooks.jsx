import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {getReadData,getWishlistData} from '../../utils/localStorage';
import ListItem from './ListItem';
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

//Huh Method

const ListedBooks = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);
    const [displayReadBooks, setDisplayReadBooks] = useState([]);
    const [displayWishlistBooks, setDisplayWishlistBooks] = useState([]);
    const [huh,setHuh] = useState(false);

    useEffect(()=>{
        const readId = getReadData();
        const wishlistId = getWishlistData();  
        const readBooks = books.filter(book => readId.includes(book.bookId));
        const wishlistBooks = books.filter(book => wishlistId.includes(book.bookId));
        setReadBooks(readBooks);
        setWishlistBooks(wishlistBooks);
    },[books])

    const handleRating = ()=> {
      const readBooksSorted = [...readBooks].sort((a, b) => b.rating - a.rating);
      setDisplayReadBooks(readBooksSorted);
      const wishlistBooksSorted = [...wishlistBooks].sort((a, b) => b.rating - a.rating);
      setDisplayWishlistBooks(wishlistBooksSorted);
      setHuh(true);
    }
    const handleYear = ()=> {

      const readBooksSorted = [...readBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setDisplayReadBooks(readBooksSorted);
      const wishlistBooksSorted = [...wishlistBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setDisplayWishlistBooks(wishlistBooksSorted);
      setHuh(true);



    }
    const handlePage = ()=> {
      const readBooksSorted = [...readBooks].sort((a, b) => b.totalPages - a.totalPages);
      setDisplayReadBooks(readBooksSorted);
      const wishlistBooksSorted = [...wishlistBooks].sort((a, b) => b.totalPages - a.totalPages);
      setDisplayWishlistBooks(wishlistBooksSorted);
      setHuh(true);

    }

    return (
        <div className="space-y-14">

            <h1 style={{backgroundColor: 'rgba(19, 19, 19, 0.05)'}} className="text-3xl font-bold text-center h-[30vh] flex justify-center items-center">Books</h1>

            <div className="text-center">
            <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A]">Filter <span><IoIosArrowDown /></span></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-left space-y-2 font-bold">
    <li className='hover:cursor-pointer' onClick={handleRating}>Rating</li>
    <li className='hover:cursor-pointer' onClick={handleYear}>Year</li>
    <li className='hover:cursor-pointer' onClick={handlePage}>Number of Pages</li>
  </ul>
</div>
            </div>

            <div>

            <Tabs>
      <TabList>
        <Tab>Read</Tab>
        <Tab>Wishlist</Tab>
      </TabList>
  
      <TabPanel>
  {
    (huh ? displayReadBooks : readBooks).map(bookuntola => <ListItem key={bookuntola.bookId} bookuntola={bookuntola}></ListItem>)
  }
</TabPanel>
<TabPanel>
  {
    (huh ? displayWishlistBooks : wishlistBooks).map(bookuntola => <ListItem key={bookuntola.bookId} bookuntola={bookuntola}></ListItem>)
  }
</TabPanel>
    </Tabs>
                
            </div>
            
        </div>
    );
};

export default ListedBooks;