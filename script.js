// Get the image element by its id
const repnua4 = document.getElementById("repnua4");
const repzymo = document.getElementById("repzymo");
const repsponge = document.getElementById("repsponge");
const presnua4 = document.getElementById("presnua4");
const preszymo = document.getElementById("preszymo");
const presleuko = document.getElementById("presleuko");

// Set the filenames of the documents you want to open when the images are clicked
const fnrepnua4 = "Conor McKeon CRBM Report.pdf";
const fnrepzymo = "Conor McKeon PRF Report.pdf";
const fnrepsponge = "Conor McKeon MB Report.pdf";
const fnpresnua4 = "Conor McKeon CRBM Presentation.pdf";
const fnpreszymo = "Conor McKeon PRF Presentation.pdf";
const fnpresleuko = "Conor McKeon IGF Presentation.pdf";

// Add onclick events to the image elements
repnua4.onclick = function() {
  // Construct the path to the document file
  const filePath = "docs/" + fnrepnua4;
  
  // Open the document file in a new tab or window when the image is clicked
  window.open(filePath, "_blank");
};

repzymo.onclick = function() {
  // Construct the path to the document file
  const filePath = "docs/" + fnrepzymo;
  
  // Open the document file in a new tab or window when the image is clicked
  window.open(filePath, "_blank");
};

repsponge.onclick = function() {
  // Construct the path to the document file
  const filePath = "docs/" + fnrepsponge;
  
  // Open the document file in a new tab or window when the image is clicked
  window.open(filePath, "_blank");
};

presnua4.onclick = function() {
  // Construct the path to the document file
  const filePath = "docs/" + fnpresnua4;
  
  // Open the document file in a new tab or window when the image is clicked
  window.open(filePath, "_blank");
};

preszymo.onclick = function() {
  // Construct the path to the document file
  const filePath = "docs/" + fnpreszymo;
  
  // Open the document file in a new tab or window when the image is clicked
  window.open(filePath, "_blank");
};

presleuko.onclick = function() {
  // Construct the path to the document file
  const filePath = "docs/" + fnpresleuko;
  
  // Open the document file in a new tab or window when the image is clicked
  window.open(filePath, "_blank");
};


window.addEventListener('load', function() {
  var container = document.querySelector('.container');
  var sidebar = document.querySelector('.sidebar');
  sidebar.style.height = container.offsetHeight + 'px';
});
