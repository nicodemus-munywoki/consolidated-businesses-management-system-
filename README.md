# Business Manager App

## Overview

The Business Manager App is a Node.js application designed to help entrepreneurs monitor and manage multiple businesses and employees collectively. With this application, entrepreneurs can create and organize employees with different roles within their business ecosystem.

## Features

- **Business Management:**
  - Create and manage multiple businesses.
  - Track industry information for each business.

- **Employee Management:**
  - Create employees with different roles (e.g., Manager, Employee).
  - Associate employees with specific businesses.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Project Structure](#project-structure)
4. [Dependencies](#dependencies)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)

## Installation

To set up the Business Manager App locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/nicodemus-munywoki/consolidated-businesses-management-system-.git
    cd business-manager-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/business_manager
    ```

4. Start the application:

    ```bash
    npm start
    ```

Visit [http://localhost:3000](http://localhost:3000) in your browser to access the application.

## Usage

The Business Manager App provides a web-based interface for managing businesses and employees. Here are the main pages:

- **Businesses:**
  - View a list of all businesses.
  - Create new businesses.

    [http://localhost:3000/businesses](http://localhost:3000/businesses)

- **Employees:**
  - View a list of all employees.
  - Create new employees.

    [http://localhost:3000/employees](http://localhost:3000/employees)

## Project Structure

The project follows a standard structure for Node.js applications:

```plaintext
business-manager-app/
|-- app.js
|-- routes/
|   |-- index.js
|   |-- businessRoutes.js
|   |-- employeeRoutes.js
|-- models/
|   |-- Business.js
|   |-- Employee.js
|-- views/
|-- |--layouts/
|-- |-- |-- mainlayout.pug
|   |-- index.pug
|   |-- businesses.pug
|   |-- employees.pug
|-- public/
|   |-- styles/
|       |-- style.css
|-- package.json
|-- .env
