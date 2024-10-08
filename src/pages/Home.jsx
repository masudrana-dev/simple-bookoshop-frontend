import { useEffect, useState } from "react"
import axios from 'axios'
import Spinner from '../component/Spinner'
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../component/BooksTable";
import { Link } from "react-router-dom";
// import { BsTable } from "react-icons/bs";
import BookCard from "../component/BookCard";


const Home = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [showType, setShowType] = useState("table")
    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:5555/books')
            .then(res => {
                setBooks(res.data.data)
                setLoading(false)
            }).catch((err) => {
                setLoading(false)
                console.log(err);
            });
    }, [])
    return (
        <div className="p-4">
            <div className="flex justify-center items-center gap-x-4">
                <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={() => setShowType('table')}>
                    Table
                </button>
                <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={() => setShowType('card')}>
                    Card
                </button>
            </div>
            <div className="flex justify-center items-center">
                <h1 className="text-3xl my-8">Book List</h1>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            {
                loading ? <Spinner /> : showType === 'table' ?
                    (<BooksTable books={books} />) : (<BookCard books={books} />)
            }
        </div>
    )
}

export default Home
