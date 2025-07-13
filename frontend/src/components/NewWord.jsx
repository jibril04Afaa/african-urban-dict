import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPlus, FaGlobeAfrica } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Reuse the same colors from Hero
const colors = {
  earth: '#8B4513',
  gold: '#FFD700',
  kenteGreen: '#008000',
  adinkraRed: '#B22222',
  kenteBlue: '#1E90FF',
  mudCloth: '#F5DEB3',
};

const NewWord = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    word: '',
    origin: 'West Africa',
    username: '',
    definition: '',
    example: ''
  });

  const africanRegions = [
    'West Africa', 'East Africa', 'North Africa', 
    'Southern Africa', 'Central Africa'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/');
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ 
      background: `linear-gradient(135deg, ${colors.mudCloth} 0%, ${colors.kenteBlue}10 100%)`
    }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <FaGlobeAfrica className="w-full h-full" style={{ 
          color: colors.earth,
          transform: 'scale(1.5) rotate(15deg)',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }} />
      </div>

      <div className="relative z-10">
        <div className="max-w-2xl mx-auto p-4">
          <motion.div 
            className="bg-white rounded-xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              border: `3px solid ${colors.earth}`,
              boxShadow: `0 10px 25px -5px ${colors.earth}40`
            }}
          >
            {/* Header */}
            <div 
              className="p-6 text-center relative overflow-hidden"
              style={{
                background: `linear-gradient(90deg, ${colors.earth}, ${colors.adinkraRed})`,
                color: 'white'
              }}
            >
              <button 
                onClick={() => navigate(-1)} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-black/20 transition-all"
              >
                <FaArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-2xl font-bold">Add New Word</h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-6">
                {/* Word Input */}
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: colors.earth }}>
                    WORD <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="word"
                    value={formData.word}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-offset-2 transition-all"
                    style={{ 
                      borderColor: colors.earth,
                      backgroundColor: `${colors.mudCloth}20`,
                      '--tw-ring-color': colors.gold
                    }}
                    required
                  />
                </div>

                {/* Region Select */}
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: colors.earth }}>
                    REGION <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-offset-2 transition-all appearance-none"
                    style={{ 
                      borderColor: colors.earth,
                      backgroundColor: `${colors.mudCloth}20`,
                      '--tw-ring-color': colors.gold
                    }}
                    required
                  >
                    {africanRegions.map(region => (
                      <option key={region} value={region}>{region}</option>
                    ))}
                  </select>
                </div>

                {/* Username */}
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: colors.earth }}>
                    YOUR NAME <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-offset-2 transition-all"
                    style={{ 
                      borderColor: colors.earth,
                      backgroundColor: `${colors.mudCloth}20`,
                      '--tw-ring-color': colors.gold
                    }}
                    required
                  />
                </div>

                {/* Definition */}
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: colors.earth }}>
                    DEFINITION <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="definition"
                    value={formData.definition}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-offset-2 transition-all"
                    style={{ 
                      borderColor: colors.earth,
                      backgroundColor: `${colors.mudCloth}20`,
                      '--tw-ring-color': colors.gold
                    }}
                    required
                  ></textarea>
                </div>

                {/* Example */}
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: colors.earth }}>
                    EXAMPLE USAGE <span className="text-sm font-normal">(optional)</span>
                  </label>
                  <textarea
                    name="example"
                    value={formData.example}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-offset-2 transition-all"
                    style={{ 
                      borderColor: colors.earth,
                      backgroundColor: `${colors.mudCloth}20`,
                      '--tw-ring-color': colors.gold
                    }}
                  ></textarea>
                </div>

                {/* Buttons */}
                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="px-6 py-2 rounded-lg font-bold transition-all"
                    style={{ 
                      border: `2px solid ${colors.earth}`,
                      color: colors.earth,
                      backgroundColor: 'white'
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-lg font-bold text-white transition-all flex items-center"
                    style={{ 
                      background: `linear-gradient(45deg, ${colors.earth}, ${colors.adinkraRed})`,
                      boxShadow: `0 4px 6px ${colors.earth}40`
                    }}
                  >
                    <FaPlus className="mr-2" />
                    ADD WORD
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Footer */}
          <div className="mt-8 text-center text-sm" style={{ color: colors.earth }}>
            <p>Share your knowledge of African languages and slang with the community!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewWord;