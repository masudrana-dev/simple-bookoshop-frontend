import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CreateBooks from "./pages/CreateBooks"
import DeleteBooks from "./pages/DeleteBooks"
import EditBook from "./pages/EditBook"
import ShowBook from "./pages/ShowBook"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/books/create" element={<CreateBooks />}></Route>
        <Route path="/books/delete/:id" element={<DeleteBooks />}></Route>
        <Route path="/books/edit/:id" element={<EditBook />}></Route>
        <Route path="/books/details/:id" element={<ShowBook />}></Route>
      </Routes>
    </div>
  )
}

export default App
