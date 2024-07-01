// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import Spinner from "../components/Spinner";
// // import { Link } from "react-router-dom";
// // import { MdOutlineAddBox } from "react-icons/md";
// // import BooksCard from "../components/home/BooksCard";
// // import BooksTable from "../components/home/BooksTable";

// // const Home = () => {
// //   const [book, setBooks] = useState([]);
// //   const [loading, setloading] = useState(false);
// //   const [showType, setShowType] = useState("table");

// //   useEffect(() => {
// //     setloading(true);
// //     axios
// //       .get("http://localhost:5555/books")
// //       .then((response) => {
// //         setBooks(response.data.data);
// //         setloading(false);
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //         setloading(false);
// //       });
// //   }, []);

// //   return (
// //     <div className="min-h-screen p-4 bg-gradient-to-r from-blue-50 to-blue-100">
// //       <div className="flex items-center justify-center gap-x-4">
// //         <button
// //           className="px-4 py-2 text-white rounded-lg bg-sky-600 hover:bg-sky-800"
// //           onClick={() => setShowType("table")}
// //         >
// //           Table
// //         </button>
// //         <button
// //           className="px-4 py-2 text-white rounded-lg bg-sky-600 hover:bg-sky-800"
// //           onClick={() => setShowType("card")}
// //         >
// //           Card
// //         </button>
// //       </div>
// //       <div className="flex items-center justify-between my-8">
// //         <h1 className="text-3xl font-bold text-gray-700">Books List</h1>
// //         <Link to="/books/create">
// //           <MdOutlineAddBox className="text-4xl text-sky-800 hover:text-sky-600" />
// //         </Link>
// //       </div>
// //       {loading ? (
// //         <Spinner />
// //       ) : showType === "table" ? (
// //         <BooksTable book={book} />
// //       ) : (
// //         <BooksCard book={book} />
// //       )}
// //     </div>
// //   );
// // };

// // export default Home;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Spinner from "../components/Spinner";
// import { Link } from "react-router-dom";
// import { MdOutlineAddBox } from "react-icons/md";
// import BooksCard from "../components/home/BooksCard";
// import BooksTable from "../components/home/BooksTable";
// import { AiOutlineSearch, AiOutlineUser, AiOutlineLogin } from "react-icons/ai";
// import { BsMoonStars, BsSun } from "react-icons/bs";

// const Home = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showType, setShowType] = useState("table");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("http://localhost:5555/books")
//       .then((response) => {
//         setBooks(response.data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);

//   const filteredBooks = books.filter(
//     (book) =>
//       book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       book.author.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div
//       className={`min-h-screen p-4 ${
//         darkMode
//           ? "bg-gray-900 text-white"
//           : "bg-gradient-to-r from-blue-50 to-blue-100"
//       }`}
//     >
//       <div className="flex items-center justify-between">
//         <h1 className="text-3xl font-bold text-gray-700">Books List</h1>
//         <div className="flex items-center gap-x-4">
//           <button onClick={() => setDarkMode(!darkMode)}>
//             {darkMode ? (
//               <BsSun className="text-2xl" />
//             ) : (
//               <BsMoonStars className="text-2xl" />
//             )}
//           </button>
//         </div>
//       </div>
//       <div className="flex items-center justify-between my-4">
//         <div className="flex items-center gap-x-4">
//           <input
//             type="text"
//             placeholder="Search by title or author"
//             className="px-4 py-2 border-2 border-gray-400 rounded-lg"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <AiOutlineSearch className="text-2xl" />
//         </div>
//         <Link to="/books/create">
//           <MdOutlineAddBox className="text-4xl text-sky-800 hover:text-sky-600" />
//         </Link>
//       </div>
//       <div className="flex items-center justify-center gap-x-4">
//         <button
//           className="px-4 py-2 text-white rounded-lg bg-sky-600 hover:bg-sky-800"
//           onClick={() => setShowType("table")}
//         >
//           Table
//         </button>
//         <button
//           className="px-4 py-2 text-white rounded-lg bg-sky-600 hover:bg-sky-800"
//           onClick={() => setShowType("card")}
//         >
//           Card
//         </button>
//       </div>
//       {loading ? (
//         <Spinner />
//       ) : showType === "table" ? (
//         <BooksTable books={filteredBooks} />
//       ) : (
//         <BooksCard books={filteredBooks} />
//       )}
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMoonStars, BsSun } from "react-icons/bs";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://book-store-mern-backend-beta.vercel.app/books")
      .then((response) => {
        setBooks(response.data.data); // Assuming your data structure has a `data` field
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setError(error); // Set error state
        setLoading(false);
      });
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Display loading spinner while fetching data
  if (loading) {
    return <Spinner />;
  }

  // Display error message if data fetching fails
  if (error) {
    return <div>Error fetching data. Please try again later.</div>;
  }

  return (
    <div
      className={`min-h-screen p-4 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-r from-blue-50 to-blue-100"
      }`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-700">Books List</h1>
        <div className="flex items-center gap-x-4">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <BsSun className="text-2xl" />
            ) : (
              <BsMoonStars className="text-2xl" />
            )}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between my-4">
        <div className="flex items-center gap-x-4">
          <input
            type="text"
            placeholder="Search by title or author"
            className="px-4 py-2 border-2 border-gray-400 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <AiOutlineSearch className="text-2xl" />
        </div>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-4xl text-sky-800 hover:text-sky-600" />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <button
          className="px-4 py-2 text-white rounded-lg bg-sky-600 hover:bg-sky-800"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="px-4 py-2 text-white rounded-lg bg-sky-600 hover:bg-sky-800"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      {showType === "table" ? (
        <BooksTable books={filteredBooks} />
      ) : (
        <BooksCard books={filteredBooks} />
      )}
    </div>
  );
};

export default Home;
