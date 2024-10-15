# Online Shop Project

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [API Integration](#api-integration)
- [Technologies Used](#technologies-used)
- [Demo](#demo)
- [Future Improvements](#future-improvements)
- [Credits](#credits)
- [License](#license)

## Overview

The **Online Shop Project** is a React-based web application that simulates an e-commerce shopping experience. It demonstrates key React concepts such as component-based architecture, state management, routing, and interaction with external APIs. Users can browse products, add items to a cart, and adjust quantities before proceeding to checkout.

## Features

- **Home Page**:

  - A welcoming page with images and general information about the shop.
  - Simple design to introduce users to the shop and navigation.

- **Shop Page**:

  - Displays a list of categories fetched from the [FakeStore API](https://fakestoreapi.com/).
  - Each category contains a list of products presented in cards for a more refined shopping experience.
  - Each product is presented in individual cards, showing the title, image, and price.
  - Includes an “Add To Cart” button for easy shopping.

- **Shopping Cart**:

  - Shows a real-time summary of items added to the cart.
  - Users can modify the quantity of products from the cart.
  - A navigation bar displays the current number of items in the cart.

- **Navigation Bar**:

  - Present on all pages.
  - Displays the number of items currently in the cart.
  - Provides easy access to the cart for checkout.

- **Responsive Design**:
  - Fully responsive layout ensuring usability across a variety of devices.

## API Integration

- **FakeStore API**:  
  Product data such as titles, prices, and images are fetched from the [FakeStore API](https://fakestoreapi.com/), providing a realistic set of products for the shop.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For handling page navigation.
- **React Context**: For state management across components.
- **CSS Modules**: For styling components in a modular way.
- **Bootstrap**: For styling the navigation bar and enhancing the overall design.
- **FakeStore API**: To fetch dynamic product data.

## Demo

![Demo Screenshot 1](./public/images/1.jpeg)

This screenshot showcases the store page, highlighting the three main categories and the cart icon in the navigation bar, with some products added to the cart.

## Future Improvements

- Add checkout and payment functionality.
- Improve UI/UX design with more animations and feedback.
- Implement user authentication to save carts for different users.
- Add React Testing for writing unit and integration tests.

## Credits

- This project was developed as part of a course assignment from **The Odin Project**.
- This application utilizes resources from the **FakeStore API** for product data and **React Testing Library** for testing components.

## License

This project is licensed under the **MIT License**.
©2024 Pro-boost. All rights reserved.
