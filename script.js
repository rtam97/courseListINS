function changeColor(courseData,a,b,c,d,i) {
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

function createItem(type,className,id,textHTML,parent) {
  item = document.createElement(type);
  item.classList.add(className);
  item.setAttribute("id",id);
  if (textHTML != undefined) {
    item.innerHTML = textHTML;
  }
  if (parent != undefined) {
    parent.appendChild(item)
  }
  return item
}

function createCourseList(courseData) {

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

            // Add ID item
            courseID = createItem('div','code','code'+courseData[i].code,courseData[i].code)
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

      // Actual container
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

            // Change colors depending on course type
            if (courseData[i].code.includes('A')) {

              changeColor(courseData,'#ffdddd','#a80000','#a80000','#fff0f0',i)

            } else if (courseData,courseData[i].code.includes('B')) {

              changeColor(courseData,'#ddebff','#00337a','#00337a','#ebf3ff',i)


            } else if (courseData[i].code.includes('C')) {
              changeColor(courseData,'#e3e3e3','#696969','#696969','#dbdbdb',i)

            } else if (courseData[i].code.includes('D')) {

              changeColor(courseData,'#ffd591','#e08b00','#e08b00','#ffe8c4',i)
            }


  }
}

function extractTechniques(courseData) {

  techniques = []
  // Iterate through courses
  for (var i = 0; i < courseData.length; i++) {
    // For each technique
    for (var j = 0; j < courseData[i].techniques.length; j++) {
      // Extract lowercase name
      name = courseData[i].techniques[j]
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

function filterList() {
  checked = document.querySelectorAll('input[type=checkbox]:checked')
}

createCourseList(courses);

extractTechniques(courses)

addTechniques(techniques)
