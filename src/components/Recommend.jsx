import axios from "axios";
const API_BASE = import.meta.env.VITE_API_BASE || "http://127.0.0.1:5000";
import { useState } from "react";

export default function Recommend() {
  const [book, setBook] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setBook(event.target.value);
    setError("");
  };

  const handleClick = (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setData([]);

    axios
      .post(`${API_BASE}/recommend`, { book: book })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        if (!response.data || response.data.length === 0) {
          setError(
            "No recommendations found. Use the exact book title (e.g., '1984', 'Brave New World') or pick one from the Top 50 Books."
          );
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setError(
          "No recommendations found. Use the exact book title (e.g., '1984', 'Brave New World') or pick one from the Top 50 Books."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm mb-4">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></div>
              <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                ML-Powered Recommendations
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-violet-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Discover Your Next
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Great Read
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Enter a book you love, and let our ML algorithm find similar titles you'll enjoy
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <form onSubmit={handleClick} className="relative">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative flex gap-3 p-2 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-white/10">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <input
                      id="book"
                      name="book"
                      type="text"
                      value={book}
                      onChange={handleChange}
                      required
                      placeholder="Enter a book title (e.g., '1984', 'Brave New World')"
                      disabled={loading}
                      className="w-full pl-12 pr-4 py-4 bg-transparent text-white placeholder:text-gray-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading || !book.trim()}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Searching</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span>Find Books</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>

            {/* Error Message */}
            {error && (
              <div className="mt-6 relative">
                <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-2xl"></div>
                <div className="relative bg-red-500/10 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-red-300 font-semibold mb-1">No recommendations found</h3>
                      <p className="text-red-200/80 text-sm">{error}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-gray-700 border-t-purple-500 rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-pink-500 rounded-full animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
              </div>
              <p className="mt-6 text-gray-400 font-medium">Finding perfect matches for you...</p>
              <div className="flex gap-1 mt-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          )}

          {/* Results Section */}
          {!loading && data.length > 0 && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Based on your taste, you might love these
                </h2>
                <p className="text-gray-400">
                  Found {data.length} recommendations powered by machine learning
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6">
                {data.map(([title, author, imageUrl], index) => (
                  <div
                    key={index}
                    className="group relative"
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
                    }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                    
                    <div className="relative bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                      {/* Book Cover */}
                      <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),transparent)]"></div>
                        <img
                          src={imageUrl}
                          alt={title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="flex items-center gap-2 text-white/90 text-xs">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              <span>View Details</span>
                            </div>
                          </div>
                        </div>

                        {/* Badge */}
                        <div className="absolute top-3 right-3 px-2 py-1 bg-purple-500/90 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                          #{index + 1}
                        </div>
                      </div>

                      {/* Book Info */}
                      <div className="p-4 space-y-2">
                        <h3 className="font-bold text-white text-sm leading-tight line-clamp-2 group-hover:text-purple-300 transition-colors min-h-[2.5rem]">
                          {title}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="truncate">{author}</span>
                        </div>

                        {/* Match indicator */}
                        <div className="pt-2 border-t border-white/5">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                style={{ width: `${100 - (index * 5)}%` }}
                              ></div>
                            </div>
                            <span className="text-xs font-semibold text-purple-400">
                              {100 - (index * 5)}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && data.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-6">
                <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Start Your Journey</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Enter a book title above to get personalized recommendations based on your reading preferences
              </p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}