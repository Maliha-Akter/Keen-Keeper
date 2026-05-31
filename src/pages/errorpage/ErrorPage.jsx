"use client";

import { Link } from "react-router";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 via-white to-red-100 px-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 text-center border border-red-100">
        
        {/* Icon */}
        <div className="text-6xl mb-4">⚠️</div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-green-600 mb-2">
          Page Not Found
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          We encountered an unexpected error. Please try again or go back.
        </p>

        {/* Error details (optional) */}
        {error && (
          <div className="bg-red-50 text-green-500 text-sm p-3 rounded-lg mb-6">
            {error.message}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-red-700 transition"
          >
            Try Again
          </button>

          <button
            onClick={() => window.location.href = "/"}
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            <Link to={"/"}>Go Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;