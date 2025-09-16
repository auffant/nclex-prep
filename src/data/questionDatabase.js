export const questionDatabase = [
  {
    id: 1,
    category: 'pharmacology',
    difficulty: 'medium',
    question: 'A client is prescribed lisinopril 10 mg daily for hypertension. Which laboratory value should the nurse monitor most closely?',
    options: [
      'Blood glucose levels',
      'Serum potassium levels',
      'White blood cell count',
      'Liver enzymes'
    ],
    correctAnswer: 1,
    rationale: 'ACE inhibitors like lisinopril can cause hyperkalemia by reducing aldosterone production. Potassium levels should be monitored closely, especially in clients with kidney disease or those taking potassium-sparing diuretics.',
    nursingConsiderations: [
      'Monitor for signs of hyperkalemia (muscle weakness, cardiac arrhythmias)',
      'Check renal function before and during therapy',
      'Assess for dry cough (common side effect)'
    ]
  },
  {
    id: 2,
    category: 'pharmacology',
    difficulty: 'hard',
    question: 'A client receiving vancomycin IV develops flushing, pruritus, and hypotension during the infusion. What is the nurse\'s priority action?',
    options: [
      'Stop the infusion and notify the physician',
      'Slow the infusion rate and continue monitoring',
      'Administer diphenhydramine and continue infusion',
      'Check vancomycin trough levels immediately'
    ],
    correctAnswer: 0,
    rationale: 'These symptoms indicate Red Man Syndrome, a histamine-mediated reaction to rapid vancomycin infusion. The priority is to stop the infusion immediately and notify the physician. The infusion can often be restarted at a slower rate after symptoms resolve.',
    nursingConsiderations: [
      'Vancomycin should be infused over at least 60 minutes',
      'Pre-medication with antihistamines may prevent Red Man Syndrome',
      'Monitor vital signs during infusion'
    ]
  },
  {
    id: 3,
    category: 'pathophysiology',
    difficulty: 'medium',
    question: 'A client with heart failure has bilateral lower extremity edema and a weight gain of 4 pounds over 2 days. Which pathophysiologic mechanism explains these findings?',
    options: [
      'Increased cardiac output leading to fluid overload',
      'Activation of renin-angiotensin-aldosterone system',
      'Decreased blood pressure causing fluid retention',
      'Increased metabolism requiring more fluid intake'
    ],
    correctAnswer: 1,
    rationale: 'In heart failure, decreased cardiac output activates the RAAS system. This leads to sodium and water retention through aldosterone release, resulting in edema and weight gain. The body\'s attempt to maintain perfusion actually worsens the condition.',
    nursingConsiderations: [
      'Daily weights are essential for monitoring fluid status',
      'Restrict sodium and fluid intake as ordered',
      'Monitor for signs of worsening heart failure'
    ]
  },
  {
    id: 4,
    category: 'nursing-process',
    difficulty: 'easy',
    question: 'When developing a care plan for a client with COPD, which nursing diagnosis should be the highest priority?',
    options: [
      'Activity intolerance related to fatigue',
      'Ineffective airway clearance related to excessive secretions',
      'Anxiety related to difficulty breathing',
      'Knowledge deficit related to disease process'
    ],
    correctAnswer: 1,
    rationale: 'Ineffective airway clearance is the highest priority as it directly affects oxygenation, which is essential for life. Using Maslow\'s hierarchy, physiological needs take precedence over psychological and educational needs.',
    nursingConsiderations: [
      'Assess respiratory status every 4 hours',
      'Encourage coughing and deep breathing exercises',
      'Position client in high-Fowler\'s position'
    ]
  },
  {
    id: 5,
    category: 'safety',
    difficulty: 'medium',
    question: 'A client taking warfarin has an INR of 4.5. Which intervention should the nurse anticipate?',
    options: [
      'Increase the warfarin dose',
      'Continue current dose and recheck INR in 1 week',
      'Hold warfarin and administer vitamin K',
      'Switch to heparin immediately'
    ],
    correctAnswer: 2,
    rationale: 'An INR of 4.5 indicates excessive anticoagulation and increased bleeding risk. The therapeutic range is typically 2-3. Warfarin should be held and vitamin K administered to reverse the anticoagulant effect.',
    nursingConsiderations: [
      'Monitor for signs of bleeding',
      'Assess for falls risk due to bleeding potential',
      'Educate about INR monitoring importance'
    ]
  },
  {
    id: 6,
    category: 'pharmacology',
    difficulty: 'hard',
    question: 'A diabetic client\'s blood glucose is 45 mg/dL and they are conscious but confused. What is the most appropriate initial intervention?',
    options: [
      'Administer 1 mg glucagon intramuscularly',
      'Give 15 grams of fast-acting carbohydrates orally',
      'Start an IV and give 50 mL of 50% dextrose',
      'Have the client drink 8 oz of orange juice'
    ],
    correctAnswer: 1,
    rationale: 'For conscious clients with hypoglycemia, oral fast-acting carbohydrates (15g) are the first-line treatment. This includes glucose tablets, 4 oz fruit juice, or 6 oz regular soda. IV dextrose is reserved for unconscious clients.',
    nursingConsiderations: [
      'Recheck blood glucose in 15 minutes',
      'Follow 15-15 rule: 15g carbs, wait 15 minutes, recheck',
      'Investigate cause of hypoglycemia'
    ]
  },
  {
    id: 7,
    category: 'pathophysiology',
    difficulty: 'hard',
    question: 'A client presents with sudden onset of severe chest pain, diaphoresis, and nausea. ECG shows ST elevation in leads II, III, and aVF. Which coronary vessel is most likely occluded?',
    options: [
      'Left anterior descending artery',
      'Left circumflex artery',
      'Right coronary artery',
      'Left main coronary artery'
    ],
    correctAnswer: 2,
    rationale: 'ST elevation in leads II, III, and aVF indicates an inferior MI, which is typically caused by occlusion of the right coronary artery (RCA). The RCA supplies the inferior wall of the left ventricle and the posterior wall.',
    nursingConsiderations: [
      'Monitor for heart blocks (common with inferior MI)',
      'Assess for signs of right heart failure',
      'Prepare for possible cardiac catheterization'
    ]
  },
  {
    id: 8,
    category: 'nursing-process',
    difficulty: 'medium',
    question: 'A postoperative client has not voided in 8 hours and reports lower abdominal discomfort. The nurse palpates a distended bladder. What is the priority nursing intervention?',
    options: [
      'Encourage increased fluid intake',
      'Apply warm compress to lower abdomen',
      'Perform bladder scan to assess residual volume',
      'Insert indwelling urinary catheter immediately'
    ],
    correctAnswer: 2,
    rationale: 'A bladder scan should be performed first to objectively assess the volume of urine in the bladder. This non-invasive assessment will guide further interventions and help determine if catheterization is necessary.',
    nursingConsiderations: [
      'Normal bladder capacity is 400-600 mL',
      'Catherization may be needed if >400-500 mL retained',
      'Assess for other causes of urinary retention'
    ]
  },
  {
    id: 9,
    category: 'safety',
    difficulty: 'easy',
    question: 'A client is prescribed oxygen at 2 L/min via nasal cannula for COPD. The client asks why they cannot have more oxygen. What is the best nursing response?',
    options: [
      'More oxygen would be too drying to your nasal passages',
      'Your insurance only covers oxygen at this flow rate',
      'Higher oxygen levels could suppress your drive to breathe',
      'This amount is sufficient to meet your body\'s needs'
    ],
    correctAnswer: 2,
    rationale: 'Clients with COPD may have chronic CO2 retention and rely on hypoxic drive for breathing. High-flow oxygen can suppress this drive, leading to respiratory depression. Low-flow oxygen (1-3 L/min) is typically safe.',
    nursingConsiderations: [
      'Monitor oxygen saturation and respiratory rate',
      'Target SpO2 88-92% for COPD clients',
      'Assess for signs of CO2 retention'
    ]
  },
  {
    id: 10,
    category: 'pharmacology',
    difficulty: 'medium',
    question: 'A client taking furosemide reports muscle cramps and weakness. Which electrolyte imbalance should the nurse suspect?',
    options: [
      'Hypernatremia',
      'Hypokalemia',
      'Hypercalcemia',
      'Hypermagnesemia'
    ],
    correctAnswer: 1,
    rationale: 'Furosemide is a loop diuretic that causes potassium loss through increased urinary excretion. Hypokalemia manifests as muscle weakness, cramps, fatigue, and potentially dangerous cardiac arrhythmias.',
    nursingConsiderations: [
      'Monitor serum potassium levels regularly',
      'Encourage potassium-rich foods',
      'May need potassium supplementation'
    ]
  }
];