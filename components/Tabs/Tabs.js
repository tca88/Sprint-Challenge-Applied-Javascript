class TabLink {
  constructor(tab){
    // assign this.tabElement to the tabElement DOM reference
    this.tab = tab;
    
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = document.querySelector(`.tab[data-tab='${this.tab.dataset.tab}']`);
    // console.log(this.tabData);
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    // Check to see if this.tabData is equal to 'all'
    if(this.tabData.getAttribute('data-tab') === 'all'){
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.card');
    } else {
      // console.log(document.querySelectorAll(`.card[data-tab='${this.tab.dataset.tab}']`));
      this.cards = document.querySelectorAll(`.card[data-tab='${this.tab.dataset.tab}']`);
    }
     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.cards = Array.from(this.cards).map(function(card){
      return new TabCard(card);
    });
    // console.log(this.cards);
    // Add a click event that invokes this.selectTab
    // this.tabElement.addEventListener();
    this.tab.addEventListener('click', () => this.selectTab());
  }

  selectTab(){
    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(function(tab){
      tab.classList.remove('active-tab');
    });
    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card');
    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(function(card){
      card.style.display = 'none';
    });
    
    // Add a class of ".active-tab" to this.tabElement
    this.tab.classList.add('active-tab');
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    console.log(this.cards);
    this.cards.forEach(card => card.selectCard());
  }
}
class TabCard {
  constructor(card){
    // Assign this.cardElement to the cardElement DOM reference
    this.card = card;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    console.log(this.card);
    this.card.style.display = 'flex';
  }
}
/* START HERE: 
- Select all classes named ".tab" and assign that value to the tabs variable
- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList
- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter
*/

let tabs = document.querySelectorAll('.tab');
// console.log(tabs);

tabs.forEach(function(tab){
  return new TabLink(tab);
});