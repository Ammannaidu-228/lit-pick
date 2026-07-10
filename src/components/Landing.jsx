import { useEffect, useState } from "react";
import {
  BookOpen,
  Sparkles,
  Search,
  Brain,
  Zap,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Landing() {
  const features = [
    {
      icon: Brain,
      title: "Semantic Understanding",
      description:
        "Every book is embedded with OpenAI into a rich vector representation, so search understands meaning and theme — not just matching keywords.",
    },
    {
      icon: Sparkles,
      title: "Mood-Aware Recommendations",
      description:
        "An emotion-aware model reads the tone of every description, helping surface books that actually match how you want to feel.",
    },
    {
      icon: Zap,
      title: "Fast, Scalable Search",
      description:
        "A persistent vector index and an async API keep recommendations responsive, even as the catalog grows.",
    },
  ];

  const steps = [
    {
      title: "Understand",
      description:
        "Book descriptions are converted into high-dimensional vectors that capture meaning, theme, and tone — not just words.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Search",
      description:
        "Your query is embedded the same way, then matched against the catalog using vector similarity — so 'adventure' finds books about adventure, even without the word.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Rank & Enrich",
      description:
        "Matches are enriched with ratings, categories, and emotional tone, then ranked to surface the best fit for your search.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { value: "1536D", label: "Embedding Vectors" },
    { value: "Cosine", label: "Similarity Search" },
    { value: "Zero-Shot", label: "Emotion AI" },
    { value: "Real-Time", label: "Semantic Search" },
  ];

  const demoResults = [
    { title: "Children of Húrin", author: "J.R.R. Tolkien", match: 89 },
    { title: "Undaunted Courage", author: "Stephen E. Ambrose", match: 87 },
    { title: "The Circus of Adventure", author: "Enid Blyton", match: 86 },
  ];

  const [barsFilled, setBarsFilled] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setBarsFilled(true), 400);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-32 sm:pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span className="text-sm text-indigo-300 font-medium">
                  Powered by OpenAI Embeddings & Vector Search
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Discover Your
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mt-2">
                  Next Favorite Book
                </span>
              </h1>

              {/* Subheading */}
              <p className="max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl text-gray-300 leading-relaxed">
                Search by theme, mood, or plot — not just title. Lit-pick understands
                what a book is <em className="not-italic text-gray-100">about</em>,
                so you find your next read even when you can't remember its name.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link to={"/recommend"}>
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-semibold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transform hover:scale-105 transition-all duration-300">
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                      <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </Link>

                <Link to="/top-50">
                  <button className="px-8 py-4 border-2 border-gray-700 rounded-xl font-semibold text-lg hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all duration-300">
                    Try Semantic Search
                  </button>
                </Link>
              </div>
            </div>

            {/* Live search demo card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl bg-gray-900/70 border border-gray-800 backdrop-blur-xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-5">
                  <Search className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm font-medium text-gray-300">Semantic Search</span>
                </div>

                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-950/70 border border-gray-800 mb-5">
                  <Search className="w-4 h-4 text-gray-500 shrink-0" />
                  <span className="text-gray-100 text-sm">adventure</span>
                </div>

                <div className="space-y-3">
                  {demoResults.map((book, i) => (
                    <div
                      key={book.title}
                      className="flex items-center justify-between gap-4 p-3 rounded-lg bg-gray-950/50 border border-gray-800/80"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-100 truncate">{book.title}</p>
                        <p className="text-xs text-gray-500 truncate">{book.author}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 w-24">
                        <div className="flex-1 h-1.5 rounded-full bg-gray-800 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-pink-400 transition-all duration-1000 ease-out"
                            style={{
                              width: barsFilled ? `${book.match}%` : "0%",
                              transitionDelay: `${i * 150}ms`,
                            }}
                          />
                        </div>
                        <span className="text-[11px] text-gray-400 tabular-nums">{book.match}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                Search That Understands You
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built on modern AI infrastructure to find books by meaning, not just keywords
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500/50 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                How the Recommendations Work
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From a search query to a ranked list of books, in three steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-gray-950/80 border border-gray-800 overflow-hidden group hover:border-gray-700 transition-all duration-300"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.gradient}`}
                />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold`}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
                Modern Tech Stack
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Built with industry-leading AI and backend technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "React.js",
              "FastAPI",
              "OpenAI Embeddings",
              "ChromaDB",
              "MongoDB",
              "Hugging Face Transformers",
              "Docker",
            ].map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105"
              >
                <span className="text-gray-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}