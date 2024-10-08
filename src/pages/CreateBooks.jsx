import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackButtons from '../component/BackButtons'
import Spinner from '../component/Spinner'

const CreateBooks = () => {
    const [title, setTitle] = useState(' ')
    const [author, setAuthor] = useState(' ')
    const [publishYear, setPublishYear] = useState(' ')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear
        }
        setLoading(true)
        axios.post('http://localhost:5555/books', data)
            .then(res => {
                setLoading(false)
                navigate('/')
            }).catch((err) => {
                console.log(err);
                setLoading(false)
                alert('plz check the console')
            })
    }
    return (
        <div className='p-4'>
            <BackButtons></BackButtons>
            <h1 className='text-3xl my-4'>Create Book </h1>
            {
                loading ? <Spinner /> : ' '
            }
            <div className="flex flex-col border border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                <div className="my-4">
                    <label htmlFor="" className='text-xl mr-4 text-gray-500'>Tittle</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className="my-4">
                    <label htmlFor="" className='text-xl mr-4 text-gray-500'>Author</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className="my-4">
                    <label htmlFor="" className='text-xl mr-4 text-gray-500'>Publish Year</label>
                    <input type="text" value={publishYear} onChange={(e) => setPublishYear(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-500 m-8' onClick={handleSaveBook}>save</button>
            </div>
        </div>
    )
}

export default CreateBooks
