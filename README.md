# Movie Sagas

## Description

Create an app that will display all movies stored in the database. The first view will show all movies with a title, description, and photo. When the photo is clicked, the user should be brought to a page that displays more information. From this view, the user will be allowed to edit a movie's title and/or description how they see fit.

## Setup

Create a database named `saga_movies_weekend`, then create and insert items in the `database.sql` file. Once completed, run the following commands in your terminal.

```
npm install
npm run server
npm run client
```

> A junction table has not been included. You will need to create a junction table for the `movies` and `genres` tables.

## Technologies Used

- React
- Node
- Axios
- SQL
