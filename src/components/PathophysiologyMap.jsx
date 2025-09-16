import React, { useState } from 'react';
import { Brain, Heart, Lungs, Zap, Eye, ArrowRight } from 'lucide-react';

const PathophysiologyMap = ({ updateProgress }) => {
  const [selectedSystem, setSelectedSystem] = useState('cardiovascular');
  const [selectedCondition, setSelectedCondition] = useState(null);

  const systems = {
    cardiovascular: {
      name: 'Cardiovascular',
      icon: Heart,
      color: 'bg-red-500',
      conditions: [
        {
          name: 'Heart Failure',
          stages: [
            { title: 'Initial Insult', description: 'MI, HTN, valve disease causes decreased CO' },
            { title: 'Compensation', description: 'SNS activation, RAAS activation, ventricular remodeling' },
            { title: 'Decompensation', description: 'Fluid retention, pulmonary/peripheral edema' },
            { title: 'End Stage', description: 'Organ dysfunction, cardiogenic shock' }
          ]
        },
        {
          name: 'Myocardial Infarction',
          stages: [
            { title: 'Ischemia', description: 'Decreased oxygen supply to myocardium' },
            { title: 'Injury', description: 'Reversible cell damage, ST elevation' },
            { title: 'Infarction', description: 'Irreversible cell death, Q waves' },
            { title: 'Healing', description: 'Scar tissue formation, remodeling' }
          ]
        }
      ]
    },
    respiratory: {
      name: 'Respiratory',
      icon: Lungs,
      color: 'bg-blue-500',
      conditions: [
        {
          name: 'COPD',
          stages: [
            { title: 'Irritant Exposure', description: 'Smoking, pollution causes airway inflammation' },
            { title: 'Chronic Inflammation', description: 'Bronchial wall thickening, mucus hypersecretion' },
            { title: 'Airway Obstruction', description: 'Decreased FEV1, air trapping' },
            { title: 'Gas Exchange Impairment', description: 'Hypoxemia, hypercapnia, cor pulmonale' }
          ]
        },
        {
          name: 'Pneumonia',
          stages: [
            { title: 'Pathogen Entry', description: 'Bacteria/virus enters alveolar space' },
            { title: 'Inflammatory Response', description: 'WBC migration, capillary leak' },
            { title: 'Consolidation', description: 'Alveolar filling with inflammatory exudate' },
            { title: 'Resolution', description: 'Macrophage clearance, tissue repair' }
          ]
        }
      ]
    },
    neurological: {
      name: 'Neurological',
      icon: Brain,
      color: 'bg-purple-500',
      conditions: [
        {
          name: 'Stroke',
          stages: [
            { title: 'Vessel Occlusion', description: 'Thrombus/embolus blocks cerebral artery' },
            { title: 'Ischemic Cascade', description: 'ATP depletion, calcium influx, cell death' },
            { title: 'Penumbra Formation', description: 'Surrounding tissue at risk' },
            { title: 'Reperfusion Injury', description: 'Free radical damage upon restoration' }
          ]
        }
      ]
    }
  };

  const currentSystem = systems[selectedSystem];
  const currentCondition = selectedCondition 
    ? currentSystem.conditions.find(c => c.name === selectedCondition)
    : currentSystem.conditions[0];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Pathophysiology Maps</h2>
        <p className="text-gray-600">Visualize disease processes step by step</p>
      </div>

      {/* System Selection */}
      <div className="flex flex-wrap gap-3">
        {Object.entries(systems).map(([key, system]) => {
          const Icon = system.icon;
          return (
            <button
              key={key}
              onClick={() => {
                setSelectedSystem(key);
                setSelectedCondition(null);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                selectedSystem === key
                  ? `${system.color} text-white`
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="h-5 w-5" />
              {system.name}
            </button>
          );
        })}
      </div>

      {/* Condition Selection */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Condition</h3>
        <div className="flex flex-wrap gap-2">
          {currentSystem.conditions.map((condition, index) => (
            <button
              key={index}
              onClick={() => setSelectedCondition(condition.name)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCondition === condition.name
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {condition.name}
            </button>
          ))}
        </div>
      </div>

      {/* Pathophysiology Flow */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">{currentCondition.name} Pathophysiology</h3>
        
        <div className="space-y-6">
          {currentCondition.stages.map((stage, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Stage Number */}
              <div className={`flex-shrink-0 w-12 h-12 ${currentSystem.color} text-white rounded-full flex items-center justify-center font-bold text-lg`}>
                {index + 1}
              </div>
              
              {/* Stage Content */}
              <div className="flex-grow">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">{stage.title}</h4>
                  <p className="text-gray-700">{stage.description}</p>
                </div>
              </div>
              
              {/* Arrow */}
              {index < currentCondition.stages.length - 1 && (
                <div className="flex-shrink-0 mt-6">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Clinical Manifestations */}
        <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Clinical Manifestations to Watch For
          </h4>
          <div className="text-yellow-700">
            {currentCondition.name === 'Heart Failure' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <span>• Dyspnea, orthopnea</span>
                <span>• Peripheral edema</span>
                <span>• Fatigue, weakness</span>
                <span>• S3 gallop</span>
                <span>• JVD, hepatomegaly</span>
                <span>• Weight gain</span>
              </div>
            )}
            {currentCondition.name === 'Myocardial Infarction' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <span>• Chest pain (crushing)</span>
                <span>• Diaphoresis</span>
                <span>• Nausea, vomiting</span>
                <span>• SOB</span>
                <span>• ECG changes</span>
                <span>• Elevated cardiac enzymes</span>
              </div>
            )}
            {currentCondition.name === 'COPD' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <span>• Chronic cough</span>
                <span>• Sputum production</span>
                <span>• Dyspnea on exertion</span>
                <span>• Barrel chest</span>
                <span>• Prolonged expiration</span>
                <span>• Cyanosis</span>
              </div>
            )}
            {currentCondition.name === 'Stroke' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <span>• Sudden weakness</span>
                <span>• Facial drooping</span>
                <span>• Speech difficulties</span>
                <span>• Vision changes</span>
                <span>• Severe headache</span>
                <span>• Confusion</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathophysiologyMap;