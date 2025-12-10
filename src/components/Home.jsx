import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

const API_BASE = import.meta.env.VITE_API_BASE || 'http://127.0.0.1:5000';

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axios.get(`${API_BASE}/books`);
        setData(response.data);
        if (!response.data || !response.data.book_name || response.data.book_name.length === 0) {
          setError("No books available at the moment.");
        }
      } catch (err) {
        console.log(err);
        setError("Failed to load books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">  
      <main className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Top Fifty Books
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover the most recommended books from our community of readers
            </p>
          </div>

          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative">
                <div className="h-16 w-16 rounded-full border-4 border-gray-700 border-t-indigo-500 animate-spin"></div>
                <div className="absolute inset-0 h-16 w-16 rounded-full border-4 border-transparent border-t-indigo-400 animate-spin opacity-50" style={{ animationDuration: '1.5s' }}></div>
              </div>
              <p className="mt-4 text-sm text-gray-400">Loading books...</p>
            </div>
          )}

          {error && !loading && (
            <div className="max-w-md mx-auto mt-10">
              <div className="rounded-md bg-red-500/10 border border-red-500/20 p-4">
                <p className="text-center text-sm text-red-400">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
          
          {!loading && !error && data && data.book_name && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {data.book_name.map((book, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-900/60 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
                >
                  <div className="relative aspect-[4/3] p-2 overflow-hidden rounded-t-lg bg-gradient-to-b from-gray-800/80 to-gray-900/80">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                    <img
                      src={data.image[index]}
                      alt={book}
                      className="relative h-full w-full object-contain object-center transform group-hover:scale-105 transition-all duration-300 rounded shadow-lg shadow-black/20 hover:shadow-indigo-500/20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute bottom-1 right-1 size-6 rounded-full bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-1 p-2">
                    <h3 className="text-xs font-semibold leading-tight text-gray-100 line-clamp-2 group-hover:text-white mb-0.5">
                      {book}
                    </h3>
                    <p className="text-[11px] text-gray-400 group-hover:text-gray-300">
                      {data.author[index]}
                    </p>
                    <div className="mt-1.5 flex items-center justify-between gap-1.5">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 text-[11px] font-medium">
                        ★ {data.rating[index].toFixed(1)}
                      </div>
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-800/50 text-gray-400 text-[11px]">
                        {data.votes[index]}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;