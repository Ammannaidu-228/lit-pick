import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Server,
  Sparkles,
  Library,
  Brain,
  Database,
  RotateCw,
  X,
  Check,
  ArrowRight,
} from "lucide-react";

const crew = [
  {
    role: "The Conductor",
    tech: "FastAPI",
    icon: Server,
    gradient: "from-indigo-500 to-blue-500",
    front: "Routes every request and keeps the whole system on tempo.",
    back: "FastAPI handles requests asynchronously, validates them with Pydantic, and initializes the recommendation engine lazily — so startup stays light and cold starts stay fast.",
  },
  {
    role: "The Embedder",
    tech: "OpenAI",
    icon: Sparkles,
    gradient: "from-purple-500 to-indigo-500",
    front: "Turns a paragraph about a book into a fingerprint of what it means.",
    back: "Every book description is converted into a 1536-dimension vector using OpenAI's embedding model — capturing meaning and theme, not just words.",
  },
  {
    role: "The Librarian",
    tech: "ChromaDB",
    icon: Library,
    gradient: "from-pink-500 to-purple-500",
    front: "Remembers where every single book lives, and finds its neighbors instantly.",
    back: "A persistent Chroma vector index stores every embedding and retrieves the closest matches by cosine similarity — across the whole catalog, in milliseconds.",
  },
  {
    role: "The Reader",
    tech: "Hugging Face",
    icon: Brain,
    gradient: "from-rose-500 to-pink-500",
    front: "Reads between the lines to feel out a book's emotional tone.",
    back: "A zero-shot classifier (bart-large-mnli) scores each description's emotional register — without ever being fine-tuned on books specifically.",
  },
  {
    role: "The Archivist",
    tech: "MongoDB",
    icon: Database,
    gradient: "from-blue-500 to-cyan-500",
    front: "Keeps titles, authors, and ratings straight, no matter how the catalog grows.",
    back: "MongoDB stores and indexes book metadata, joining titles, authors, categories, and ratings back onto every vector search hit.",
  },
];

const keywordMisses = [
  '"book about starting over after loss"',
  '→ no exact phrase match',
  '→ 0 results',
];

const semanticHits = [
  { title: "The Five People You Meet in Heaven", note: "grief, second chances" },
  { title: "A Man Called Ove", note: "loneliness, quiet reinvention" },
  { title: "Eleanor Oliphant Is Completely Fine", note: "isolation, healing" },
];

export default function About() {
  const [flipped, setFlipped] = useState(() => crew.map(() => false));

  const toggleFlip = (i) => {
    setFlipped((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(120,119,198,0.25),rgba(255,255,255,0))]" />
        <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300 font-medium">About lit-pick</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Built for readers who remember{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              the feeling
            </span>
            , not the title
          </h1>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            You know the one — funny and sad at the same time, something about
            starting over, maybe a small town. You just can't remember what it
            was called. That's the search lit-pick was built to answer.
          </p>
        </div>
      </div>

      {/* Keyword vs semantic */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Same question.{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
                Two very different searches.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Keyword search — the old way */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-7 opacity-80">
              <div className="flex items-center gap-2 mb-5">
                <X className="w-4 h-4 text-gray-500" />
                <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                  Keyword search
                </span>
              </div>
              <div className="rounded-lg bg-gray-950 border border-gray-800 px-4 py-3 text-sm text-gray-400 mb-5">
                {keywordMisses[0]}
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>{keywordMisses[1]}</p>
                <p className="text-gray-500 font-medium">{keywordMisses[2]}</p>
              </div>
            </div>

            {/* Semantic search — lit-pick */}
            <div className="relative rounded-2xl border border-indigo-500/30 bg-gray-900/60 p-7 shadow-lg shadow-indigo-500/10">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-500/10 to-pink-500/10 pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-5">
                  <Check className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs uppercase tracking-wider text-indigo-300 font-medium">
                    Semantic search · lit-pick
                  </span>
                </div>
                <div className="rounded-lg bg-gray-950 border border-gray-800 px-4 py-3 text-sm text-gray-100 mb-5">
                  "book about starting over after loss"
                </div>
                <div className="space-y-3">
                  {semanticHits.map((b) => (
                    <div
                      key={b.title}
                      className="flex items-center justify-between gap-3 rounded-lg bg-gray-950/60 border border-gray-800/80 px-3 py-2.5"
                    >
                      <span className="text-sm text-gray-100">{b.title}</span>
                      <span className="text-[11px] text-indigo-300/80 bg-indigo-500/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                        {b.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            No book here has the phrase "starting over after loss" in its
            description. lit-pick found them anyway.
          </p>
        </div>
      </section>

      {/* Meet the engine — flip cards */}
      <section className="py-24 px-6 bg-gray-900/40 border-y border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Meet the Engine</h2>
          </div>
          <p className="text-center text-gray-400 max-w-xl mx-auto mb-14">
            Five services, each doing one job well. Click a card to see what's
            actually running underneath.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {crew.map((member, i) => (
              <button
                key={member.role}
                onClick={() => toggleFlip(i)}
                className="text-left [perspective:1200px] group"
                aria-label={`Flip ${member.role} card`}
              >
                <div
                  className="relative h-64 transition-transform duration-500 [transform-style:preserve-3d]"
                  style={{ transform: flipped[i] ? "rotateY(180deg)" : "rotateY(0deg)" }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 rounded-2xl border border-gray-800 bg-gray-950 p-5 flex flex-col [backface-visibility:hidden]"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-4`}
                    >
                      <member.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-semibold text-white">{member.role}</h3>
                    <p className="text-xs text-gray-500 mb-3">{member.tech}</p>
                    <p className="text-sm text-gray-400 leading-relaxed flex-1">{member.front}</p>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-600 mt-3">
                      <RotateCw className="w-3 h-3" />
                      tap to see how
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className={`absolute inset-0 rounded-2xl border border-gray-800 bg-gradient-to-br ${member.gradient} p-5 flex flex-col [backface-visibility:hidden]`}
                    style={{ transform: "rotateY(180deg)" }}
                  >
                    <p className="text-xs uppercase tracking-wider text-white/70 mb-3">{member.tech}</p>
                    <p className="text-sm text-white leading-relaxed flex-1">{member.back}</p>
                    <div className="flex items-center gap-1.5 text-[11px] text-white/60 mt-3">
                      <RotateCw className="w-3 h-3" />
                      tap to flip back
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / closing */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            The best recommendation isn't the most popular book.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              It's the right one for what you're feeling right now.
            </span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto">
            That's the whole premise of lit-pick: search by meaning and mood,
            not just metadata, and let the catalog surface books a keyword
            search would have missed entirely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/top-50">
              <button className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
                Try it yourself
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Link>
            <Link to="/recommend">
              <button className="px-7 py-3.5 border-2 border-gray-700 rounded-xl font-semibold hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all duration-300">
                Get a recommendation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}