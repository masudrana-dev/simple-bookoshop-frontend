import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import BackButtons from "../component/BackButtons"
import Spinner from "../component/Spinner"
import { useState } from "react"

const DeleteBooks = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()

    const handleDeleteBook = () => {
        setLoading(true)
        axios.delete(`http://localhost:5555/books/${id}`)
            .then(res => {
                setLoading(false)
                navigate('/')
            }).catch((err) => {
                console.log(err);
                alert('plz check the console')
            })
    }
    return (
        <div className="p-4">
            <BackButtons />
            <h1 className="text-xl my-4">Delete Book</h1>
            {loading ? <Spinner></Spinner> : ' '}
            <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl  w-[600px] p-8 mx-auto">
                <h2 className="text-2xl mb-6"> Are your sure you want to delet this book ?</h2>
                <button className="w-full bg-red-600 p-4 text-white" onClick={handleDeleteBook}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default DeleteBooks
