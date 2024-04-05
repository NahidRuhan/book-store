import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import { getReadData } from '../../utils/localStorage';
import { useEffect, useState } from 'react';

const PageRead = () => {

    const books = useLoaderData();
    const [data,setData] = useState([])

    useEffect(() => {
        const readId = getReadData();
        const filteredBooks = books.filter(book => readId.includes(book.bookId));
        let dummy = [];
        filteredBooks.forEach((book) => {
            dummy.push({ name: book.bookName, page: book.totalPages });
        });
        setData(dummy);
    }, [books]);

    return (
        <div className='flex justify-center'>
            {data.length > 0 ? (
                <BarChart width={1200} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="page" fill="#82ca9d" />
                </BarChart>
            ): <h1 className='text-center text-xl font-bold'>No data to show</h1>}
        </div>
    );
};

export default PageRead;