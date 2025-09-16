import React from 'react';
import { TrendingUp, Target, BookOpen, Award, Calendar, AlertCircle } from 'lucide-react';

const ProgressTracker = ({ userProgress, setActiveTab }) => {
  const accuracyRate = userProgress.totalQuestions > 0 
    ? Math.round((userProgress.correctAnswers / userProgress.totalQuestions) * 100)
    : 0;

  const stats = [
    {
      name: 'Study Streak',
      value: userProgress.studyStreak,
      unit: 'days',
      icon: Calendar,
      color: 'text-orange-600 bg-orange-100'
    },
    {
      name: 'Questions Answered',
      value: userProgress.totalQuestions,
      unit: 'total',
      icon: Target,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      name: 'Accuracy Rate',
      value: accuracyRate,
      unit: '%',
      icon: Award,
      color: 'text-green-600 bg-green-100'
    },
    {
      name: 'Cards Studied',
      value: userProgress.totalStudied,
      unit: 'cards',
      icon: BookOpen,
      color: 'text-purple-600 bg-purple-100'
    }
  ];

  const quickActions = [
    {
      title: 'Practice Questions',
      description: 'NCLEX-style questions with rationales',
      action: () => setActiveTab('questions'),
      color: 'bg-blue-500 hover:bg-blue-600',
      icon: Target
    },
    {
      title: 'Study Drug Cards',
      description: 'High-yield pharmacology flashcards',
      action: () => setActiveTab('drugs'),
      color: 'bg-green-500 hover:bg-green-600',
      icon: BookOpen
    },
    {
      title: 'Pathophysiology',
      description: 'Visual concept maps and processes',
      action: () => setActiveTab('pathophysiology'),
      color: 'bg-purple-500 hover:bg-purple-600',
      icon: BookOpen
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h2>
        <p className="text-gray-600">Track your NCLEX preparation progress</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {stat.value}
                    <span className="text-sm font-normal text-gray-500 ml-1">{stat.unit}</span>
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Weak Areas Alert */}
      {userProgress.weakAreas.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 mr-3" />
            <div>
              <h3 className="text-sm font-semibold text-amber-800 mb-2">Areas for Improvement</h3>
              <div className="flex flex-wrap gap-2">
                {userProgress.weakAreas.map((area, index) => (
                  <span key={index} className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                onClick={action.action}
                className={`${action.color} text-white p-6 rounded-xl shadow-sm transition-colors duration-200 text-left`}
              >
                <Icon className="h-8 w-8 mb-3" />
                <h4 className="text-lg font-semibold mb-2">{action.title}</h4>
                <p className="text-sm opacity-90">{action.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Progress Chart Placeholder */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Progress</h3>
        <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Progress chart visualization coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;