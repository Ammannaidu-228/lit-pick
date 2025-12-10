import {
  BookOpen,
  Sparkles,
  Zap,
  Database,
  Brain,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function Landing() {
  const features = [
    {
      icon: Brain,
      title: "Smart ML Algorithms",
      description:
        "Powered by Scikit-learn's advanced similarity-based and ranking models for 20% better recommendations",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Flask API backend delivers predictions in under 200ms for a seamless browsing experience",
    },
    {
      icon: Database,
      title: "Massive Dataset",
      description:
        "50K+ meticulously cleaned records using Pandas and NumPy for high-quality recommendations",
    },
  ];

  const techniques = [
    {
      title: "Collaborative Filtering",
      description:
        "Analyzes user behavior and ratings to find similar readers and recommend books they enjoyed",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Content-Based Filtering",
      description:
        "Matches book attributes like genre, author, and themes with your preferences",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Hybrid Approach",
      description:
        "Combines multiple algorithms for more accurate and diverse recommendations",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { value: "50K+", label: "Books Analyzed" },
    { value: "<200ms", label: "Response Time" },
    { value: "20%", label: "Better Accuracy" },
    { value: "3", label: "ML Models" },
  ];

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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-32 sm:pb-32">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-300 font-medium">
                Powered by Advanced Machine Learning
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Discover Your
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mt-2">
                Next Favorite Book
              </span>
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed">
              Experience personalized book recommendations powered by
              cutting-edge ML algorithms. Find books you'll love based on your
              unique reading preferences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
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
                  View Top 50 Books
                </button>
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                Built for Performance
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              State-of-the-art technology stack delivering fast, accurate
              recommendations
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
                Advanced Recommendation Engine
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our hybrid ML approach combines multiple techniques for superior
              accuracy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {techniques.map((technique, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-gray-950/80 border border-gray-800 overflow-hidden group hover:border-gray-700 transition-all duration-300"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${technique.gradient}`}
                />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${technique.gradient} flex items-center justify-center text-white font-bold`}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {technique.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {technique.description}
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
              Built with industry-leading technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "React.js",
              "Flask",
              "Scikit-learn",
              "Pandas",
              "NumPy",
              "Machine Learning",
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
