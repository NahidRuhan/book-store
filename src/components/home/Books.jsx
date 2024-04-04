import Book from "./Book";

const Books = ({books}) => {

    return (
        <div>

            <h1 className="font-bold text-3xl text-center">Books</h1>

            <div className="grid grid-cols-3 gap-5">
                {
                    books.map((book,idx)=> <Book key={idx} book={book}></Book>)
                }
            </div>
            
        </div>
    );
};

export default Books;