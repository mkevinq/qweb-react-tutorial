const axios = require('axios');

// Base URL for the API
var baseUrl = "https://api.spoonacular.com";

function getRequest(path, options) {
    // Add your API key here
    // This is here for ease of use
    // Never expose your API keys in your source code, or show your API key to other people
    // Look up how to use environment variables in Node.js, or check out the "dotenv" package
    options.apiKey = 'aBunchOfRandomLettersAndNumbers'

    return axios.get(baseUrl + path, { params: options });
}

exports.searchRecipes = function (query) {
    // Options for the "Search Recipes" endpoint
    let options = {
        query: query,
        number: 20
    }

    // Return the search results
    return getRequest("/recipes/complexSearch", options);

    // Return dummy data
    // If you're using this dummy data, make sure to comment out the other return statement and check searchRecipes in App.js
    // return [{"id":716426,"title":"Cauliflower, Brown Rice, and Vegetable Fried Rice","calories":745,"image":"https://spoonacular.com/recipeImages/716426-312x231.jpg","imageType":"jpg","index":0},{"id":715594,"title":"Homemade Garlic and Basil French Fries","calories":331,"image":"https://spoonacular.com/recipeImages/715594-312x231.jpg","imageType":"jpg","index":1},{"id":715497,"title":"Berry Banana Breakfast Smoothie","calories":741,"image":"https://spoonacular.com/recipeImages/715497-312x231.jpg","imageType":"jpg","index":2},{"id":644387,"title":"Garlicky Kale","calories":1674,"image":"https://spoonacular.com/recipeImages/644387-312x231.jpg","imageType":"jpg","index":3},{"id":715392,"title":"Chicken Tortilla Soup (Slow Cooker)","calories":117,"image":"https://spoonacular.com/recipeImages/715392-312x231.jpg","imageType":"jpg","index":4},{"id":716268,"title":"African Chicken Peanut Stew","calories":1328,"image":"https://spoonacular.com/recipeImages/716268-312x231.jpg","imageType":"jpg","index":5},{"id":716381,"title":"Nigerian Snail Stew","calories":1458,"image":"https://spoonacular.com/recipeImages/716381-312x231.jpg","imageType":"jpg","index":6},{"id":782601,"title":"Red Kidney Bean Jambalaya","calories":1719,"image":"https://spoonacular.com/recipeImages/782601-312x231.jpg","imageType":"jpg","index":7},{"id":794349,"title":"Broccoli and Chickpea Rice Salad","calories":1936,"image":"https://spoonacular.com/recipeImages/794349-312x231.jpg","imageType":"jpg","index":8},{"id":715446,"title":"Slow Cooker Beef Stew","calories":1600,"image":"https://spoonacular.com/recipeImages/715446-312x231.jpg","imageType":"jpg","index":9},{"id":715415,"title":"Red Lentil Soup with Chicken and Turnips","calories":382,"image":"https://spoonacular.com/recipeImages/715415-312x231.jpg","imageType":"jpg","index":10},{"id":766453,"title":"Hummus and Za'atar","calories":1074,"image":"https://spoonacular.com/recipeImages/766453-312x231.jpg","imageType":"jpg","index":11},{"id":716627,"title":"Easy Homemade Rice and Beans","calories":194,"image":"https://spoonacular.com/recipeImages/716627-312x231.jpg","imageType":"jpg","index":12},{"id":716408,"title":"Greek-Style Baked Fish: Fresh, Simple, and Delicious","calories":1901,"image":"https://spoonacular.com/recipeImages/716408-312x231.jpg","imageType":"jpg","index":13},{"id":795751,"title":"Chicken Fajita Stuffed Bell Pepper","calories":1392,"image":"https://spoonacular.com/recipeImages/795751-312x231.jpg","imageType":"jpg","index":14},{"id":640941,"title":"Crunchy Brussels Sprouts Side Dish","calories":583,"image":"https://spoonacular.com/recipeImages/640941-312x231.jpg","imageType":"jpg","index":15},{"id":798400,"title":"Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant","calories":822,"image":"https://spoonacular.com/recipeImages/798400-312x231.jpg","imageType":"jpg","index":16},{"id":756814,"title":"Powerhouse Almond Matcha Superfood Smoothie","calories":1066,"image":"https://spoonacular.com/recipeImages/756814-312x231.jpg","imageType":"jpg","index":17},{"id":729366,"title":"Plantain Salad","calories":1628,"image":"https://spoonacular.com/recipeImages/729366-312x231.jpg","imageType":"jpg","index":18},{"id":715769,"title":"Broccolini Quinoa Pilaf","calories":902,"image":"https://spoonacular.com/recipeImages/715769-312x231.jpg","imageType":"jpg","index":19}];
}
