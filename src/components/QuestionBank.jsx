import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, RotateCcw, Target, Book } from 'lucide-react';
import { questionDatabase } from '../data/questionDatabase';

const QuestionBank = ({ updateProgress, userProgress }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showRationale, setShowRationale] = useState(false);
  const [sessionStats, setSessionStats] = useState({ correct: 0, total: 0 });
  const [category, setCategory] = useState('all');

  const categories = ['all', 'pharmacology', 'pathophysiology', 'nursing-process', 'safety'];

  const filteredQuestions = category === 'all' 
    ? questionDatabase 
    : questionDatabase.filter(q => q.category === category);

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowRationale(true);
    
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    const newSessionStats = {
      correct: sessionStats.correct + (isCorrect ? 1 : 0),
      total: sessionStats.total + 1
    };
    setSessionStats(newSessionStats);
    
    // Update global progress
    const newTotalQuestions = userProgress.totalQuestions + 1;
    const newCorrectAnswers = userProgress.correctAnswers + (isCorrect ? 1 : 0);
    
    // Track weak areas
    let weakAreas = [...userProgress.weakAreas];
    if (!isCorrect && !weakAreas.includes(currentQuestion.category)) {
      weakAreas.push(currentQuestion.category);
    }
    
    updateProgress({
      totalQuestions: newTotalQuestions,
      correctAnswers: newCorrectAnswers,
      weakAreas: weakAreas
    });
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % filteredQuestions.length);
    setSelectedAnswer(null);
    setShowRationale(false);
  };

  const resetSession = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowRationale(false);
    setSessionStats({ correct: 0, total: 0 });
  };

  const getAnswerClassName = (answerIndex) => {
    if (selectedAnswer === null) {
      return 'border-gray-300 hover:border-blue-300 hover:bg-blue-50';
    }
    
    if (answerIndex === currentQuestion.correctAnswer) {
      return 'border-green-500 bg-green-50 text-green-800';
    }
    
    if (answerIndex === selectedAnswer && answerIndex !== currentQuestion.correctAnswer) {
      return 'border-red-500 bg-red-50 text-red-800';
    }
    
    return 'border-gray-300 bg-gray-50 text-gray-600';
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Practice Questions</h2>
          <p className="text-gray-600">NCLEX-style questions with detailed rationales</p>
        </div>
        
        <div className="flex items-center gap-3">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCurrentQuestionIndex(0);
              setSelectedAnswer(null);
              setShowRationale(false);
            }}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
              </option>
            ))}
          </select>
          
          <button
            onClick={resetSession}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
        </div>
      </div>

      {/* Session Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Session Progress</span>
          </div>
          <p className="text-2xl font-bold text-blue-900 mt-1">
            {currentQuestionIndex + 1}/{filteredQuestions.length}
          </p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-green-600">Session Accuracy</span>
          </div>
          <p className="text-2xl font-bold text-green-900 mt-1">
            {sessionStats.total > 0 ? Math.round((sessionStats.correct / sessionStats.total) * 100) : 0}%
          </p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <div className="flex items-center gap-2">
            <Book className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Overall Accuracy</span>
          </div>
          <p className="text-2xl font-bold text-purple-900 mt-1">
            {userProgress.totalQuestions > 0 ? Math.round((userProgress.correctAnswers / userProgress.totalQuestions) * 100) : 0}%
          </p>
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              {currentQuestion.category.replace('-', ' ')}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              currentQuestion.difficulty === 'hard' ? 'bg-red-100 text-red-700' :
              currentQuestion.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
              'bg-green-100 text-green-700'
            }`}>
              {currentQuestion.difficulty}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 leading-relaxed">
            {currentQuestion.question}
          </h3>
        </div>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
              className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${getAnswerClassName(index)}`}
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 text-gray-700 text-sm font-medium flex items-center justify-center">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-grow">{option}</span>
                {selectedAnswer !== null && index === currentQuestion.correctAnswer && (
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-600" />
                )}
                {selectedAnswer === index && index !== currentQuestion.correctAnswer && (
                  <XCircle className="flex-shrink-0 h-5 w-5 text-red-600" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Rationale */}
        {showRationale && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Rationale:</h4>
            <p className="text-gray-700 mb-4">{currentQuestion.rationale}</p>
            
            {currentQuestion.nursingConsiderations && (
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Key Nursing Considerations:</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {currentQuestion.nursingConsiderations.map((consideration, index) => (
                    <li key={index}>{consideration}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Question {currentQuestionIndex + 1} of {filteredQuestions.length}
          </div>
          
          {showRationale && (
            <button
              onClick={nextQuestion}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Next Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionBank;