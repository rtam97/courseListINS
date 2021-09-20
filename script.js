function makeList(listData,parentDiv,titleName) {


    // title = document.createElement('p');
    // title.classList.add('desctitle')
    // title.innerHTML = titleName

    // Make the list
    listElement = document.createElement('ul')

    // Set up a loop that goes through the items in listItems one at a time
    nrListItems = listData.length



  for (k = 0; k < nrListItems; ++k) {
    // create an item for each one
    listItem = document.createElement('li');
    // if (k % 2 == 0) {
    //   listItem.classList.add('whitebg')
    // }
    // Add the item text
    listItem.innerHTML = listData[k];

    // Add listItem to the listElement
    listElement.appendChild(listItem);
  }

  // Add it to the page
  par = document.getElementById(parentDiv)
  par.append(listElement)
}


function createCourseList(courseData) {
     // Make a container element for the course list
     listContainer = document.createElement('div'),
     listContainer.classList.add('container');
     listContainer.setAttribute("id", "courses");

     // Make the list
     courseElement = document.createElement('div');
     courseElement.classList.add('list');
     courseElement.setAttribute("id", "courselist");

     // Set up a loop that goes through the items in listItems one at a time
     numberOfListItems = courseData.length;

     console.log(numberOfListItems)

   // Add it to the page
   document.getElementsByClassName('middle')[0].appendChild(listContainer);
   listContainer.appendChild(courseElement);

   for (i = 0; i < numberOfListItems; ++i) {
     // ------ HERE I WILL ADD CHECK FOR FILTERS
     console.log(courseData[i].code)
     // create course
     courseItem = document.createElement('div');
     courseItem.classList.add('course');
     courseItem.setAttribute("id", courseData[i].code);

       // Add ID item
       {
       courseID = document.createElement('div');
       courseID.classList.add('code');
       courseID.setAttribute("id", 'CODE');
       // Add the item text to document
       courseID.innerHTML = courseData[i].code;
       courseItem.appendChild(courseID)
}

       // Add NAME item
       {

       courseName = document.createElement('div');
       courseName.classList.add('name');
       courseName.setAttribute("id", courseData[i].name);
       // Add the item text to document
       courseName.innerHTML = '<a class="showdesc" id="desctoggle" href="#'+courseData[i].code+'desc" data-toggle="collapse">'+courseData[i].name+ '</a>';
       courseItem.appendChild(courseName)
      }

       // Add PROF item
       {
       courseProf = document.createElement('div');
       courseProf.classList.add('prof');
       courseProf.setAttribute("id", courseData[i].coordinators);
       // Add the item text to document
       courseProf.innerHTML = courseData[i].coordinators;
       courseItem.appendChild(courseProf)
     }

       // Add course to document
       courseElement.appendChild(courseItem);

           // Add COURSE DESCRIPTION item
           {
             // Collapse container
           courseDescContainer = document.createElement('div');
           courseDescContainer.classList.add('collapse');
           courseDescContainer.setAttribute("id", courseData[i].code+'desc');
           courseElement.appendChild(courseDescContainer)

            // Actual container
           courseDesc = document.createElement('div');
           courseDesc.classList.add('description');
           courseDesc.setAttribute('id',courseData[i].code+'description')
           courseDescContainer.appendChild(courseDesc)


          // TITLES
           title = document.createElement('p');
           title.classList.add('desctitle')
           title.innerHTML = 'Techniques'
           courseDesc.appendChild(title)

           title2 = document.createElement('p');
           title2.classList.add('desctitle')
           title2.innerHTML = 'Topics'
           courseDesc.appendChild(title2)

           // Techniques
           makeList(courseData[i].techniques,courseData[i].code+'description')

           // Topics
           makeList(courseData[i].topics,courseData[i].code+'description')

           a = document.createElement('p');
           a.classList.add('desctitle')
           a.innerHTML = 'Model Organism(s):'
           courseDesc.appendChild(a)

           b = document.createElement('p');
           b.innerHTML = courseData[i].models
           courseDesc.appendChild(b)

           c = document.createElement('p');
           c.classList.add('desctitle')
           c.innerHTML = 'Location'
           courseDesc.appendChild(c)

           d = document.createElement('p');
           d.innerHTML = courseData[i].location
           courseDesc.appendChild(d)

           a = document.createElement('p');
           a.classList.add('desctitle')
           a.innerHTML = 'Semester'
           courseDesc.appendChild(a)

           b = document.createElement('p');
           b.innerHTML = courseData[i].semester
           courseDesc.appendChild(b)

           for (var j = 0; j < courseData[i].links.length; j++) {
             link = document.createElement('a')
             if (courseData[i].links.length == 1) {
               link.classList.add('desclinksingle')
             }
             link.setAttribute('target',"_blank")
             link.setAttribute('href',courseData[i].links[j])
             if (j==0) {
               link.innerHTML = 'ICNF Page'
               link.classList.add('desclink')
             } else {
               link.innerHTML = 'Lab Page'
             }

             courseDesc.appendChild(link)
           }

         }


   }
 }


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
      'Mice cell culture'
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
      'Behavioral paradigms',
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
      'C. elegans'
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
      'Rats',
      'Mice'
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
        'Data analysis',
        'Stochastic modeling',
        'Immunohistochemistry'
      ],
    "topics":[
      'Basal ganglia dopaminergic neurophysiology & patohysiology',
      'Parkinson\'s disease, schizophrenia, ADHD'
    ],
    "models":[
      'Mice'
    ],
    "location":"Niederrad",
    "semester":['Summer'],
    "links":[
      'https://www.izn-frankfurt.de/en/mitglied/roeper/'
    ]
  },
]



// Usage
createCourseList(courses);
