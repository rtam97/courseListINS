// Change the COLORS of the course elements depending on the CODE
//                               BG  ID  PROF  BGdd
function changeColor(courseData, a,  b,  c,    d,       i) {
                    //
  // BACGROUND (a)
  x = document.getElementById(courseData[i].code)
  x.style.backgroundColor = a
  // COURSE ID (b)
  y = document.getElementById('code'+courseData[i].code)
  y.style.color = b
  // COURSE PROFESSOR (c)
  z = document.getElementById(courseData[i].coordinators)
  z.style.color = c
  // DROPDOWN BG COLOR (d)
  k = document.getElementById(courseData[i].code+'description')
  k.style.backgroundColor = d
}

// Create an unordered LIST
function makeList(listData,parentDiv,titleName) {

    // Make the list
    listElement = document.createElement('ul')

    // Set up a loop that goes through the items in listItems one at a time
    nrListItems = listData.length



  for (k = 0; k < nrListItems; ++k) {
    // create an item for each one
    listItem = document.createElement('li');
    listItem.innerHTML = listData[k];

    // Add listItem to the listElement
    listElement.appendChild(listItem);
  }

  // Add it to the page
  par = document.getElementById(parentDiv)
  par.append(listElement)
}

// Create an HTML element of the given TYPE, CLASS, ID, innerHTML, PARENT ELEM
function createItem(type,className,id,textHTML,parent) {
  item = document.createElement(type);
  if (Array.isArray(className)) {
    for (var i = 0; i < className.length; i++) {
     item.classList.add(className[i]);
    }
  } else {
    item.classList.add(className);
  }
  item.setAttribute("id",id);
  if (textHTML != undefined) {
    item.innerHTML = textHTML;
  }
  if (parent != undefined) {
    parent.appendChild(item)
  }
  return item
}

// Create the list of course elements given a list of courses (filtered/unf)
function createCourseList(courseData) {

  if (document.getElementById('courses') != null) {
    document.getElementById('courses').remove();
  } else {
    console.log('ur awesomes');
  }

  // Make a container element for the course list and add it to the page
  listContainer = createItem('div','container','courses')
  document.getElementsByClassName('courses-div')[0].appendChild(listContainer);

  // Make the list
  courseElement = createItem('div','list','courselist')
  listContainer.appendChild(courseElement)

  // Set up a loop that goes through the items in listItems one at a time
  numberOfListItems = courseData.length;

  for (var i = 0; i < numberOfListItems; i++) {

    // Create course
    courseItem = createItem('div','course',courseData[i].code)
    // courseItem.setAttribute('draggable','true')
    // courseItem.setAttribute('ondragstart','onDragStart(event);')

            // Add ID item
            courseID = createItem('div','code','code'+courseData[i].code,courseData[i].code)
            courseID.classList.add('draggable')
            courseID.setAttribute('draggable','true')
            courseItem.appendChild(courseID)


            // Add NAME item
            content = '<a class="showdesc" id="desctoggle" href="#'+courseData[i].code+'desc" data-toggle="collapse">'+courseData[i].name+ '</a>'
            courseName = createItem('div','name',courseData[i].name,content)
            courseItem.appendChild(courseName)

            // Add PROF item
            content = '<a href="'+courseData[i].links[0]+'" target="_blank" class="prof" id="'+courseData[i].coordinators+'">'+courseData[i].coordinators+'</a>';
            courseProf = createItem('div','professor','prof',content)
            courseItem.appendChild(courseProf)

    // Add course to document
    courseElement.appendChild(courseItem);


    // Add COURSE DESCRIPTION item
    // Collapse container
    courseDescContainer = createItem('div','collapse', courseData[i].code+'desc');
    courseElement.appendChild(courseDescContainer)

      // DESCRIPTION container
      courseDesc = createItem('div','description', courseData[i].code+'description');
      courseDescContainer.appendChild(courseDesc)

            // TITLES items
            title = createItem('p','desctitle','Techniques','Techniques')
            courseDesc.appendChild(title)

            title2 = createItem('p','desctitle','Topics','Topics')
            courseDesc.appendChild(title2)

            // Techniques
            makeList(courseData[i].techniques,courseData[i].code+'description')

            // Topics
            makeList(courseData[i].topics,courseData[i].code+'description')

            // Model organism
            modelOrgQ = createItem('p','desctitles','modelQ','Model organism',courseDesc)
            modelOrgA = createItem('p','descanswer','modelA',courseData[i].models,courseDesc)

            // Location
            createItem('p','desctitles','locationQ','Location',courseDesc)
            createItem('p','descanswer','locationA',courseData[i].location,courseDesc)

            // Semester
            createItem('p','desctitles','semesterrQ','Semester',courseDesc)
            createItem('p','descanswer','locationA',courseData[i].semester,courseDesc)

            // Link to lab page
            createItem('p','desctitles','linkQ','Lab page',courseDesc)
            if (courseData[i].links.length == 2) {
              link = document.createElement('a');
              link.setAttribute('target',"_blank")
              link.setAttribute('href',courseData[i].links[1])
              link.innerHTML = 'Link'
              courseDesc.appendChild(link)
            } else {
              b = document.createElement('p');
              b.innerHTML = '----------------'
              courseDesc.appendChild(b)
            }

            // ShowFullDesc
            showfully = createItem('a','nulla','showFullDesc','Show full description')
            showfully.setAttribute('data-toggle','collapse')
            showfully.setAttribute('href','#'+courseData[i].code+'fulldCollapse')
            courseDesc.appendChild(showfully)

            // Change colors depending on course type
            //                          BG        ID        PROF      BGdd
            if (courseData[i].code.includes('A')) {
              changeColor(courseData,'#ffdddd','#a80000','#a80000','#fff0f0',i)
            } else if (courseData,courseData[i].code.includes('B')) {
              changeColor(courseData,'#ddebff','#00337a','#00337a','#ebf3ff',i)
            } else if (courseData[i].code.includes('C')) {
              changeColor(courseData,'#e3e3e3','#696969','#696969','#f0f0f0',i)
            } else if (courseData[i].code.includes('D')) {
              changeColor(courseData,'#ffd591','#e08b00','#e08b00','#ffe8c4',i)
            } else if (courseData[i].code.includes('P')) {
              changeColor(courseData,'#ddffeb','#00a85c','#00a85c','#f0fff5',i)
            } else {
              changeColor(courseData,'#ddffeb','#00a85c','#00a85c','#f0fff5',i)
            }



          // FULL DESCRIPTION Collapsible div
          fullDescCollapse = createItem('div','collapse', courseData[i].code+'fulldCollapse');
          courseDescContainer.appendChild(fullDescCollapse)

              // Full description DIV
              courseFullDesc = createItem('div','full-description', courseData[i].code+'full-description');
              fullDescCollapse.appendChild(courseFullDesc)

                // CONTENT-TITLE
                courseContentTitle = createItem('div','fulldesc-title', courseData[i].code+'content-title','Content');
                courseFullDesc.appendChild(courseContentTitle)
                // CONTENT-TITLE
                courseContentTitle = createItem('div','fuldesc-stuff', courseData[i].code+'content-stuff',courseData[i].content);
                courseFullDesc.appendChild(courseContentTitle)
                // CONTENT-TITLE
                courseContentTitle = createItem('div','fulldesc-title', courseData[i].code+'objectives-title','Objectives');
                courseFullDesc.appendChild(courseContentTitle)
                // CONTENT-TITLE
                courseContentTitle = createItem('div','fuldesc-stuff', courseData[i].code+'objectives-stuff',courseData[i].objectives);
                courseFullDesc.appendChild(courseContentTitle)

  }


  addEventListeners();
}

// Extract the techniques from the JSON file of courses (only launched at the start)
function extractTechniques(courseData) {

  techniques = []
  // Iterate through courses
  for (var i = 0; i < courseData.length; i++) {
    // For each technique
    for (var j = 0; j < courseData[i].techniques.length; j++) {
      // Extract name
      name = courseData[i].techniques[j]
      if (name == '') {
        break
      }
      try {
        courseData[i].techniques[j].toLowerCase()
      } catch (e) {
        console.log(courseData[i].code)
        console.log(courseData[i].techniques[j])
      }

      // Find index of parenthesis
      par = name.indexOf("(")
      if (par != -1) {
        name = name.substr(0,par-1)
      }
      if (!techniques.includes(name)) {
        techniques.push(name)
      }
    }
  }
  techniques = techniques.sort()
  return techniques
}

// Add extracted techniques to the filters
function addTechniques(techniques){

  parent = document.getElementById('techfilter')
  for (var i = 0; i < techniques.length; i++) {


    li = document.createElement('li')
    li.classList.add('filter-option')
    parent.appendChild(li)

    input = document.createElement('input')
    input.setAttribute('type','checkbox')
    input.setAttribute('id',techniques[i])
    input.setAttribute('name',techniques[i])
    input.setAttribute('value',techniques[i])
    li.appendChild(input)

    label = document.createElement('label')
    label.setAttribute('for',techniques[i])
    label.innerHTML = techniques[i]
    li.appendChild(label)

  }
}

// Extract the techniques from the JSON file of courses (only launched at the start)
function extractModels(courseData) {

  models = []
  // Iterate through courses
  for (var i = 0; i < courseData.length; i++) {
    // For each technique
    for (var j = 0; j < courseData[i].models.length; j++) {
      // Extract name
      name = courseData[i].models[j]
      if (name == '') {
        break;
      }
      try {
        courseData[i].models[j].toLowerCase()
      } catch (e) {
        console.log(courseData[i].code)
        console.log(courseData[i].models[j])
      }

      // // Find index of parenthesis
      // par = name.indexOf("(")
      // if (par != -1) {
      //   name = name.substr(0,par-1)
      // }
      if (!models.includes(name)) {
        models.push(name)
      }
    }
  }
  models = models.sort()
  return models
}

// Add extracted techniques to the filters
function addModels(models){

  parent = document.getElementById('modfilter')
  for (var i = 0; i < models.length; i++) {


    li = document.createElement('li')
    li.classList.add('filter-option')
    parent.appendChild(li)

    input = document.createElement('input')
    input.setAttribute('type','checkbox')
    input.setAttribute('id',models[i])
    input.setAttribute('name',models[i])
    input.setAttribute('value',models[i])
    li.appendChild(input)

    label = document.createElement('label')
    label.setAttribute('for',models[i])
    label.innerHTML = models[i]
    li.appendChild(label)

  }
}

// Apply filters to the course list. Generates newCourseList
function filterList() {
  checked = document.querySelectorAll('input[type=checkbox]:checked')
  oldCourseList = courses;
  newCourseList = [];
  // Only filter if there are checkboxes
  if (checked.length != 0) {
    courseType  = [];
    campus      = [];
    semester    = [];
    modz        = [];
    tech        = [];

    // Sort checkboxes by category
    for (var i = 0; i < checked.length; i++) {
      switch (checked[i].parentElement.parentElement.parentElement.id) {
        case 'course-type':
          courseType.push(checked[i].value)
          break;
        case 'campus-list':
          campus.push(checked[i].name)
          break;
        case 'semester-list':
          semester.push(checked[i].name)
          break;
        case 'mod-list':
          modz.push(checked[i].name)
          break;
        case 'tech-list':
          tech.push(checked[i].name)
          break;
        default:
          console.log('default-switch')
      }
    }

    // Iterate through ALL COURSES
    for (var i = 0; i < oldCourseList.length; i++) {

      // CourseType filter
      if (courseType.includes(oldCourseList[i].code[0]) || courseType.length == 0) {

        // Campus filter
        if (campus.includes(oldCourseList[i].location) || campus.length == 0) {

          // Model filter
          for (var k = 0; k < oldCourseList[i].models.length; k++) {

            if ((modz.includes(oldCourseList[i].models[k]) || modz.length == 0 )&& !newCourseList.includes(oldCourseList[i])) {

              // Semester check
              // if        (semester.length == 2 || oldCourseList[i].semester == 1) {
              //               allow = semester.includes(oldCourseList[i].semester[0]);
              // } else if (semester.length == 1 || oldCourseList[i].semester == 2) {
              //               allow = oldCourseList[i].semester.includes(semester[0]);
              // } else {
              //               allow = false;
              // }

              allow = false;
              if (semester.length == oldCourseList[i].semester.length && semester.length == 1 && semester[0] != 'Both') {
                if (semester[0] == oldCourseList[i].semester[0]) {
                  allow = true;
                }
              }
              else if ((semester.length != oldCourseList[i].semester.length && semester.length == 2) || (semester.length == oldCourseList[i].semester.length && semester.length == 2) && semester.includes('Both')) {
                oldCourseList[i].semester.forEach((item, i) => {
                  if (semester[0] == item) {
                    allow = true;
                  }
                });

              }
               else if (semester.length != oldCourseList[i].semester.length && semester.length == 1 && oldCourseList[i].semester.length == 2 && semester[0] == 'Both') {
                allow = true;
              } else if (semester.length != oldCourseList[i].semester.length && semester.length == 2 && oldCourseList[i].semester.length == 1 && !semester.includes('Both')) {
                allow = true;
              }

              // Semester filter
              if (allow || semester.length == 0 || semester.length == 3) {

                if (tech.length != 0) {
                  for (var j = 0; j < oldCourseList[i].techniques.length; j++) {
                    // Find index of parenthesis
                    par = oldCourseList[i].techniques[j].indexOf("(")
                    if (par != -1) {
                      teknik = oldCourseList[i].techniques[j].substr(0,par-1)
                    } else {
                      teknik = oldCourseList[i].techniques[j]
                    }
                    if (tech.includes(teknik)){
                      newCourseList.push(oldCourseList[i]);
                      found = true
                      break
                    }
                  }
                } else {
                  newCourseList.push(oldCourseList[i]);
                }
              }
            }
          }
        }
      }
    }
  } else {
    filteredList = oldCourseList;
  }
  filteredList = newCourseList;

  // Rewrite CURRENT COURSE LIST without selection
  newCourseList = [];
  filteredList.forEach(course => {
    if (selectedCourses.includes(course)) {
      console.log(course.code);
    } else {
      newCourseList.push(course)
    }
  });
  currentCourseList = newCourseList;



  createCourseList(currentCourseList);
}

// Remove all filters, checkboxes, and load all courses in page
function resetFilters() {
  checked = document.querySelectorAll('input[type=checkbox]:checked')
  for (var i = 0; i < checked.length; i++) {
    checked[i].checked = false;
  }

  filteredList = courses;

  // Rewrite CURRENT COURSE LIST without selection
  newCourseList = [];
  filteredList.forEach(course => {
    if (selectedCourses.includes(course)) {
      console.log(course.code);
    } else {
      newCourseList.push(course)
    }
  });
  currentCourseList = newCourseList;
  createCourseList(currentCourseList);

}

// Activate/deactivate filter category dropdown arrow
function toggleActive(element) {
  if (element.classList.contains('active')) {
    element.classList.remove('active')
    element.classList.add('inactive')
  } else if (element.classList.contains('inactive')) {
    element.classList.remove('inactive')
    element.classList.add('active')
  }
}

// Drag and Drop functions
function dragStart(ev) {

  ev.dataTransfer.dropEffect = "copy";
  ev.dataTransfer.setData("text", ev.target.id);

}
function dragEnter() {


  this.classList.add('over');
}
function dragLeave() {


  this.classList.remove('over');
}
function dragOver(ev) {


  ev.preventDefault();
}
function dragDrop(ev) {

  // Read dropped element data (course code)
  data = ev.dataTransfer.getData("text");
  element = document.getElementById(data)

  // Find selected course from full course list
  selectedOne = courses.find(({ code }) => code === element.innerText)

  // Add course to selection
  selectedCourses.push(selectedOne)

  // Edit HTML and CSS of filled slot
  this.classList.remove('over');
  this.classList.add('filled');
  color = element.style.color;
  this.style.color = color;
  this.innerHTML = element.innerHTML;
  // Allow removal of course from slot  (dobleclick)
  this.setAttribute('ondblclick','removeItem(this);')


  // Rewrite CURRENT COURSE LIST without selection
  newCourseList = [];
  filteredList.forEach(course => {
    if (selectedCourses.includes(course)) {
      console.log(course.code);
    } else {
      newCourseList.push(course)
    }
  });
  currentCourseList = newCourseList;
  createCourseList(currentCourseList);

}

// Remove course from selection grid
function removeItem(item) {

  returnCourse = courses.find(({ code }) => code === item.innerText)

  const idx = selectedCourses.indexOf(returnCourse)
  if (idx > -1) {
    selectedCourses.splice(idx,1)
  }

  // Rewrite CURRENT COURSE LIST without selection
  newCourseList = [];
  filteredList.forEach(course => {
    if (selectedCourses.includes(course)) {
      console.log(course.code);
    } else {
      newCourseList.push(course)
    }
  });
  currentCourseList = newCourseList;
  createCourseList(currentCourseList);

  // Change CSS and HTML
  switch (item.id) {
    case 'slot1':
      item.innerHTML = '1st choice'
      break;
    case 'slot2':
      item.innerHTML = '2nd choice'
      break;
    case 'slot3':
      item.innerHTML = '2nd choice'
      break;
  }
  item.classList.remove('filled')
  item.style.color = '#dbdbdb'
}

// Filter courses to inculde only the SELECTED ones
// Overrides any active filter
function viewSel() {
  createCourseList(selectedCourses)
}

// Removes all courses from selection and resets course list
function resetSel() {
  document.querySelectorAll('.filled').forEach((full, i) => {
    console.log(full);
    removeItem(full)
  });

  document.querySelectorAll('.category').forEach((item, i) => {
    item.value=""
  });


}

// Save current selection to a JSON file
function saveSel() {


  // Create structure of OBJECT TO BE SAVED
  saveObject = {
    'catname1' : '',
    'catname2' : '',
    'catname3' : '',
    'courses' : []
  };

  document.querySelectorAll('.slot').forEach((item, i) => {
    if (item.classList.contains('filled')) {
      curCourse = courses.find(({ code }) => code === item.innerText)
    } else {
      curCourse = {}
    }
    saveObject.courses.push(curCourse)
  });


  document.querySelectorAll('.category').forEach((item, i) => {

    if (item.value == '') {
      catname = item.placeholder
    } else {
      catname = item.value
    }

    switch (i) {
      case 0:
        saveObject.catname1 = catname
        break;
      case 1:
        saveObject.catname2 = catname
        break;
      case 2:
        saveObject.catname3 = catname
        break;

    }

  });

  saveJSON = JSON.stringify(saveObject)

  saveFileFunction(saveJSON)
  console.log(saveJSON);
}

// Put loaded JSON data of SELECTED COURSES into selection grid
function loadSel() {
    document.querySelectorAll('.slot').forEach((item, i) => {
      console.log(item)
      console.log(loadedList.courses[i]);

      element = document.getElementById('code'+loadedList.courses[i].code)

      if (element != null) {
        // Edit HTML and CSS of filled slot
        item.classList.add('filled');
        color = element.style.color;
        item.style.color = color;
        item.innerHTML = loadedList.courses[i].code;
        // Allow removal of course from slot  (dobleclick)
        item.setAttribute('ondblclick','removeItem(this);')


        selectedOne = courses.find(({ code }) => code === element.innerText)

        selectedCourses.push(selectedOne)
      }
    });

    resetFilters();

    // Rewrite CURRENT COURSE LIST without selection
    newCourseList = [];
    filteredList.forEach(course => {
      if (selectedCourses.includes(course)) {
        console.log(course.code);
      } else {
        newCourseList.push(course)
      }
    });

    currentCourseList = newCourseList;
    createCourseList(currentCourseList);


}

// Load JSON file
function loadFileFunction() {
  var element = document.createElement('div');
  element.innerHTML = '<input type="file">';
  var fileInput = element.firstChild;

  fileInput.addEventListener('change', function() {
      var file = fileInput.files[0];

      if (file.name.match(/\.(txt|json)$/)) {
          var reader = new FileReader();

          reader.onload = function() {
              loadedList = JSON.parse(reader.result);
              loadSel();
          };
          reader.readAsText(file);
      } else {
          alert("File not supported, .txt or .json files only");
      }
  });
  fileInput.click();
}

function saveFileFunction(data) {
        // Convert the text to BLOB.
        const jsonToBlob = new Blob([data], { type: 'application/json' });
        const sFileName = 'selectionfile.json';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(jsonToBlob);
        }
        else {
            newLink.href = window.URL.createObjectURL(jsonToBlob);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();
}


function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable')

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart',dragStart)
  });

  const slots = document.querySelectorAll('.slot')

  slots.forEach(slot => {
    slot.addEventListener('dragenter',dragEnter)
    slot.addEventListener('dragover',dragOver)
    slot.addEventListener('dragleave',dragLeave)
    slot.addEventListener('drop',dragDrop)
  });


}


filteredList = courses;
selectedCourses = [];
currentCourseList = courses;

viewingSelection = false;

createCourseList(currentCourseList);

teks = extractTechniques(currentCourseList)
addTechniques(teks)

mods = extractModels(currentCourseList)
addModels(mods)
