import React, { useState } from 'react';
import spoon from './spoonacularApi';
import RecipeCard from './RecipeCard.js';
import Filter from './Filter.js';
import './App.css';

function App() {
  // items is an array of objects (each object is a search result for a recipe)
  const [items, setItems] = useState([]);

  // These are variables that will be used to filter items in the "items" array
  const [filterTerm, setFilterTerm] = useState("");
  const [filterMinCal, setFilterMinCal] = useState(NaN);
  const [filterMaxCal, setFilterMaxCal] = useState(NaN);

  // Event handler when the user presses a key in the search box
  function searchRecipes(event) {
    if (event.key === "Enter") {
      // When the user presses enter, do a search using the API
      spoon.searchRecipes(event.target.value)
      .then((response) => {
        // This code block will run when the Promise is fulfilled
        // This map method will insert a property called "index" inside each object in the array
        let data = response.data.results.map((item, index) => {
          item.index = index;
          return item;
        })
        setItems(data);
      })
      .catch((error) => {
        // This code block will run when the Promise is rejected
        console.log(error);
      });

      // If you're using the dummy dataset, comment out the above block, and uncomment this setItems() call
      // The search term used will obviously be useless if you use the dummy set
      // setItems(spoon.searchRecipes(event.target.value));
    }
  }

  // Event handler for when the user changes the contents of the textbox for the filter term
  function filterByTerm(event) {
    setFilterTerm(event.target.value.toLowerCase());
  }

  // Event handler for when the user changes the contents of the textbox for the minimum calories
  function filterByMinCal(event) {
    setFilterMinCal(parseInt(event.target.value));
  }

  // Event handler for when the user changes the contents of the textbox for the maximum calories
  function filterByMaxCal(event) {
    setFilterMaxCal(parseInt(event.target.value));
  }

  // This is what will actually render on screen
  return (
    <div className="App">
      <h1>Search for food:</h1>
      <input type="text" placeholder="Pasta" onKeyDown={searchRecipes}></input>

      { /*
      This is one example of conditional rendering. There are many other ways of accomplishing this.
      If we don't have any search results, then this whole block will not render.
      */ }
      { (items.length !== 0) &&
        <>
          <div className="filter-bar">
            <Filter name="Term" placeholder="Garlic" callback={filterByTerm} />
            <Filter name="Min calories" placeholder="Min" callback={filterByMinCal} />
            <Filter name="Max calories" placeholder="Max" callback={filterByMaxCal} />
          </div>

          <div className="list">
            {
              // This filters the items by filter term, min and max calories, then maps the filtered items to a component
              items.filter((item) => item.title.toLowerCase().includes(filterTerm))
              .filter((item) => isNaN(filterMinCal) ? true : item.calories >= filterMinCal)
              .filter((item) => isNaN(filterMaxCal) ? true : item.calories <= filterMaxCal)
              .map((item) => (<RecipeCard key={item.index} title={item.title} image={item.image} calories={item.calories} />))
              // Note the "key" prop above. This is an important prop when rendering lists of components. https://reactjs.org/docs/lists-and-keys.html
            }
          </div>
        </>
      }
    </div>
  );
}

export default App;
