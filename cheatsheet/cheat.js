// JavaScript DOM Manipulation Cheatsheet

// Accessing DOM Elements
document.getElementById('id'); // Get element by ID
document.getElementsByClassName('className'); // Get elements by class name
document.getElementsByTagName('tagName'); // Get elements by tag name
document.querySelector('selector'); // Get first element matching CSS selector
document.querySelectorAll('selector'); // Get all elements matching CSS selector

// Manipulating Content and Attributes
let element = document.querySelector('selector');
element.innerHTML = 'New Content'; // Set or get HTML content
element.textContent = 'New Text'; // Set or get text content
element.setAttribute('attribute', 'value'); // Set attribute
element.getAttribute('attribute'); // Get attribute value
element.removeAttribute('attribute'); // Remove attribute

// Manipulating CSS Classes
element.classList.add('className'); // Add class
element.classList.remove('className'); // Remove class
element.classList.toggle('className'); // Toggle class
element.classList.contains('className'); // Check if class exists

// Adding and Removing Elements
let newElement = document.createElement('tagName'); // Create new element
let textNode = document.createTextNode('New Text'); // Create new text node
newElement.appendChild(textNode); // Append text node to element
document.body.appendChild(newElement); // Add new element to body
document.body.insertBefore(newElement, referenceElement); // Insert element before reference
document.body.removeChild(childElement); // Remove child element
document.body.replaceChild(newElement, oldChild); // Replace old child with new child

// Event Handling
element.addEventListener('event', function() {
  // Event handler code
}); // Add event listener
element.removeEventListener('event', function() {
  // Event handler code
}); // Remove event listener

// Navigating the DOM
let parent = element.parentNode; // Get parent element
let children = element.childNodes; // Get all child nodes
let firstChild = element.firstChild; // Get first child
let lastChild = element.lastChild; // Get last child
let nextSibling = element.nextSibling; // Get next sibling
let previousSibling = element.previousSibling; // Get previous sibling
