import { useState } from "react";
import { useAddBookMutation } from "../Feature/BookApi/BookApi";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const [addBook, { isSuccess, isError }] = useAddBookMutation();
  const [formdata, setformdata] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });

  const handlerBook = (event) => {
    const { name, value, checked } = event.target;

    setformdata((prev) => {
      return {
        ...prev,
        [name]: name === "featured" ? checked : value,
      };
    });
  };

  const handlerBookAdd = (event) => {
    event.preventDefault();
    addBook(formdata).then(() => {
      setformdata({
        name: "",
        author: "",
        thumbnail: "",
        price: "",
        rating: "",
        featured: false,
      });
      navigate(`/`);
    });
  };

  return (
    <>
      {isSuccess && <h1>sucessfully added</h1>}
      {isError && <h1>Someting error occured in adding </h1>}
      <form className="book-form" onSubmit={handlerBookAdd}>
        <div className="space-y-2">
          <label htmlFor="lws-bookName">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="lws-bookName"
            name="name"
            value={formdata?.name}
            onChange={handlerBook}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-author">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="lws-author"
            name="author"
            value={formdata?.author}
            onChange={handlerBook}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-thumbnail">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="lws-thumbnail"
            name="thumbnail"
            value={formdata?.thumbnail}
            onChange={handlerBook}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="lws-price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="lws-price"
              name="price"
              value={formdata?.price}
              onChange={handlerBook}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-rating">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="lws-rating"
              name="rating"
              min="1"
              max="5"
              value={formdata?.rating}
              onChange={handlerBook}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="lws-featured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            checked={formdata?.featured}
            onChange={handlerBook}
          />
          <label htmlFor="lws-featured" className="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>

        <button type="submit" className="submit" id="lws-submit">
          Add Book
        </button>
      </form>
    </>
  );
}
