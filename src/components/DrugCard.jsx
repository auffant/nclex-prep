import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, CheckCircle, AlertTriangle, Pill } from 'lucide-react';
import { drugDatabase } from '../data/drugDatabase';

const DrugCard = ({ updateProgress }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studiedCards, setStudiedCards] = useState(new Set());
  const [currentCategory, setCurrentCategory] = useState('all');

  const categories = ['all', 'cardiovascular', 'antibiotics', 'psychiatric', 'endocrine', 'respiratory'];
  
  const filteredDrugs = currentCategory === 'all' 
    ? drugDatabase 
    : drugDatabase.filter(drug => drug.category === currentCategory);

  const currentDrug = filteredDrugs[currentCardIndex];

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped && !studiedCards.has(currentDrug.id)) {
      const newStudiedCards = new Set([...studiedCards, currentDrug.id]);
      setStudiedCards(newStudiedCards);
      updateProgress({ totalStudied: newStudiedCards.size });
    }
  };

  const nextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % filteredDrugs.length);
    setIsFlipped(false);
  };

  const prevCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + filteredDrugs.length) % filteredDrugs.length);
    setIsFlipped(false);
  };

  const resetProgress = () => {
    setStudiedCards(new Set());
    setCurrentCardIndex(0);
    setIsFlipped(false);
    updateProgress({ totalStudied: 0 });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Drug Cards</h2>
          <p className="text-gray-600">Master high-yield pharmacology concepts</p>
        </div>
        
        <div className="flex items-center gap-3">
          <select
            value={currentCategory}
            onChange={(e) => {
              setCurrentCategory(e.target.value);
              setCurrentCardIndex(0);
              setIsFlipped(false);
            }}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
          
          <button
            onClick={resetProgress}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm text-gray-500">{studiedCards.size}/{filteredDrugs.length} studied</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(studiedCards.size / filteredDrugs.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Drug Card */}
      <div className="relative">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 min-h-[400px]">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${currentDrug.urgency === 'high' ? 'bg-red-100 text-red-600' : currentDrug.urgency === 'medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
                  <Pill className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{currentDrug.category}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{currentDrug.name}</h3>
                  <p className="text-gray-600">{currentDrug.generic}</p>
                </div>
              </div>
              
              {studiedCards.has(currentDrug.id) && (
                <CheckCircle className="h-6 w-6 text-green-500" />
              )}
            </div>

            <div
              className="cursor-pointer"
              onClick={handleCardFlip}
            >
              {!isFlipped ? (
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Classification</h4>
                    <p className="text-blue-800">{currentDrug.classification}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Primary Indication</h4>
                    <p className="text-gray-800">{currentDrug.indication}</p>
                  </div>
                  
                  <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <p className="text-gray-500">Click to reveal mechanism of action & key points</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Mechanism of Action</h4>
                    <p className="text-green-800">{currentDrug.mechanism}</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Key Nursing Considerations</h4>
                    <ul className="list-disc list-inside text-purple-800 space-y-1">
                      {currentDrug.nursingConsiderations.map((consideration, index) => (
                        <li key={index}>{consideration}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {currentDrug.sideEffects.length > 0 && (
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-red-900 mb-2">Common Side Effects</h4>
                          <div className="flex flex-wrap gap-2">
                            {currentDrug.sideEffects.map((effect, index) => (
                              <span key={index} className="px-2 py-1 bg-red-100 text-red-700 text-sm rounded-full">
                                {effect}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={prevCard}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>
          
          <span className="text-sm text-gray-500">
            {currentCardIndex + 1} of {filteredDrugs.length}
          </span>
          
          <button
            onClick={nextCard}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrugCard;