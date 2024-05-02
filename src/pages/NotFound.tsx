import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-y-3 items-center justify-center">
        <h1 className="text-4xl ">Page Not Found 😔</h1>
        <Link className="bg-blue-600 text-white px-5 py-2 rounded-md" to="/admin">
          To Home
        </Link>
    </div>
  )
}

export default NotFound