import axios from "axios";
const API_BASE = import.meta.env.VITE_API_BASE || 'http://127.0.0.1:5000';
import { useState } from "react";

export default function Recommend() {
  const [book, setBook] = useState("");
  const [data, setData] = useState([]);
  const handleChange = (event) => {
    setBook(event.target.value);
  };
  const handleClick = (event) => {
    // Handle the button click event here
    event.preventDefault();
    axios
      .post(`${API_BASE}/recommend`, { book: book })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  return (
    <>
      <div className="flex min-h-screen bg-gray-900 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center font-light text-2xl/9  tracking-tight text-white">
            Book Recommendations
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            onSubmit={handleClick}
            className="space-y-6"
          >
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="book"
                name="book"
                type="book"
                value={book}
                onChange={handleChange}
                required
                placeholder="Enter book name"
                autoComplete="book"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
              <button
                type="submit"
                onClick={handleClick}
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Recommend
              </button>
            </div>
            <div>

            </div>
          </form>

          {data.length === 0 && book && (
            <p className="mt-6 text-center text-sm/6 text-gray-400">
              Enter a book name to get personalized recommendations
            </p>
          )}
        </div>
        {data.length > 0 && (
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {data.map(([title, author, imageUrl], index) => (
              <div
                key={index}
                className="group relative flex flex-col bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-900/60 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div className="relative aspect-[4/3] p-2 overflow-hidden rounded-t-lg bg-gradient-to-b from-gray-800/80 to-gray-900/80">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                  <img
                    src={imageUrl}
                    alt={title}
                    className="relative h-full w-full object-contain object-center transform group-hover:scale-105 transition-all duration-300 rounded shadow-lg shadow-black/20 hover:shadow-indigo-500/20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute bottom-1 right-1 size-6 rounded-full bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-2">
                  <h3 className="text-xs font-semibold leading-tight text-gray-100 line-clamp-2 group-hover:text-white mb-0.5">
                    {title}
                  </h3>
                  <div className="mt-1.5 flex items-center justify-between gap-1.5">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-800/50 text-gray-400 text-[11px]">
                      {author}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
