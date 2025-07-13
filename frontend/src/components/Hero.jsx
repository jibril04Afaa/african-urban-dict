import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import WordCard from "../reusable-components/WordCard";

// Mock data - replace with your actual data fetching logic
const mockWords = [
  {
    id: 1,
    wordTitle: "Wahala",
    origin: "Nigerian",
    username: "username123",
    dateAdded: "May 15, 2009",
    wordDef: "Trouble or problem.",
    likes: 24,
    dislikes: 2
  },
  {
    id: 2,
    wordTitle: "Bomboclaat",
    origin: "Jamaican",
    username: "rastaman34",
    dateAdded: "Sep 12, 2019",
    wordDef: "Used when one is stressed.",
    likes: 15,
    dislikes: 3
  },
  {
    id: 3,
    wordTitle: "Chale",
    origin: "Ghanaian",
    username: "egglover4eva",
    dateAdded: "Jan 05, 2012",
    wordDef: "Buddy or friend. Chale how we go do am.",
    likes: 32,
    dislikes: 1
  },
  {
    id: 4,
    wordTitle: "Sabi",
    origin: "Nigerian Pidgin",
    username: "pidginmaster",
    dateAdded: "Mar 22, 2015",
    wordDef: "To know or to be able to do something.",
    likes: 18,
    dislikes: 0
  },
  {
    id: 5,
    wordTitle: "Tua",
    origin: "Ghanaian",
    username: "ghfan99",
    dateAdded: "Jul 08, 2018",
    wordDef: "To put or place something somewhere.",
    likes: 12,
    dislikes: 2
  }
]

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWords, setFilteredWords] = useState(mockWords);

  // Filter words based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredWords(mockWords);
      return;
    }

    const lowercasedSearch = searchTerm.toLowerCase();
    const filtered = mockWords.filter(word => 
      word.wordTitle.toLowerCase().includes(lowercasedSearch) ||
      word.wordDef.toLowerCase().includes(lowercasedSearch) ||
      word.origin.toLowerCase().includes(lowercasedSearch)
    );
    setFilteredWords(filtered);
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <div>
        <div className="bg-gray-100 min-h-screen">
          {/* Navbar */}
          <div>
            <NavBar />
          </div>

          {/* Search Bar */}
          <div>
            <SearchBar 
              onSearch={handleSearch}
              placeholder="Search for words, definitions, or origins..."
            />
          </div>

          {/* Words List */}
          <div className="pb-8">
            {filteredWords.length > 0 ? (
              filteredWords.map(word => (
                <WordCard
                  key={word.id}
                  wordTitle={word.wordTitle}
                  origin={word.origin}
                  username={word.username}
                  dateAdded={word.dateAdded}
                  wordDef={word.wordDef}
                  likes={word.likes}
                  dislikes={word.dislikes}
                  id={word.id}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No words found matching "{searchTerm}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;