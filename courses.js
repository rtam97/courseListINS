var create_course_list = function create_course_list(){
  let courses = [
    {
      "code":"A5",
      "name":"Clock Mechanisms in Mammalian Neurons and Neuroendocrine Cells",
      "coordinators":["Prof. Eric Maronde"],
      "techniques":[
        'Molecular biology',
        'Biochemistry',
        'Cell culture',
        'Immunohistochemistry'
      ],
      "topics":[
        'Circadian rhythms in mammalian neurons'
      ],
      "models":[
        'Neuronal cell culture (Mus musculus)'
      ],
      "location":"Niederrad",
      "semester":['Summer'],
      "links":['https://www.izn-frankfurt.de/en/mitglied/maronde/']
    },

    {
      "code":"A7",
      "name":"Neurobiology of the Nematode Caenorhabditis elegans",
      "coordinators":["Prof. Alexander Gottschalk"],
      "techniques":[
        'Genetic techniques',
        'Behavioral experiments',
        'Pharmachology',
        'Molecular biology',
        'Optogenetics (demo)',
        'Electrophysiology (demo)'
      ],
      "topics":[
        'Food-motivated behavior',
        'Neuromuscolar control',
        'Noiciception'
      ],
      "models":[
        'Nematode worm (Caenorhabditis elegans)'
      ],
      "location":"Riedberg",
      "semester":['Winter','Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/gottschalk/',
        'https://www.bmls.de/Cellular_and_Molecular_Neurobiology/projects.html',
      ]
    },

    {
      "code":"A8",
      "name":"Neuropharmacology",
      "coordinators":["Prof. Jochen Klein"],
      "techniques":[
          'In vivo microdialysis',
          'HPLC of neurotransmitters and metabolites',
          'Enzymatic assays'
        ],
      "topics":[
        'Central cholinergic system in Alzheimer\'s disease',
        'Metabolism in ischemic and stroke conditions'
      ],
      "models":[
        'Rats (Rattus norvegicus)',
        'Mice (Mus musculus)'
      ],
      "location":"Riedberg",
      "semester":['Winter','Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/klein/',
        'https://www.uni-frankfurt.de/57955275/Prof__Dr__Jochen_Klein',
      ]
    },

    {
      "code":"A9",
      "name":"Cellular Physiology of Dopaminergic Neurons",
      "coordinators":["Prof. Jochen Roeper"],
      "techniques":[
          'Single-cell electrophysiology',
          'Signal processing',
          'Stochastic modeling',
          'Immunohistochemistry'
        ],
      "topics":[
        'Basal ganglia dopaminergic neurophysiology & patohysiology',
        'Parkinson\'s disease, schizophrenia, ADHD'
      ],
      "models":[
        'Mice (Mus musculus)'
      ],
      "location":"Niederrad",
      "semester":['Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/roeper/'
      ]
    },

    {
      "code":"A10",
      "name":"Neurophysiology and Behaviour",
      "coordinators":["Prof. Bernd Gruenewald"],
      "techniques":[
          'Single-cell electrophysiology',
          'Calcium imaging',
          'Cell culture',
          'Neuroanatomy',
          'Immunohistochemistry',
          'Confocal fluorescence microscopy',
          'Behavioral experiments'
        ],
      "topics":[
        'Ion channels and receptors functioning',
        'Neuromodulation',
        'Learning behavior',
        'Olfactory memory formation',
        'Social behavior of bees'
      ],
      "models":[
        'Honeybees (Apis mellifera)',
        'Fruit fly (Drosophila melanogaster)'
      ],
      "location":"Riedberg",
      "semester":['Winter','Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/gruenewald/'
      ]
    },

    {
      "code":"A12",
      "name":"The Neuro-Vascular Interface",
      "coordinators":["PD Dr. Stefan Liebner"],
      "techniques":[
          'Genetic techniques',
          'Immunohistochemistry',
          'Primary cell culture (isolation from mice)',
          'Transgenic techniques',
          'Confocal and live-cell microscopy',
          'Biochemistry'
        ],
      "topics":[
        'Development of brain vasculature',
        'Blood-brain-barrier morphogenesis'
      ],
      "models":[
        'Mice (Mus musculus)',
        'Endothelial cell culture (Mus musculus)'
      ],
      "location":"Niederrad",
      "semester":['Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/liebner/',
        'http://www.bbbsignaling.de/home.html'
      ]
    },

    {
      "code":"A14",
      "name":"Embryonic and Adult Neurogenesis ",
      "coordinators":["Prof. Dorothea Schulte"],
      "techniques":[
          'Genetic techniques',
          'Primary cell culture (isolation from mice)',
          'Transgenic techniques',
          'Confocal and live-cell microscopy',
          'Biochemistry',
          'Immunohistochemistry',
          'Microscopy'
        ],
      "topics":[
        'Neurogenesis principles in vertebrates',
        'Cell fate specification and differentiation'
      ],
      "models":[
        'Mice embryos (Mus musculus)',
        'Chicken embryos (Gallus gallus domesticus)'
      ],
      "location":"Niederrad",
      "semester":['Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/schulte/'
      ]
    },

    {
      "code":"A15",
      "name":"Electrophysiological recordings in freely behaving animals",
      "coordinators":["Dr. Torfi Sigurdsson"],
      "techniques":[
          'Behavioral experiments (spatial working memory)',
          'Cell electrophysiology in free-behavior',
          'Spike and LFP extraction',
          'Signal processing'
        ],
      "topics":[
        'Neuronal coordination across brain regions',
        'Spatial working memory',
        'Schizophrenia'
      ],
      "models":[
        'Mice (Mus musculus)'
      ],
      "location":"Niederrad",
      "semester":['Winter','Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/sigurdsson/'
      ]
    },

    {
      "code":"A17",
      "name":"Auditory Function and Dysfunction: Behavior and Physiology",
      "coordinators":["PD Dr. Bernhard Gaese"],
      "techniques":[
          'Study design',
          'Animal handling',
          'Pharmachology',
          'Behavioral experiments',
          'Electrophysiology',
          'Data analysis'
        ],
      "topics":[
        'Auditory perception',
        'Auditory disorders (tinnitus, hearing loss)',
        'Behavioral/pharmachological treatments'
      ],
      "models":[
        'Rats (Rattus norvegicus)',
        'Gerbil (Meriones unguiculatus)'
      ],
      "location":"Riedberg",
      "semester":['Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/gaese/'
      ]
    },


    {
      "code":"A18",
      "name":"Information Processing in the Central Auditory System",
      "coordinators":["PD Dr. Bernhard Gaese"],
      "techniques":[
          'Animal handling and surgery',
          'Behavioral experiments',
          'Single-cell electrophysiology',
          'Signal processing',
          'Data analysis'
        ],
      "topics":[
        'Auditory perception',
        'Top-down influences on hearing',
        'Context-dependent processing of auditory signals'
      ],
      "models":[
        'Rats (Rattus norvegicus)',
        'Gerbil (Meriones unguiculatus)'
      ],
      "location":"Riedberg",
      "semester":['Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/gaese/'
      ]
    },

    {
      "code":"A19",
      "name":"Neuronal basis of acoustic communication in mammals",
      "coordinators":["Dr. Julio Hechavarria",'Prof. Manfred Koessl'],
      "techniques":[
          'Bioacoustics',
          'Animal handling and surgery',
          'Electrophysiology',
          'Statistics and data analysis',
          'Programming (Matlab)'
        ],
      "topics":[
        'Auditory perception',
        'Top-down influences on hearing',
        'Context-dependent processing of auditory signals'
      ],
      "models":[
        'Bats (Carollia perspicillata)',
        'Gerbil (Meriones unguiculatus)'
      ],
      "location":"Riedberg",
      "semester":['Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/hechavarria/',
        'https://www.julio-hechavarria.com/'
      ]
    },

    {
      "code":"A21",
      "name":"Cellular, molecular and systemic Neurobiology in mouse and zebrafish",
      "coordinators":["Prof. Amparo Acker-Palmer",'Dr. Bettina Kirchmaier'],
      "techniques":[
          'Genetic techniques (mice)',
          'Immunohistochemistry',
          'Neuronal cell culture',
          'Microscopy',
          'Biochemistry',
          'Genetic techniques (zebrafish)',
          'Microscopy',
          'Embryo manipulation',
          'Behavioral experiments'
        ],

      "topics":[
        'Molecular mechanisms of cell-cell communication (ephrin/Eph system)',
        'Neurovascular interface function and development'
      ],
      "models":[
        'Mice (Mus musculus)',
        'Zebrafish (Danio rerio)'
      ],
      "location":"Riedberg",
      "semester":['Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/acker-palmer/',
        'https://sites.google.com/view/neuro-vessel-frankfurt/home'
      ]
    },

    {
      "code":"A22",
      "name":"Optogenetics and calcium recordings in freely behaving animals",
      "coordinators":["Dr. Sevil Duvarci"],
      "techniques":[
          'Optogenetics',
          'Calcium recordings (Fiber photometry)',
          'Behavioral experiments',
          'Signal processing',
          'Statistics/Data analysis'
        ],

      "topics":[
        'Midbrain dopamine system',
        'Fear circuits',
        'Schizophrenia'
      ],
      "models":[
        'Mice (Mus musculus)'
      ],
      "location":"Niederrad",
      "semester":['Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/duvarci/'
      ]
    },


    {
      "code":"A23",
      "name":"Cellular and molecular mechanisms in neurovascular disorders",
      "coordinators":["Dr. Jasmin Hefendehl"],
      "techniques":[
          'Genetic techniques (demo)',
          'Biochemistry',
          'Immunohistochemistry',
          'Neuronal cell culture',
          'Microscopy',
          'In vivo 2-photon microscopy (demo)',
          'Image data analysis'
        ],

      "topics":[
        'Comorbidity of Alzheimer\'s disease and neurovascular diseases'
      ],
      "models":[
        'Mice (Mus musculus)',
        'Cell culture (Mus musculus)'
      ],
      "location":"Riedberg",
      "semester":['Winter','Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/hefendehl/'
      ]
    },

    {
      "code":"A24",
      "name":"Deciphering brain activity during natural behaviour in real time",
      "coordinators":["Dr. Martha Havenith","Dr Marieke Scholvinck"],
      "techniques":[
          'Animal handling',
          'Surgery',
          'Behavioral experiments',
          'Electrophysiology',
          'Human psychophysics (VR)',
          'Programming (Python/Matlab)',
          'Data analysis'
        ],

      "topics":[
        'Parallel/distibuted processing in complex cognition'
      ],
      "models":[
        'Mice (Mus musculus)',
        'Rhesus macaque (Macaca mulatta)'
      ],
      "location":"Niederrad",
      "semester":['Winter','Summer'],
      "links":[
        'https://www.esi-frankfurt.de/research/havenith-scholvinck-lab/'
      ]
    },

    {
      "code":"B1",
      "name":"Ageing and Neurodegeneration",
      "coordinators":["Prof. Georg Auburger"],
      "techniques":[
          'Motor and behavioral measurements',
          'Progression analysis',
          'Molecular genetics',
          'Molecular biology',
          'Histology'
        ],

      "topics":[
        'Parkinson\'s disease',
        'Ataxia'
      ],
      "models":[
        'Mice (Mus musculus)'
      ],
      "location":"Niederrad",
      "semester":['Winter','Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/auburger/'
      ]
    },

    {
      "code":"B2",
      "name":"Physiology and Pharmacology of Pain",
      "coordinators":["Prof. Dr. Ellen Niederberger"],
      "techniques":[
          'Behavioral experiments (pain)',
          'Immunohistochemistry',
          'Neuronal cell culture',
          'Calcium imaging',
          'Pharmacology',
          'Molecular biology',
          'Biochemistry'
        ],

      "topics":[
        'Parkinson\'s disease',
        'Ataxia'
      ],
      "models":[
        'Cell culture (Mus musculus)'
      ],
      "location":"Niederrad",
      "semester":['Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/niederberger/'
      ]
    },

    {
      "code":"B4",
      "name":"Plasticity in Hippocampus : Morphology, Physiology, and Clinical Relevance",
      "coordinators":["Prof. Thomas Deller"],
      "techniques":[
          'Organotypic slice cultures',
          'Immunohistochemistry',
          'Optogenetics',
          'Live/fixed confocal microscopy',
          'Electrophysiology (LTP)',
          'Pharmacology',
          'Molecular biology'

        ],

      "topics":[
        'Hippocampal response to CNS damage',
        'Hippocampal cell network dynamics',
        'Molecular basis of hippocampal plasticity'
      ],
      "models":[
        'Organotypic slice culture (Mus musculus)'
      ],
      "location":"Niederrad",
      "semester":['Winter','Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/deller/'
      ]
    },

    {
      "code":"B6",
      "name":"Brain Damage and Neuroprotection",
      "coordinators":["Prof. Donat Kogel","Prof. Abdelhaq Rami"],
      "techniques":[
          'Neuronal cell culture',
          'Ischemia models in vivo/in vitro',
          'Stress stimuli in vitro',
          'Live/fixed confocal microscopy',
          'Pharmacology'
        ],

      "topics":[
        'Cell stress and death',
        'Autophagy in cerebral ischemia'
      ],
      "models":[
        'Rats (Rattus norvegicus)',
        'Cell culture (Rattus norvegicus)'
      ],
      "location":"Niederrad",
      "semester":['Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/deller/'
      ]
    },

    {
      "code":"B7",
      "name":"Clinical Paediatric Neurology",
      "coordinators":["Prof. Dr. Matthias Kieslich"],
      "techniques":[
          'Developmental neurological evaulation',
          'Metabolic analysis',
          'Neurophysiology (EEG, EP, Neurography)',
          'Neuropsychological evaluation',
          'Sonography'
        ],

      "topics":[
        'Epilepsy',
        'Neuronal metabolism',
        'Neurooncology',
        'Neurotraumatology',
        'Non-accidental child injuries (abuse)',
        'Ataxia teleaniectasia'
      ],
      "models":[
        'Human children (Homo sapiens)'
      ],
      "location":"Niederrad",
      "semester":['Winter'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/kieslich/'
      ]
    },

    {
      "code":"B8",
      "name":"Clinical Neuroimaging",
      "coordinators":["Prof. Dr. Joachim Berkefeld"],
      "techniques":[
          'Molecular resonance tomography',
          'Computed tomography',
          'DSA',
          'Neuroanatomy'
        ],

      "topics":[
        'Imaging techniques'
      ],
      "models":[
        'Humans (Homo sapiens)'
      ],
      "location":"Niederrad",
      "semester":['Winter','Summer'],
      "links":[
        'https://www.izn-frankfurt.de/'
      ]
    },

    {
      "code":"B9",
      "name":"Clinical Auditory Neuroscience",
      "coordinators":["Prof. Uwe Baumann"],
      "techniques":[
          'Psychoacoustics',
          'Brainstem recording techniques',
          'Audiometry',
          'Hearing aids and implants',
          'Stimulus design',
          'Data analysis and Programming'
        ],

      "topics":[
        'Auditory processing and impaired hearing',
        'hearing aids and cochlear implants',
        'electrical stimulation of the auditory system'
      ],
      "models":[
        'Humans (Homo sapiens)'
      ],
      "location":"Niederrad",
      "semester":['Winter','Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/baumann/',
        'https://www.kgu.de/index.php?id=108'
      ]
    },

    {
      "code":"B10",
      "name":"Experimental and Translational Psychiatry",
      "coordinators":["Prof. David Slattery"],
      "techniques":[
        'Cell culture',
          'Molecular biology',
          'Immunohistochemistry',
          'Pharmachology',
          'Behavioral experiments',
          'Neuroimaging'
        ],

      "topics":[
        'Psychiatric disorders in mice models and humans',
        'Role of neuropeptides in anxiety/affective disorders',
        'Molecular basis of social anxiety',
        'Sex-differences in stress disorders'
      ],
      "models":[
        'Mice (Mus musculus)',
        'Humans (Homo sapiens)'
      ],
      "location":"Niederrad",
      "semester":['Winter','Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/slattery/'
      ]
    },

    {
      "code":"B11",
      "name":"Neurobiological human cell models",
      "coordinators":["Prof. Dr. Andreas Chiocchetti"],
      "techniques":['Molecular biology',
          'Cell culture',
          'CRISPR-Cas9',
          'Fluorescence and luminescence assays',
          'Immunohistochemistry',
          'Cellular models of psychiatric disorders'
        ],

      "topics":[
        'Autism Spectrum Disorder (ASD)',
        'Attention Deficit Hyperactivity Disorder (ADHD)',
        'Conduct Disorder'
      ],
      "models":[
        'Mice (Mus musculus)',
        'Humans (Homo sapiens)'
      ],
      "location":"Niederrad",
      "semester":['Winter','Summer'],
      "links":[
        'https://www.researchgate.net/profile/Andreas-Chiocchetti'
      ]
    },

    {
      "code":"C3",
      "name":"Modelling and Simulation",
      "coordinators":["Prof. Gabriel Wittum"],
      "techniques":[
          'Vector analysis (multivariable calculus)',
          'Mathematical modeling',
          'Simulation techniques for ODEs and PDEs'
        ],

      "topics":[
        'Scientific computing and maths'
      ],
      "models":[
        'Computer'
      ],
      "location":"Westend",
      "semester":['Summer'],
      "links":[
        'https://gcsc.uni-frankfurt.de/simulation-and-modelling'
      ]
    },

    {
      "code":"C4",
      "name":"Virtual Hippocampus : Introduction to Computational Neuroscience",
      "coordinators":["Prof. Dr. Peter Jedlicka"],
      "techniques":[
          'Synaptic models',
          'Dendritic models',
          'Single-neuron models',
          'Network models',
          'NEURON package',
          'Programming (Python)'
        ],

      "topics":[
        'Modeling of hippocampal cells and networks',
        'Memory and learning',
        'Synaptic plasticity',
        'Molecular/cellular underpinnings of the role of dentate gyrus role in memory',
        'GABAergic inhibition on dendritic computation'
      ],

      "models":[
        'Computer'
      ],
      "location":"Niederrad",
      "semester":['Winter','Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/jedlicka/',
        'https://sites.google.com/site/peterjedlicka/'
      ]
    },

    {
      "code":"C8",
      "name":"Systems Neuroscience : Sensorimotor and cognitive networks",
      "coordinators":["PD Dr. Christian Kell"],
      "techniques":[
          'Behavioral experiments',
          'Electroencephalography (EEG)',
          'Magnetoencephalography (MEG)',
          'fMRI',
          'Data analysis'
        ],

      "topics":[
        'Linguistic processing and production in health and disease'
      ],

      "models":[
        'Humans (Homo sapiens)'
      ],
      "location":"Niederrad",
      "semester":['Winter','Summer'],
      "links":[
        'https://www.izn-frankfurt.de/en/mitglied/kell/',
        'http://www.brainclocks.com/interests.php'
      ]
    },



  ]
};

module.exports.create_course_list = create_course_list;
