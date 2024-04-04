import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {getReadData,getWishlistData} from '../../utils/localStorage';
import ListItem from './ListItem';

const ListedBooks = () => {
    const books = useLoaderData();
    console.log(books);
    const readId = getReadData();
    console.log(readId);
    const wishlistId = getWishlistData();
    console.log(wishlistId);
    
    const readBooks = books.filter(book => readId.includes(book.bookId));
    const wishlistBooks = books.filter(book => wishlistId.includes(book.bookId));
    console.log(readBooks);
    console.log(wishlistBooks);

    return (
        <div className="space-y-14">

            <h1 style={{backgroundColor: 'rgba(19, 19, 19, 0.05)'}} className="text-3xl font-bold text-center h-[30vh] flex justify-center items-center">Books</h1>

            <div className="text-center">
            <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A]">Filter</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-left space-y-2 font-bold">
    <li>Rating</li>
    <li>Year</li>
    <li>Number of Pages</li>
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
    readBooks.map(bookuntola => <ListItem key={bookuntola.bookId} bookuntola={bookuntola}></ListItem>)
  }
</TabPanel>
<TabPanel>
  {
    wishlistBooks.map(bookuntola => <ListItem key={bookuntola.bookId} bookuntola={bookuntola}></ListItem>)
  }
</TabPanel>
    </Tabs>
                
            </div>
            
        </div>
    );
};

export default ListedBooks;