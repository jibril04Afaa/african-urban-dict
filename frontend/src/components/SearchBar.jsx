import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";

/**
 * SearchBar component that handles search input
 * @param {Object} props - Component props
 * @param {Function} props.onSearch - Function to call when search term changes
 * @param {string} props.placeholder - Placeholder text for the search input
 * @param {number} props.debounceDelay - Delay in milliseconds before triggering search (default: 300ms)
 */
const SearchBar = ({ onSearch, placeholder = "Search African slang...", debounceDelay = 300 }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Debounce the search input
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (onSearch) {
        onSearch(searchTerm);
      }
    }, debounceDelay);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm, onSearch, debounceDelay]);

  return (
    <div className="w-full">
      <div className="pt-8">
        <div className="w-full max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={placeholder}
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              aria-label="Search for African slang words"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <CiSearch size={20} />
            </div>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;