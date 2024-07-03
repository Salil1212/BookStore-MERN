import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBooks = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("https://book-store-mern-backend-beta.vercel.app/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex items-center w-full max-w-3xl px-4">
        <BackButton />
        <h1 className="my-4 ml-4 text-3xl text-center">Create Book</h1>
      </div>
      {loading && <Spinner />}
      <div className="flex flex-col w-full max-w-3xl p-4 border-2 border-sky-400 rounded-xl">
        <div className="my-4">
          <label className="block mb-2 text-xl text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-500 rounded-md"
          />
        </div>

        <div className="my-4">
          <label className="block mb-2 text-xl text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-500 rounded-md"
          />
        </div>

        <div className="my-4">
          <label className="block mb-2 text-xl text-gray-500">
            Publish Year
          </label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-500 rounded-md"
          />
        </div>

        <button
          className="w-full p-2 text-white rounded-md bg-sky-300 hover:bg-sky-400"
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
