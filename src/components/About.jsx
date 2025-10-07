import React, { useState } from 'react';
import { BookOpen, Database, Code, Server, ChevronDown, ChevronUp } from 'lucide-react';

export default function About() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <BookOpen className="w-16 h-16 text-blue-500" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            About Our Book Recommendation System
          </h1>
          <p className="text-xl text-gray-400">
            Personalized book recommendations powered by data science and machine learning
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            We believe every reader deserves to discover their next favorite book. Our platform uses 
            advanced recommendation algorithms to analyze reading patterns and suggest books tailored 
            to your unique taste. Whether you're into classic literature, contemporary fiction, or 
            non-fiction, we've got something for everyone.
          </p>
        </div>

        {/* How It Works - Accordion Style */}
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">How It Works</h2>

          {/* Section 1: Understanding Recommendation Systems */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700">
            <button
              onClick={() => toggleSection('recommender')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Code className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-semibold text-white">
                  Recommendation System Fundamentals
                </h3>
              </div>
              {expandedSection === 'recommender' ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {expandedSection === 'recommender' && (
              <div className="px-6 pb-6 pt-2 border-t border-gray-700">
                <p className="text-gray-300 mb-4">
                  Our system employs collaborative filtering and content-based recommendation techniques:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span><strong className="text-white">Collaborative Filtering:</strong> Analyzes user behavior and ratings to find similar readers and recommend books they enjoyed</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span><strong className="text-white">Content-Based Filtering:</strong> Matches book attributes like genre, author, and themes with your preferences</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span><strong className="text-white">Hybrid Approach:</strong> Combines multiple algorithms for more accurate and diverse recommendations</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Section 2: Data Collection */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700">
            <button
              onClick={() => toggleSection('data')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Database className="w-6 h-6 text-purple-500" />
                <h3 className="text-xl font-semibold text-white">
                  Data Collection from Kaggle
                </h3>
              </div>
              {expandedSection === 'data' ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {expandedSection === 'data' && (
              <div className="px-6 pb-6 pt-2 border-t border-gray-700">
                <p className="text-gray-300 mb-4">
                  Our dataset was sourced from Kaggle, featuring comprehensive book and user rating data:
                </p>
                <div className="bg-gray-900 rounded-lg p-4 mb-4 border border-gray-700">
                  <p className="font-mono text-sm text-gray-300 mb-2">Dataset includes:</p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Over 1 million book ratings from thousands of users</li>
                    <li>• Detailed book metadata (titles, authors, ISBNs, publication years)</li>
                    <li>• User demographic information for better personalization</li>
                    <li>• Rating scales from 1-10 for nuanced preferences</li>
                  </ul>
                </div>
                <p className="text-gray-300">
                  The raw data was downloaded in CSV format, providing a solid foundation for building 
                  our recommendation engine.
                </p>
              </div>
            )}
          </div>

          {/* Section 3: Data Cleaning */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700">
            <button
              onClick={() => toggleSection('cleaning')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Code className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-semibold text-white">
                  Data Cleaning with Jupyter Notebook
                </h3>
              </div>
              {expandedSection === 'cleaning' ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {expandedSection === 'cleaning' && (
              <div className="px-6 pb-6 pt-2 border-t border-gray-700">
                <p className="text-gray-300 mb-4">
                  Using Jupyter Notebook and Python libraries, we performed extensive data cleaning:
                </p>
                <div className="bg-black rounded-lg p-4 mb-4 overflow-x-auto border border-gray-800">
                  <code className="text-green-400 text-sm">
                    <div>import pandas as pd</div>
                    <div>import numpy as np</div>
                    <div className="mt-2"># Load raw data</div>
                    <div>books_df = pd.read_csv('books.csv')</div>
                    <div>ratings_df = pd.read_csv('ratings.csv')</div>
                    <div className="mt-2"># Clean and preprocess</div>
                    <div>books_df.drop_duplicates(inplace=True)</div>
                    <div>books_df.fillna(method='ffill', inplace=True)</div>
                  </code>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Removed duplicate entries and null values</li>
                  <li>• Standardized author names and book titles</li>
                  <li>• Filtered out books with insufficient ratings</li>
                  <li>• Normalized rating scales for consistency</li>
                  <li>• Created DataFrames for efficient processing</li>
                </ul>
              </div>
            )}
          </div>

          {/* Section 4: Flask API */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700">
            <button
              onClick={() => toggleSection('api')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-750 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Server className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-semibold text-white">
                  Flask API Backend
                </h3>
              </div>
              {expandedSection === 'api' ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            {expandedSection === 'api' && (
              <div className="px-6 pb-6 pt-2 border-t border-gray-700">
                <p className="text-gray-300 mb-4">
                  The cleaned data and recommendation algorithms are served through a Flask REST API:
                </p>
                <div className="bg-black rounded-lg p-4 mb-4 overflow-x-auto border border-gray-800">
                  <code className="text-green-400 text-sm">
                    <div>from flask import Flask, jsonify, request</div>
                    <div>import pickle</div>
                    <div className="mt-2">app = Flask(__name__)</div>
                    <div className="mt-2"># Load preprocessed data</div>
                    <div>with open('model.pkl', 'rb') as f:</div>
                    <div>&nbsp;&nbsp;model = pickle.load(f)</div>
                    <div className="mt-2">@app.route('/recommendations', methods=['POST'])</div>
                    <div>def get_recommendations():</div>
                    <div>&nbsp;&nbsp;user_input = request.json</div>
                    <div>&nbsp;&nbsp;recommendations = model.predict(user_input)</div>
                    <div>&nbsp;&nbsp;return jsonify(recommendations)</div>
                  </code>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• RESTful endpoints for book searches and recommendations</li>
                  <li>• Efficient data serialization with Pickle</li>
                  <li>• Fast response times with caching mechanisms</li>
                  <li>• CORS enabled for seamless React frontend integration</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 border border-blue-500">
          <h2 className="text-2xl font-bold mb-6 text-white">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-gray-700 bg-opacity-20 rounded-lg p-4 mb-2">
                <p className="font-semibold text-white">Frontend</p>
              </div>
              <p className="text-sm text-gray-200">React.js</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-700 bg-opacity-50 rounded-lg p-4 mb-2">
                <p className="font-semibold text-white">Backend</p>
              </div>
              <p className="text-sm text-gray-200">Flask API</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-700 bg-opacity-20 rounded-lg p-4 mb-2">
                <p className="font-semibold text-white">Data Processing</p>
              </div>
              <p className="text-sm text-gray-200">Pandas, NumPy</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-700 bg-opacity-20 rounded-lg p-4 mb-2">
                <p className="font-semibold text-white">ML Libraries</p>
              </div>
              <p className="text-sm text-gray-200">Scikit-learn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}