/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


const header = document.querySelector(".header")


function createMenu([]){
  //Array.forEach
  [].forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    list.appendChild("li");
  })
  //Class Elements
  const menu = document.createElement("div")
  const ul = document.createElement("ul")

  //Class Structure
  menu.appendChild(ul)

  //Class Names
  menu.classList.add("menu")
 
  const menuButton = document.querySelector(".menu-button")
  menuButton.addEventListener("click", () => {
  menu.classList.toggle("menu--open")
  })


/* 
  Step 1: Write a function that will create a menu component as seen below:
  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
  The function takes an array as its only argument.
  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>
  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  Step 5: return the menu component.
  Step 6: add the menu component to the DOM.
*/



  const li = document.createElement("li")
  const li1 = document.createElement("li")
  const li2 = document.createElement("li")
  const li3 = document.createElement("li")
  const li4 = document.createElement("li")

   //Text Content
   li.textContent = "Students"
   li1.textContent = "Faculty"
   li2.textContent = "Tech Trends"
   li3.textContent = "Music"
   li4.textContent = "Log Out"
   //

   ul.appendChild(li)
   ul.appendChild(li1)
   ul.appendChild(li2)
   ul.appendChild(li3)
   ul.appendChild(li4)

  return menu
}

header.appendChild(createMenu(menuItems[menuItems.length - 1]))

