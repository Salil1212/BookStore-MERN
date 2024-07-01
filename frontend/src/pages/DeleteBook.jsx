import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`https://book-store-mern-backend-beta.vercel.app/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted successfully", { variant: "success" });
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
        <h1 className="my-4 ml-4 text-3xl">Delete Book</h1>
      </div>
      {loading && <Spinner />}
      <div className="flex flex-col w-full max-w-3xl p-4 border-2 border-sky-400 rounded-xl">
        <h3 className="mb-8 text-2xl text-center">
          Are You Sure You want to delete this book?
        </h3>
        <button
          className="w-full p-4 text-white bg-red-600 rounded-md hover:bg-red-700"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
