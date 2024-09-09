import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";

const BackButtons = () => {
    return (
        <div>
            <Link to='/' >
                <FaArrowLeftLong className='text-2xl ' />
            </Link>
        </div>
    )
}

export default BackButtons
