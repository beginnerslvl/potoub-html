// script.js
// Variables to store HTML elements
const SideBar1 = document.getElementById('sidebar1');
const SideBar2 = document.getElementById('sidebar2');
const SideBar3 = document.getElementById('sidebar3');
const SideBar4 = document.getElementById('sidebar4');

const Banner0 = document.getElementById('banner0');
const Banner1 = document.getElementById('banner1');
const Banner2 = document.getElementById('banner2');

const Banner3 = document.getElementById('banner3');
const Banner4 = document.getElementById('banner4');
const Banner5 = document.getElementById('banner5');

const Banner6 = document.getElementById('banner6');
const Banner7 = document.getElementById('banner7');
const Banner8 = document.getElementById('banner8');

const about_software = document.getElementById('software');
const about_software1 = document.getElementById('software1');


const details = document.getElementById('details1');
const details1 = document.getElementById('details2');
const details2 = document.getElementById('details3');
const details3 = document.getElementById('details4');

const intro_title = document.getElementById('intro_title');
const intro = document.getElementById('intro');

const works = document.getElementById('works');
const how_works = document.getElementById('how_works');

const paragraph1 = document.getElementById('paragraph1');
// Function to update content for a specific element
function updateContent(element, newValue) {
  // Update content for the element
  element.textContent = newValue;
}

// Function to update content for an <a> tag
function updateLinkContent(linkElement, newValue) {
  // Update content for the <a> tag
  linkElement.innerText = newValue;
}

// Fetch JSON data from the text file
fetch('t.txt')
  .then(response => response.text())
  .then(textData => {
    // Parse the text data as JSON
    const jsonData = JSON.parse(textData);

    // Update content for existing sidebar elements using variables
    updateContent(SideBar1, jsonData.sidebar.sidebar1);
    updateContent(SideBar2, jsonData.sidebar.sidebar2);
    updateContent(SideBar3, jsonData.sidebar.sidebar3);
    updateContent(SideBar4, jsonData.sidebar.sidebar4);

    // Update content for existing banner elements using variables
    updateContent(Banner0, jsonData.banner.banner0);
    updateContent(Banner1, jsonData.banner.banner1);
    updateContent(Banner2, jsonData.banner.banner2);

    updateContent(Banner3, jsonData.banner1.banner0);
    updateContent(Banner4, jsonData.banner1.banner1);
    updateContent(Banner5, jsonData.banner1.banner2);

    updateContent(Banner6, jsonData.banner2.banner0);
    updateContent(Banner7, jsonData.banner2.banner1);
    updateContent(Banner8, jsonData.banner2.banner2);

    updateContent(about_software, jsonData.software.about1);
    updateContent(about_software1, jsonData.software.about2);

    updateContent(details, jsonData.details.details1);
    updateContent(details1, jsonData.details.details2);
    updateContent(details2, jsonData.details.details3);
    updateContent(details3, jsonData.details.details4);

    updateContent(intro_title, jsonData.introduction.intro_title);
    updateContent(intro, jsonData.introduction.intro);    

    updateContent(works, jsonData.works.intro);
    updateContent(how_works, jsonData.works.how_works);  

  })
  .catch(error => console.error('Error fetching or parsing JSON:', error));
