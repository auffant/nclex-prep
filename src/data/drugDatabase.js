export const drugDatabase = [
  {
    id: 1,
    name: "Lisinopril",
    generic: "ACE Inhibitor",
    category: "cardiovascular",
    classification: "Angiotensin-Converting Enzyme Inhibitor",
    indication: "Hypertension, Heart Failure, Post-MI",
    mechanism: "Inhibits ACE enzyme, reducing conversion of angiotensin I to angiotensin II, leading to vasodilation and decreased aldosterone release",
    nursingConsiderations: [
      "Monitor blood pressure and heart rate",
      "Check for hyperkalemia (K+ > 5.0)",
      "Assess for dry cough (common side effect)",
      "Monitor renal function (BUN/Creatinine)"
    ],
    sideEffects: ["Dry cough", "Hyperkalemia", "Hypotension", "Angioedema"],
    urgency: "high"
  },
  {
    id: 2,
    name: "Metoprolol",
    generic: "Beta Blocker",
    category: "cardiovascular",
    classification: "Selective Beta-1 Adrenergic Blocker",
    indication: "Hypertension, Angina, Heart Failure, Arrhythmias",
    mechanism: "Selectively blocks beta-1 receptors in the heart, reducing heart rate, contractility, and conduction velocity",
    nursingConsiderations: [
      "Monitor heart rate (hold if < 60 bpm)",
      "Check blood pressure before administration",
      "Do not discontinue abruptly (risk of rebound hypertension)",
      "Monitor for signs of heart failure"
    ],
    sideEffects: ["Bradycardia", "Hypotension", "Fatigue", "Depression"],
    urgency: "high"
  },
  {
    id: 3,
    name: "Vancomycin",
    generic: "Glycopeptide Antibiotic",
    category: "antibiotics",
    classification: "Glycopeptide Antibiotic",
    indication: "MRSA infections, C. diff colitis (PO), Severe gram-positive infections",
    mechanism: "Inhibits bacterial cell wall synthesis by binding to D-alanyl-D-alanine terminus of cell wall precursors",
    nursingConsiderations: [
      "Monitor trough levels (10-20 mcg/mL)",
      "Assess for nephrotoxicity (monitor BUN/Creatinine)",
      "Check for ototoxicity (hearing loss, tinnitus)",
      "Infuse slowly over 60+ minutes (Red Man Syndrome)"
    ],
    sideEffects: ["Nephrotoxicity", "Ototoxicity", "Red Man Syndrome", "Phlebitis"],
    urgency: "high"
  },
  {
    id: 4,
    name: "Sertraline",
    generic: "SSRI Antidepressant",
    category: "psychiatric",
    classification: "Selective Serotonin Reuptake Inhibitor",
    indication: "Depression, Anxiety disorders, PTSD, OCD",
    mechanism: "Selectively inhibits serotonin reuptake in CNS, increasing synaptic serotonin availability",
    nursingConsiderations: [
      "Monitor for suicidal ideation (especially first 2-4 weeks)",
      "Assess for serotonin syndrome symptoms",
      "Takes 2-4 weeks for full therapeutic effect",
      "Do not discontinue abruptly (withdrawal symptoms)"
    ],
    sideEffects: ["Nausea", "Sexual dysfunction", "Insomnia", "Weight gain"],
    urgency: "medium"
  },
  {
    id: 5,
    name: "Insulin (Regular)",
    generic: "Short-acting insulin",
    category: "endocrine",
    classification: "Short-acting Human Insulin",
    indication: "Type 1 DM, Type 2 DM, Diabetic ketoacidosis",
    mechanism: "Binds to insulin receptors, facilitating glucose uptake by cells and inhibiting gluconeogenesis",
    nursingConsiderations: [
      "Monitor blood glucose before and after administration",
      "Given 30 minutes before meals",
      "Assess for signs of hypoglycemia",
      "Rotate injection sites to prevent lipodystrophy"
    ],
    sideEffects: ["Hypoglycemia", "Lipodystrophy", "Weight gain", "Hypokalemia"],
    urgency: "high"
  },
  {
    id: 6,
    name: "Albuterol",
    generic: "Short-acting Beta-2 Agonist",
    category: "respiratory",
    classification: "Beta-2 Adrenergic Agonist",
    indication: "Acute bronchospasm, Asthma, COPD exacerbation",
    mechanism: "Stimulates beta-2 receptors in bronchial smooth muscle, causing bronchodilation",
    nursingConsiderations: [
      "Monitor heart rate and blood pressure",
      "Assess respiratory status before and after use",
      "Teach proper inhaler technique",
      "May cause tremors and nervousness"
    ],
    sideEffects: ["Tachycardia", "Tremors", "Nervousness", "Palpitations"],
    urgency: "medium"
  },
  {
    id: 7,
    name: "Warfarin",
    generic: "Anticoagulant",
    category: "cardiovascular",
    classification: "Vitamin K Antagonist",
    indication: "DVT/PE prevention and treatment, Atrial fibrillation, Mechanical heart valves",
    mechanism: "Inhibits vitamin K-dependent clotting factors (II, VII, IX, X), preventing clot formation",
    nursingConsiderations: [
      "Monitor PT/INR regularly (target INR 2-3)",
      "Assess for bleeding signs",
      "Monitor for drug and food interactions",
      "Antidote: Vitamin K"
    ],
    sideEffects: ["Bleeding", "Bruising", "Skin necrosis", "Purple toe syndrome"],
    urgency: "high"
  },
  {
    id: 8,
    name: "Furosemide",
    generic: "Loop Diuretic",
    category: "cardiovascular",
    classification: "Loop Diuretic",
    indication: "Heart failure, Pulmonary edema, Hypertension, Edema",
    mechanism: "Inhibits sodium-potassium-chloride cotransporter in ascending loop of Henle, promoting diuresis",
    nursingConsiderations: [
      "Monitor fluid balance (I&O, daily weights)",
      "Check electrolytes (especially K+, Na+, Mg2+)",
      "Monitor blood pressure",
      "Assess for dehydration and orthostatic hypotension"
    ],
    sideEffects: ["Hypokalemia", "Dehydration", "Ototoxicity", "Hyperuricemia"],
    urgency: "high"
  },
  {
    id: 9,
    name: "Lorazepam",
    generic: "Benzodiazepine",
    category: "psychiatric",
    classification: "Benzodiazepine",
    indication: "Anxiety disorders, Seizures, Alcohol withdrawal, Preoperative sedation",
    mechanism: "Enhances GABA activity in CNS, producing anxiolytic, sedative, and anticonvulsant effects",
    nursingConsiderations: [
      "Monitor respiratory status",
      "Assess level of consciousness",
      "Fall precautions (sedation risk)",
      "Antidote: Flumazenil"
    ],
    sideEffects: ["Sedation", "Confusion", "Ataxia", "Respiratory depression"],
    urgency: "medium"
  },
  {
    id: 10,
    name: "Ceftriaxone",
    generic: "Third-generation Cephalosporin",
    category: "antibiotics",
    classification: "Third-generation Cephalosporin",
    indication: "Community-acquired pneumonia, Meningitis, Sepsis, UTI",
    mechanism: "Inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins",
    nursingConsiderations: [
      "Assess for penicillin/cephalosporin allergies",
      "Monitor for C. diff-associated diarrhea",
      "Given once daily (long half-life)",
      "Can displace bilirubin in neonates"
    ],
    sideEffects: ["Diarrhea", "Nausea", "Injection site reactions", "Rash"],
    urgency: "medium"
  }
];