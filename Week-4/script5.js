function myClickFunction() {
var element = document.getElementById('pageheading');
element.firstChild.nodeValue = 'New Heading';
var element = document.getElementById('pageparagraph');
element.firstChild.nodeValue = 'New paragraph and lots of useful information about module.';
}
document.addEventListener('click', myClickFunction);
