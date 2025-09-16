import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Target, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';

const StudyPlan = ({ userProgress }) => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [completedTasks, setCompletedTasks] = useState(new Set());

  useEffect(() => {
    const saved = localStorage.getItem('completedStudyTasks');
    if (saved) {
      setCompletedTasks(new Set(JSON.parse(saved)));
    }
  }, []);

  const toggleTaskCompletion = (taskId) => {
    const newCompletedTasks = new Set(completedTasks);
    if (newCompletedTasks.has(taskId)) {
      newCompletedTasks.delete(taskId);
    } else {
      newCompletedTasks.add(taskId);
    }
    setCompletedTasks(newCompletedTasks);
    localStorage.setItem('completedStudyTasks', JSON.stringify([...newCompletedTasks]));
  };

  const studyPlan = {
    1: {
      title: 'Foundation Week - Cardiovascular System',
      focus: 'Build understanding of cardiac anatomy, physiology, and common medications',
      tasks: [
        {
          id: 'w1t1',
          day: 'Monday',
          type: 'Drug Cards',
          task: 'Study ACE inhibitors and Beta blockers (5 cards)',
          duration: '30 min',
          priority: 'high'
        },
        {
          id: 'w1t2',
          day: 'Tuesday',
          type: 'Questions',
          task: 'Complete 10 cardiovascular pharmacology questions',
          duration: '20 min',
          priority: 'high'
        },
        {
          id: 'w1t3',
          day: 'Wednesday',
          type: 'Pathophysiology',
          task: 'Review Heart Failure pathophysiology map',
          duration: '25 min',
          priority: 'medium'
        },
        {
          id: 'w1t4',
          day: 'Thursday',
          type: 'Drug Cards',
          task: 'Study Diuretics and Anticoagulants (4 cards)',
          duration: '30 min',
          priority: 'high'
        },
        {
          id: 'w1t5',
          day: 'Friday',
          type: 'Questions',
          task: 'Mixed cardiovascular questions (15 questions)',
          duration: '30 min',
          priority: 'medium'
        },
        {
          id: 'w1t6',
          day: 'Saturday',
          type: 'Review',
          task: 'Review all studied cards and weak areas',
          duration: '45 min',
          priority: 'low'
        }
      ]
    },
    2: {
      title: 'Week 2 - Respiratory & Infection Control',
      focus: 'Master respiratory medications and antibiotic therapy',
      tasks: [
        {
          id: 'w2t1',
          day: 'Monday',
          type: 'Drug Cards',
          task: 'Study Bronchodilators and Corticosteroids (4 cards)',
          duration: '30 min',
          priority: 'high'
        },
        {
          id: 'w2t2',
          day: 'Tuesday',
          type: 'Pathophysiology',
          task: 'Review COPD and Pneumonia pathways',
          duration: '35 min',
          priority: 'high'
        },
        {
          id: 'w2t3',
          day: 'Wednesday',
          type: 'Drug Cards',
          task: 'Study Antibiotics: Penicillins and Cephalosporins (3 cards)',
          duration: '25 min',
          priority: 'high'
        },
        {
          id: 'w2t4',
          day: 'Thursday',
          type: 'Questions',
          task: 'Respiratory and antibiotic questions (12 questions)',
          duration: '25 min',
          priority: 'medium'
        },
        {
          id: 'w2t5',
          day: 'Friday',
          type: 'Drug Cards',
          task: 'Study Advanced Antibiotics: Vancomycin, Quinolones (3 cards)',
          duration: '30 min',
          priority: 'medium'
        },
        {
          id: 'w2t6',
          day: 'Saturday',
          type: 'Assessment',
          task: 'Comprehensive respiratory/infection quiz (20 questions)',
          duration: '40 min',
          priority: 'low'
        }
      ]
    },
    3: {
      title: 'Week 3 - Endocrine & Psychiatric Medications',
      focus: 'Understand diabetes management and mental health medications',
      tasks: [
        {
          id: 'w3t1',
          day: 'Monday',
          type: 'Drug Cards',
          task: 'Study Insulin types and Oral hypoglycemics (4 cards)',
          duration: '35 min',
          priority: 'high'
        },
        {
          id: 'w3t2',
          day: 'Tuesday',
          type: 'Questions',
          task: 'Diabetes management questions (10 questions)',
          duration: '20 min',
          priority: 'high'
        },
        {
          id: 'w3t3',
          day: 'Wednesday',
          type: 'Drug Cards',
          task: 'Study Antidepressants: SSRIs and SNRIs (3 cards)',
          duration: '25 min',
          priority: 'medium'
        },
        {
          id: 'w3t4',
          day: 'Thursday',
          type: 'Drug Cards',
          task: 'Study Anxiolytics and Antipsychotics (3 cards)',
          duration: '30 min',
          priority: 'medium'
        },
        {
          id: 'w3t5',
          day: 'Friday',
          type: 'Questions',
          task: 'Endocrine and psychiatric questions (15 questions)',
          duration: '30 min',
          priority: 'medium'
        },
        {
          id: 'w3t6',
          day: 'Saturday',
          type: 'Review',
          task: 'Review all weak areas and challenging concepts',
          duration: '50 min',
          priority: 'low'
        }
      ]
    },
    4: {
      title: 'Week 4 - Integration & NCLEX Prep',
      focus: 'Combine all knowledge and practice NCLEX-style questions',
      tasks: [
        {
          id: 'w4t1',
          day: 'Monday',
          type: 'Questions',
          task: 'Mixed pharmacology questions (20 questions)',
          duration: '40 min',
          priority: 'high'
        },
        {
          id: 'w4t2',
          day: 'Tuesday',
          type: 'Pathophysiology',
          task: 'Review all pathophysiology maps',
          duration: '45 min',
          priority: 'high'
        },
        {
          id: 'w4t3',
          day: 'Wednesday',
          type: 'Questions',
          task: 'NCLEX-style comprehensive exam (25 questions)',
          duration: '50 min',
          priority: 'high'
        },
        {
          id: 'w4t4',
          day: 'Thursday',
          type: 'Review',
          task: 'Focus on identified weak areas',
          duration: '60 min',
          priority: 'medium'
        },
        {
          id: 'w4t5',
          day: 'Friday',
          type: 'Questions',
          task: 'Final practice exam (30 questions)',
          duration: '60 min',
          priority: 'high'
        },
        {
          id: 'w4t6',
          day: 'Saturday',
          type: 'Assessment',
          task: 'Self-assessment and exam readiness evaluation',
          duration: '30 min',
          priority: 'low'
        }
      ]
    }
  };

  const currentWeekData = studyPlan[selectedWeek];
  const completedCount = currentWeekData.tasks.filter(task => completedTasks.has(task.id)).length;
  const progressPercent = Math.round((completedCount / currentWeekData.tasks.length) * 100);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTaskTypeIcon = (type) => {
    switch (type) {
      case 'Drug Cards': return '💊';
      case 'Questions': return '❓';
      case 'Pathophysiology': return '🧠';
      case 'Review': return '📚';
      case 'Assessment': return '📊';
      default: return '📝';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Study Plan</h2>
        <p className="text-gray-600">Structured 4-week preparation program</p>
      </div>

      {/* Week Selection */}
      <div className="flex flex-wrap gap-3">
        {[1, 2, 3, 4].map((week) => (
          <button
            key={week}
            onClick={() => setSelectedWeek(week)}
            className={`px-6 py-3 rounded-lg transition-colors ${
              selectedWeek === week
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Week {week}
          </button>
        ))}
      </div>

      {/* Week Overview */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{currentWeekData.title}</h3>
            <p className="text-gray-600">{currentWeekData.focus}</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{progressPercent}%</div>
              <div className="text-sm text-gray-500">Complete</div>
            </div>
            <div className="w-16 h-16 relative">
              <svg className="w-16 h-16 transform -rotate-90">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                  className="text-gray-200"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 28}`}
                  strokeDashoffset={`${2 * Math.PI * 28 * (1 - progressPercent / 100)}`}
                  className="text-blue-600 transition-all duration-300"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Week Progress</span>
            <span className="text-sm text-gray-500">{completedCount}/{currentWeekData.tasks.length} tasks</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Tasks */}
        <div className="space-y-4">
          {currentWeekData.tasks.map((task) => (
            <div
              key={task.id}
              className={`p-4 rounded-lg border transition-all ${
                completedTasks.has(task.id)
                  ? 'bg-green-50 border-green-200'
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start gap-4">
                <button
                  onClick={() => toggleTaskCompletion(task.id)}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    completedTasks.has(task.id)
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {completedTasks.has(task.id) && <CheckCircle className="h-4 w-4" />}
                </button>
                
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getTaskTypeIcon(task.type)}</span>
                      <div>
                        <h4 className={`font-medium ${completedTasks.has(task.id) ? 'text-green-800' : 'text-gray-900'}`}>
                          {task.day} - {task.type}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          {task.duration}
                        </div>
                      </div>
                    </div>
                    
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                      {task.priority} priority
                    </span>
                  </div>
                  
                  <p className={`text-sm ${completedTasks.has(task.id) ? 'text-green-700' : 'text-gray-600'}`}>
                    {task.task}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Study Tips */}
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Study Tips for Week {selectedWeek}
        </h4>
        <div className="space-y-2 text-blue-800">
          {selectedWeek === 1 && (
            <>
              <p>• Focus on understanding mechanisms of action rather than memorizing</p>
              <p>• Create mental connections between drug classes and their effects</p>
              <p>• Use mnemonics for side effects (e.g., ACE inhibitors = "A Cough Ensues")</p>
            </>
          )}
          {selectedWeek === 2 && (
            <>
              <p>• Visualize pathophysiology processes to better understand drug interventions</p>
              <p>• Pay special attention to antibiotic spectrum and resistance patterns</p>
              <p>• Practice identifying respiratory assessment findings</p>
            </>
          )}
          {selectedWeek === 3 && (
            <>
              <p>• Connect endocrine disorders with their medication management</p>
              <p>• Understand the importance of monitoring in psychiatric medications</p>
              <p>• Focus on patient education for chronic conditions</p>
            </>
          )}
          {selectedWeek === 4 && (
            <>
              <p>• Practice time management for NCLEX-style questions</p>
              <p>• Focus on your weakest areas identified in previous weeks</p>
              <p>• Review nursing considerations and patient safety priorities</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyPlan;