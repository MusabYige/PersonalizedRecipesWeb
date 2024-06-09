
# PersonalizedRecipes
A recipe web project with a membership and authentication mechanism that offers random recipes for now and aims to bring personalized recipes in the future.
This project is a platform where users can view recipes fetched from an external API. Users can see recipe details, including ingredients and instructions.

## Features

- User registration and login
- JWT-based authentication
- Dynamic page rendering with EJS
- Fetching recipes from an external API

## Installation

To run this project on your local machine, follow these steps:

### Requirements

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

### Steps

1. Clone the repository
    ```bash
    git clone https://github.com/MusabYige/PersonalizedRecipesWeb.git
    ```

2. Navigate to the project directory
    ```bash
    cd PersonalizedRecipesWeb
    ```

3. Install the necessary packages
    ```bash
    npm install
    ```

4. Update app.js and change your MongoDB connection URL
    ```env
    DB_URI=YOUR_DB_URL_HERE
    ```

5. Start the application
    ```bash
    node app.js
    ```

6. Open your browser and go to `http://localhost:3000`

## Usage

- On the homepage, you will see a list of recipes fetched from an external API.
- To view recipe details, click on a recipe from the list. A modal will appear with detailed information.

## Contributing

If you would like to contribute, please open an issue to discuss what you would like to change. You can fork the repository, make your changes in a new branch, and create a pull request to propose your changes.

## License

This project is licensed under the MIT License. For more information, see the `LICENSE` file.

## Project Structure

PersonalizedRecipesWeb/
│
├── public/
│ ├── css/
│ ├── js/
│ └── images/
│
├── routes/
│ └── authRoutes.js
│
├── views/
│ ├── home.ejs
│ ├── recipes.ejs
│ └── partials/
│ ├── header.ejs
│ └── footer.ejs
│
├── middleware/
│ ├── authMiddleware.js
│
├── models/
│ └── User.js
│
├── controllers/
│ └── authController.js
│
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
