import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import WordCard from "../reusable-components/WordCard";
import { FaGlobeAfrica } from 'react-icons/fa';

// African color palette
const colors = {
  earth: '#8B4513',        // Rich brown (African soil)
  gold: '#FFD700',         // Gold (African wealth)
  kenteGreen: '#008000',   // Green (African vegetation)
  adinkraRed: '#B22222',   // Deep red (African sunsets)
  kenteBlue: '#1E90FF',    // Bright blue (African skies)
  mudCloth: '#F5DEB3',     // Earthy beige (African textiles)
  kenteYellow: '#FFD700',  // Sun yellow
  kenteBlack: '#000000',   // Rich black
};

// Floating African globe
const FloatingGlobe = () => (
  <motion.div 
    className="absolute top-20 right-10 w-32 h-32 flex items-center justify-center z-10"
    animate={{
      y: [0, 15, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
  >
    <FaGlobeAfrica style={{ 
      width: '100%',
      height: '100%',
      color: colors.earth, 
      opacity: 0.7,
      transform: 'rotate(15deg)'
    }} />
  </motion.div>
)




// African patterns as SVGs
const AfricanPattern = () => (
  <div className="absolute inset-0 overflow-hidden opacity-5">
    <div className="absolute inset-0" style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29-22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%238B4513\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")'
    }}></div>
  </div>
);

// Mock data with more African words
// In Hero.jsx, replace the mockWords array with:

const mockWords = [
  // West African Slang
  {
    id: 1,
    wordTitle: "Wahala",
    wordDef: "Trouble or problems",
    example: "I don't have time for your wahala today.",
    origin: "Nigerian Pidgin",
    username: "user123",
    dateAdded: "2023-05-15",
    likes: 42,
    dislikes: 3,
    isLiked: false,
    isDisliked: false,
  },
  {
    id: 2,
    wordTitle: "Bomboclaat",
    wordDef: "An exclamation of surprise, frustration, or emphasis",
    example: "Bomboclaat! You scared me!",
    origin: "Jamaican Patois",
    username: "rasta_king",
    dateAdded: "2023-04-10",
    likes: 35,
    dislikes: 5,
    isLiked: false,
    isDisliked: false
  },
  {
    id: 3,
    wordTitle: "Chale",
    wordDef: "Friend or buddy",
    example: "Chale, let's go!",
    origin: "Ghanaian Pidgin",
    username: "gh_king",
    dateAdded: "2023-03-15",
    likes: 28,
    dislikes: 2,
    isLiked: false,
    isDisliked: false
  },
  {
    id: 4,
    wordTitle: "Sabi",
    wordDef: "To know or understand",
    example: "I sabi the way to the market.",
    origin: "Nigerian Pidgin",
    username: "naija_boy",
    dateAdded: "2023-02-20",
    likes: 31,
    dislikes: 1,
    isLiked: false,
    isDisliked: false
  },
  {
    id: 5,
    wordTitle: "Tua",
    wordDef: "To throw away or discard",
    example: "Just tua that old thing.",
    origin: "Ghanaian Pidgin",
    username: "gh_man",
    dateAdded: "2023-01-15",
    likes: 25,
    dislikes: 1,
    isLiked: false,
    isDisliked: false
  },
  // East African Slang
  {
    id: 6,
    wordTitle: "Mambo",
    wordDef: "What's up? (Greeting)",
    example: "Mambo vipi, rafiki yangu? (What's up, my friend?)",
    origin: "Swahili (East Africa)",
    username: "swahili_learner",
    dateAdded: "2023-03-20",
    likes: 45,
    dislikes: 2,
    isLiked: false,
    isDisliked: false
  },
  {
    id: 7,
    wordTitle: "Sawa",
    wordDef: "Okay/All right",
    example: "Sawa, nitaonana nawe kesho. (Okay, see you tomorrow)",
    origin: "Swahili (East Africa)",
    username: "kenyan_explorer",
    dateAdded: "2023-04-05",
    likes: 38,
    dislikes: 1,
    isLiked: false,
    isDisliked: false
  },
  {
    id: 8,
    wordTitle: "Mzungu",
    wordDef: "Foreigner (originally meaning someone who wanders without purpose)",
    example: "That mzungu is trying to speak Swahili!",
    origin: "East Africa",
    username: "tanzania_lover",
    dateAdded: "2023-02-18",
    likes: 52,
    dislikes: 8,
    isLiked: false,
    isDisliked: false
  },
  // North African Slang
  {
    id: 9,
    wordTitle: "Yalla",
    wordDef: "Let's go/Hurry up",
    example: "Yalla, we're going to be late!",
    origin: "Arabic (North Africa)",
    username: "cairo_dweller",
    dateAdded: "2023-05-10",
    likes: 42,
    dislikes: 1,
    isLiked: false,
    isDisliked: false
  },
  {
    id: 10,
    wordTitle: "Khalas",
    wordDef: "Enough/Stop it",
    example: "Khalas, I don't want to argue anymore.",
    origin: "Arabic (North Africa)",
    username: "maghreb_man",
    dateAdded: "2023-04-22",
    likes: 37,
    dislikes: 0,
    isLiked: false,
    isDisliked: false
  },
  {
    id: 11,
    wordTitle: "Habibi",
    wordDef: "My love/My dear (term of endearment)",
    example: "Shukran, habibi! (Thank you, my dear!)",
    origin: "Arabic (North Africa)",
    username: "desert_rose",
    dateAdded: "2023-03-15",
    likes: 68,
    dislikes: 0,
    isLiked: false,
    isDisliked: false
  }
];

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWords, setFilteredWords] = useState(mockWords);
  const [activeFilter, setActiveFilter] = useState('all');

  // Define region to country/language mappings
  const regionMappings = {
    'west': ['nigeria', 'ghana', 'senegal', 'mali', 'liberia', 'sierra leone', 
             'ivory coast', 'benin', 'togo', 'gambia', 'guinea', 'guinea-bissau', 
             'cape verde', 'naija', 'yoruba', 'igbo', 'hausa', 'akan', 'wolof'],
    'east': ['kenya', 'ethiopia', 'tanzania', 'uganda', 'rwanda', 'burundi', 
             'somalia', 'djibouti', 'eritrea', 'swahili', 'amharic', 'oromo'],
    'north': ['egypt', 'morocco', 'algeria', 'tunisia', 'libya', 'sudan', 
              'south sudan', 'mauritania', 'arabic', 'berber'],
    'south': ['south africa', 'zimbabwe', 'zambia', 'botswana', 'namibia', 
              'lesotho', 'eswatini', 'malawi', 'moçambique', 'zulu', 'xhosa', 
              'afrikaans'],
    'central': ['congo', 'dr congo', 'cameroon', 'gabon', 'chad', 'central african republic', 
                'equatorial guinea', 'sao tome and principe', 'fang', 'sango']
  };

  // Filter words based on search term and active filter
  useEffect(() => {
    let filtered = [...mockWords];
    
    // Apply search filter
    if (searchTerm.trim()) {
      const lowercasedSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(word => 
        word.wordTitle.toLowerCase().includes(lowercasedSearch) ||
        word.wordDef.toLowerCase().includes(lowercasedSearch) ||
        word.origin.toLowerCase().includes(lowercasedSearch)
      );
    }
    
    // Apply region filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(word => {
        const wordOrigin = word.origin.toLowerCase();
        const regionKeywords = regionMappings[activeFilter] || [];
        return regionKeywords.some(keyword => wordOrigin.includes(keyword));
      });
    }
    
    setFilteredWords(filtered);
  }, [searchTerm, activeFilter]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'west', name: 'West Africa' },
    { id: 'east', name: 'East Africa' },
    { id: 'north', name: 'North Africa' },
    { id: 'south', name: 'Southern Africa' },
    { id: 'central', name: 'Central Africa' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ 
      background: `linear-gradient(135deg, ${colors.mudCloth} 0%, ${colors.kenteBlue}10 100%)`
    }}>
      {/* Background elements */}
      <AfricanPattern />
      <FloatingGlobe />
      
      {/* Floating African symbols */}
      <motion.div 
        className="absolute top-20 right-10 w-32 h-32"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <img 
          src="/african-symbol-1.png" 
          alt="African Adinkra symbol"
          className="w-full h-full object-contain opacity-70"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOEI0NTEzIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4='
          }}
        />
      </motion.div>

      <div className="relative z-10">
        <NavBar />

        {/* Hero Section */}
        <div className="text-center py-12 px-4">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ color: colors.earth }}
          >
            African Urban Dictionary
          </motion.h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: colors.kenteBlack }}>
            Discover the rich tapestry of African languages, slang, and expressions
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <SearchBar 
              onSearch={handleSearch}
              placeholder="Search for words, definitions, or origins..."
            />
          </div>

          {/* Region Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
            {regions.map(region => (
              <button
                key={region.id}
                onClick={() => setActiveFilter(region.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  activeFilter === region.id 
                    ? 'text-white' 
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
                style={{
                  backgroundColor: activeFilter === region.id ? colors.earth : 'white',
                  border: `2px solid ${colors.earth}`
                }}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>

        {/* Words Grid */}
        <div className="container mx-auto px-4 pb-16 max-w-4xl">
          {filteredWords.length > 0 ? (
            <div className="space-y-6">
              {filteredWords.map((word, index) => (
                <motion.div
                  key={word.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full"
                >
                  <WordCard {...word} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl" style={{ color: colors.earth }}>
                No words found matching your search. Be the first to add one!
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="py-8 text-center" style={{ backgroundColor: colors.earth, color: 'white' }}>
          <p>© {new Date().getFullYear()} African Urban Dictionary. Celebrating the richness of African languages.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:underline">About</a>
            <span>•</span>
            <a href="#" className="hover:underline">Contribute</a>
            <span>•</span>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Hero;