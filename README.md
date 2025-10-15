# WanderLust

WanderLust is a Node.js web application for listing and browsing travel accommodations. It uses Express, Mongoose, and EJS for server-side rendering and MongoDB for data storage.

## Features

- View all listings
- Add new listings
- Edit and delete listings
- Responsive UI with Bootstrap
- Sample data initialization

## Project Structure

```
app.js
package.json
init/
  data.js
  index.js
models/
  listing.js
public/
  css/
    style.css
views/
  includes/
    footer.ejs
    navbar.ejs
  layouts/
    boilerplate.ejs
  listings/
    edit.ejs
    index.ejs
    new.ejs
    show.ejs
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository.
2. Install dependencies:

   ```sh
   npm install
   ```

3. Start MongoDB server locally.

### Initialize Sample Data

To seed the database with sample listings, run:

```sh
node init/index.js
```

### Run the Application

```sh
node app.js
```

The server will start on [http://localhost:8080](http://localhost:8080).

## Usage

- Visit `/listings` to view all listings.
- Click "New Listing" to add a new accommodation.
- Edit or delete listings from their detail page.

## Technologies Used

- Express
- Mongoose
- EJS & EJS-Mate
- Bootstrap
- Font Awesome

## License

ISC

## Author

Abhirup