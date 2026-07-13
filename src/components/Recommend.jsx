import axios from "axios";
const API_BASE = import.meta.env.VITE_API_BASE || "http://127.0.0.1:5000";
import { useState, useEffect } from "react";
import {
  Search,
  Sparkles,
  BookOpen,
  Smile,
  Clock,
  Library,
  Star,
  AlertCircle,
} from "lucide-react";

const TOP_K_OPTIONS = [3, 5, 8];

const secureThumbnail = (url) => (url ? url.replace(/^http:\/\//, "https://") : null);

const cleanDescription = (description, isbn13) => {
  if (!description) return "";
  const stripped = isbn13 ? description.replace(new RegExp(`^${isbn13}\\s*`), "") : description;
  return stripped.trim();
};

const topEmotions = (emotions, count = 3) => {
  if (!emotions || typeof emotions !== "object") return [];
  return Object.entries(emotions)
    .sort(([, a], [, b]) => b - a)
    .slice(0, count)
    .map(([name]) => name);
};

function BookCard({ rec, index, revealed }) {
  const [coverFailed, setCoverFailed] = useState(false);
  const matchPct = Math.round((rec.similarity_score ?? 0) * 100);
  const categories = rec.categories
    ? rec.categories.split(",").map((c) => c.trim()).filter(Boolean)
    : [];
  const emotions = topEmotions(rec.emotions);

  return (
    <div className="group relative p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500/50 backdrop-blur-sm transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative flex gap-4">
        <div className="shrink-0 w-16 h-24 rounded-lg overflow-hidden bg-gray-800 border border-gray-800">
          {!coverFailed && rec.thumbnail ? (
            <img
              src={secureThumbnail(rec.thumbnail)}
              alt={rec.title}
              onError={() => setCoverFailed(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-gray-600" />
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-white leading-snug line-clamp-2">
            {rec.title}
          </h3>
          <p className="text-sm text-gray-500 truncate mt-0.5">{rec.authors || "Unknown author"}</p>

          <div className="flex items-center gap-2 mt-2">
            <div className="flex-1 h-1.5 rounded-full bg-gray-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-pink-400 transition-all duration-1000 ease-out"
                style={{
                  width: revealed ? `${matchPct}%` : "0%",
                  transitionDelay: `${index * 150}ms`,
                }}
              />
            </div>
            <span className="text-[11px] text-gray-400 tabular-nums shrink-0">{matchPct}% match</span>
          </div>
        </div>
      </div>

      {categories.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-medium"
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      {rec.description && (
        <p className="text-sm text-gray-400 leading-relaxed mt-3 line-clamp-3">
          {cleanDescription(rec.description, rec.isbn13)}
        </p>
      )}

      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-800/80">
        {typeof rec.average_rating === "number" && (
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <Star className="w-3.5 h-3.5 text-indigo-400" />
            {rec.average_rating.toFixed(2)}
            {typeof rec.ratings_count === "number" && (
              <span className="text-gray-600">({rec.ratings_count})</span>
            )}
          </span>
        )}
        {emotions.length > 0 && (
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <Smile className="w-3.5 h-3.5 text-pink-400" />
            {emotions.join(", ")}
          </span>
        )}
      </div>

      {rec.match_reason && (
        <p className="text-xs text-gray-500 italic mt-3">{rec.match_reason}</p>
      )}
    </div>
  );
}

export default function Recommend() {
  const [book, setBook] = useState("");
  const [topK, setTopK] = useState(3);
  const [includeEmotions, setIncludeEmotions] = useState(true);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (result) {
      setRevealed(false);
      const id = setTimeout(() => setRevealed(true), 300);
      return () => clearTimeout(id);
    }
  }, [result]);

  const handleChange = (event) => {
    setBook(event.target.value);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    axios
      .post(`${API_BASE}/recommend`, { book, top_k: topK, include_emotions: includeEmotions })
      .then((response) => {
        const data = response.data;
        if (!data || !data.recommendations || data.recommendations.length === 0) {
          setError(
            `No matches for "${book}". Try the exact title — e.g. "1984" or "Brave New World".`
          );
        } else {
          setResult(data);
        }
      })
      .catch(() => {
        setError(
          `No matches for "${book}". Try the exact title — e.g. "1984" or "Brave New World".`
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* Animated background, matching the landing hero */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300 font-medium">ML-Powered Recommendations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Discover Your Next
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mt-1">
              Great Read
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-gray-300 leading-relaxed">
            Enter a book you love, and semantic search finds titles that match its meaning and tone.
          </p>
        </div>

        {/* Search card */}
        <form
          onSubmit={handleSubmit}
          className="relative rounded-2xl bg-gray-900/70 border border-gray-800 backdrop-blur-xl p-6 shadow-2xl mb-10"
        >
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-950/70 border border-gray-800 mb-5 focus-within:border-indigo-500/50 transition-colors">
            <Search className="w-4 h-4 text-gray-500 shrink-0" />
            <input
              id="book"
              name="book"
              type="text"
              value={book}
              onChange={handleChange}
              required
              disabled={loading}
              placeholder="e.g. Gilead, 1984, Brave New World"
              className="w-full bg-transparent text-gray-100 text-sm placeholder:text-gray-600 focus:outline-none disabled:opacity-50"
            />
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-end gap-6">
              <div>
                <div className="text-xs text-gray-500 mb-2">Results</div>
                <div className="flex gap-1.5">
                  {TOP_K_OPTIONS.map((k) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setTopK(k)}
                      className={`text-sm w-9 h-9 rounded-lg border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                        topK === k
                          ? "bg-gradient-to-br from-indigo-500 to-purple-500 border-transparent text-white"
                          : "border-gray-700 text-gray-400 hover:border-indigo-500/50"
                      }`}
                    >
                      {k}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIncludeEmotions((v) => !v)}
                className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-full"
              >
                <span
                  className={`w-9 h-5 rounded-full border transition-colors relative ${
                    includeEmotions ? "bg-gradient-to-r from-indigo-500 to-purple-500 border-transparent" : "border-gray-700"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 w-3.5 h-3.5 rounded-full bg-white transition-all ${
                      includeEmotions ? "left-[18px]" : "left-0.5"
                    }`}
                  />
                </span>
                <span className="text-xs text-gray-400">Mood tags</span>
              </button>
            </div>

            <button
              type="submit"
              disabled={loading || !book.trim()}
              className="group relative px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-semibold text-sm shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center gap-2">
                {loading ? "Searching…" : "Find Books"}
                {!loading && <BookOpen className="w-4 h-4 group-hover:rotate-12 transition-transform" />}
              </span>
            </button>
          </div>
        </form>

        {/* Error */}
        {error && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 mb-8">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <p className="text-sm text-red-300">{error}</p>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center py-16">
            <div className="relative w-14 h-14">
              <div className="absolute inset-0 border-4 border-gray-800 border-t-indigo-500 rounded-full animate-spin" />
            </div>
            <p className="text-sm text-gray-500 mt-5">Embedding your query…</p>
          </div>
        )}

        {/* Results */}
        {!loading && result && (
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 text-gray-300">
                <Library className="w-4 h-4 text-indigo-400" />
                <span className="text-sm">
                  {result.total_results} match{result.total_results === 1 ? "" : "es"} for{" "}
                  <span className="text-white font-medium">"{result.query_book}"</span>
                </span>
              </div>
              {typeof result.processing_time_ms === "number" && (
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Clock className="w-3.5 h-3.5" />
                  {Math.round(result.processing_time_ms)}ms
                </div>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {result.recommendations.map((rec, index) => (
                <BookCard key={rec.isbn13 || rec.title} rec={rec} index={index} revealed={revealed} />
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && !result && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mb-5">
              <Search className="w-7 h-7 text-indigo-400" />
            </div>
            <p className="text-gray-500 max-w-sm mx-auto">
              Enter a book title above to get personalized, meaning-based recommendations.
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        @media (prefers-reduced-motion: reduce) {
          .animate-blob { animation: none; }
        }
      `}</style>
    </div>
  );
}