// Tags
const searchTags = [];

// Individual elements
let parentElement = null;
const tagLists = Array.from(document.querySelectorAll("article .tags"));

// Search Functions

/** Student Averie's Annotations for function1:
 * Create new function initializeSearch and take the newParentElement as a parameter
 * Set params equal to new URLSearchParams interface, returning instances of window.location.search, searching for everything in the search string within the window
 * Check if newParentElement is strictly null.
 * If newParentElement is found to be strictly null, output and send the following message to the console: "Cannot insert tags, parent element is null"
 * Returns all the values associated with "tags" within FormData Object.
 * for tag in params.getAll("tag"), add another tag.
 * Return newParentElement.
 */

function initializeSearch(newParentElement) {
  const params = new URLSearchParams(window.location.search);
  if (newParentElement === null) {
    console.error(
      "Cannot insert tags, parent element is null",
      params.getAll("tag")
    );
    return;
  }

  parentElement = newParentElement;
  for (const tag of params.getAll("tag")) {
    addSearchTerm(tag);
  }
}

/** Student Averie's Annotations for function2:
 * Create function hideArticles()
 * Check if the length of tags is strictly equal to 0
 * For article of document.querySelectorAll("article"), which returns static representing list of document's elements that matches article:
 * Remove "hidden" from article's classList.
 * Iterate tag of searchTags (for tag of searchTags): push findArticlesWithTag(tag), which adds tag to the end of array and returns new length of the array
 * Check if articlesWithTags array includes current article being iterated over. If so: add "hidden" from article's classList and if not: remove "hidden" from article's classList
 * Return the article's new classList.
 */

function hideArticles() {
  if (searchTags.length === 0) {
    for (const article of document.querySelectorAll("article")) {
      article.classList.remove("hidden");
    }
    return;
  }

  const articlesWithTags = [];
  for (const tag of searchTags) {
    articlesWithTags.push(...findArticlesWithTag(tag));
  }

  /**
   * use querySelectorAll to select all articles
   * iterate over them in a for loop
   * check if articlesWithTags array does not include the current article being iterated over,
   * then add "hidden" to that article's classList
   * else, remove "hidden" from that article's classList
   */
  // write your code here
  
  for (const article of document.querySelectorAll("article")) { 
    if (!articlesWithTags.includes(article)) { 
      article.classList.add("hidden"); 
    }
    else {
      article.classList.remove("hidden"); 
    }
  }
  


}

/**
 * Creates a clickable tag button for a given search term (text). When clicked,
 * the button will remove the corresponding tag from both the DOM and the searchTags array.
 * This function also calls hideArticles to update the articles displayed after removal.
 */

/** Student Averie's Annotations for function3:
 * Create a function createTag, accepting text as a parameter.
 * Creates a new element called button.
 * Adds class "tag" to button's classList and set the textContent to text.
 * Create a remove function that removes the button.
 * If indexOf(text) doesn't equal to -1, change contents of searchTags and delete 1 item.
 * Call the hideArticles() function to update the articles displayed after removal.
 * Upon a click, the button will remove the corresponding trag from both the DOM and the searchTags array.
 */
function createTag(text) {
  /**
   * create a new element called button
   * add the class "tag" to its classList
   * set the button's textContent property to text (the passed in argument)
   */
  // write your code here

  const button = document.createElement("button");
  button.classList.add("tag");
  button.textContent=text;


  function remove() {
    button.remove();
    const index = searchTags.indexOf(text);
    if (index !== -1) {
      searchTags.splice(index, 1);
    }

    hideArticles();
  }

  /**
   * add a click event listener to the button, and set the listener to the remove function.
   * return the button element 
   */
  // write your code here

  button.addEventListener("click",remove);
  return button;
}

/** Student Averie's Annotations for function4:
 * Create function findArticlesWithTag and accept a phrase as the parameter.
 * sanitizedPhrase will convert all letters in phrase to lowercase and trim the extra whitespace at the beginning and end of the string.
 * For const tl of tagLists set tags as an array from the tl query selector that selects all li's.
 * If tag.textContent is strictly equal to sanitizedPhrase:
 * Push tl.parentElement.
 * Break the for loop.
 * Return articles.
 */

function findArticlesWithTag(phrase) {
  const articles = [];
  const sanitizedPhrase = phrase.toLowerCase().trim();
  for (const tl of tagLists) {
    const tags = Array.from(tl.querySelectorAll("li"));
    for (const tag of tags) {
      if (tag.textContent.toLowerCase().trim() === sanitizedPhrase) {
        articles.push(tl.parentElement);
        break;
      }
    }
  }

  return articles;
}

/** Student Averie's Annotations for function5:
 * Create function addSearchTerm and accept text as the parameter.
 * Add a node to the end of the list of children of the parentElement.
 * Create a text inside a tag.
 * That will be the node added to the end of the list of children of the parentElement.
 * Search Tags and push text.
 * Add specified text to the end of an array and return the new length of the array.
 * Call the hideArticles() function to show the updated articles.
 */

function addSearchTerm(text) {
  parentElement.appendChild(createTag(text));
  searchTags.push(text);
  hideArticles();
}

// Handlers

/** Student Averie's Annotations for function6:
 * Create a function onSearch(event) that defines what to do when a user presses the "Enter" key.
 * Set the input as constant and have it equal event.currentTarget, identifying element to which event handler has been attached.
 * Event.key is an array of a given object's own enumerable string-keyed property names.
 * Check if event.key is strictly equal to "Enter".
 * If so, call addSearchTerm and pass input element's value.
 * Set input value to an empty or null string.
 * If not, don't do anything yet and wait for user commmand.
 */

function onSearch(event) {
  const input = event.currentTarget;
  /**
   * If event.key equals "Enter":
   * call addSearchTerm and pass the input element's value
   * set input value to an empty string
   */
  // write your code here

  if (event.key === "Enter") { 
    addSearchTerm(input.value);
    input.value="";
  }
}

// Main function

/** Student Averie's Annotations for funtion7:
 * Create the main function
 * Call the initializeSearch function.
 * Use document.querySelector as the parameter.
 * document.querySelector will return the first element within the document that matches the group of searched-tags.
 * Obtain the user input when they type in the searchbar.
 * Use querySelector() method to return the first element within the document that matches the user input or thing the user searched.
 * Using the .addEventListener() method, upon a keypress, activate onSearch, which contains the single attribute script, running when the event is called.
 */

function main() {
  initializeSearch(document.querySelector("#searched-tags"));

  document
    .querySelector("input[type=search]")
    .addEventListener("keypress", onSearch);
}

// Execute main function
main();

/**
 * Order of execution for each event:
 * Pressing Enter: function6 -> function7 -> function3
 * Clicking to Remove a Tag: function6 -> function5 -> function2 -> function3
 * Loading the Page: function5 -> function3 -> function7
 */