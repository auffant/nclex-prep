import React, { useState, useEffect } from 'react';
import { BookOpen, Brain, Target, TrendingUp, Menu, X } from 'lucide-react';
import DrugCard from './components/DrugCard';
import PathophysiologyMap from './components/PathophysiologyMap';
import QuestionBank from './components/QuestionBank';
import ProgressTracker from './components/ProgressTracker';
import StudyPlan from './components/StudyPlan';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userProgress, setUserProgress] = useState({
    totalStudied: 0,
    correctAnswers: 0,
    totalQuestions: 0,
    weakAreas: [],
    studyStreak: 0
  });

  useEffect(() => {
    const savedProgress = localStorage.getItem('nclexProgress');
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);

  const updateProgress = (newData) => {
    const updatedProgress = { ...userProgress, ...newData };
    setUserProgress(updatedProgress);
    localStorage.setItem('nclexProgress', JSON.stringify(updatedProgress));
  };

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: TrendingUp },
    { id: 'drugs', name: 'Drug Cards', icon: BookOpen },
    { id: 'pathophysiology', name: 'Pathophysiology', icon: Brain },
    { id: 'questions', name: 'Practice Questions', icon: Target },
    { id: 'study-plan', name: 'Study Plan', icon: BookOpen }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'drugs':
        return <DrugCard updateProgress={updateProgress} />;
      case 'pathophysiology':
        return <PathophysiologyMap updateProgress={updateProgress} />;
      case 'questions':
        return <QuestionBank updateProgress={updateProgress} userProgress={userProgress} />;
      case 'study-plan':
        return <StudyPlan userProgress={userProgress} />;
      default:
        return <ProgressTracker userProgress={userProgress} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-blue-600">NCLEX Prep</h1>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="mt-6 px-3">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center px-3 py-2 mb-2 text-left rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.name}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 lg:hidden">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-600"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900">NCLEX Prep</h1>
            <div className="w-10"></div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;