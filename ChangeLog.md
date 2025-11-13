Project: Chef Christoffel’s Menu Management App
Student: Joshua Cadulay Murugan
Student Number: ST10497889
Date: 13/11/2025
Version:(Final PoE Version)
Overview

This update refactors and enhances the original React Native (TypeScript) menu app to meet all the final PoE requirements. The new version introduces a clearer screen structure, new features, and smoother functionality for both chefs and guests.

The application now includes:

 - A dedicated screen for managing the menu (adding and removing items).

 - A guest filter screen to view dishes by course.

 - Display of the average price for each course.

 - Improved navigation and data handling across screens.

1️ Added Features

Filter Screen:
A new screen named FilterScreen.tsx was added to allow guests to view menu items by course. Guests can choose to see only Starters, Mains, or Desserts. A reset option allows returning to the full menu view.

Remove Functionality:
The chef can now delete unwanted dishes directly from the menu list. This feature helps manage and update the menu easily.

Average Price Display:
The Home screen now shows the average price of dishes for each course — Starters, Mains, and Dessert. This provides useful insight into menu pricing at a glance.

2️ Changes Made

App.tsx:
The main application file was refactored to store all menu items in a centralized array. This allows all screens (Home, Manage Menu, Filter) to access the same data.
Navigation was updated to include the new Filter screen.
Screen props were retyped to ensure TypeScript compatibility.

HomeScreen.tsx:
The feature to add menu items was removed from the Home screen and moved to the new Manage Menu screen.
The Home screen now displays the complete menu, the total number of dishes, and the average price per course.
A new button was added to navigate to the Filter screen.
A remove option was introduced next to each dish for the chef to delete items from the menu.

ManageMenuScreen.tsx:
This screen now handles only adding new dishes to the menu.
It uses the centralized data array from App.tsx and passes the new dish data back to the Home screen.

MenuList.tsx:
The component was updated to include an optional Remove button.
This allows the same list component to be reused both on the Home and Filter screens, ensuring consistent design.

3️ Fixed Issues

Filter Button Bug:
Previously, selecting a filter did not change the displayed items. This has been fixed so that only dishes belonging to the selected course appear on the Filter screen.

Navigation Errors:
Fixed white-screen and crash issues caused by incorrect parameter passing between screens. Navigation props were properly typed and structured.

Animation Conflicts:
Simplified and optimized animations to ensure smooth rendering on both mobile and web builds.

4️ Code Refactoring and Improvements

The project was restructured into smaller, more reusable components.
The MenuItem interface is now used consistently across all files for type safety.
Variable names were standardized, and redundant logic was removed.
All state management related to the menu was centralized in App.tsx to make the app easier to debug and maintain.

5️ How Requirements Were Met

- The app now has a separate Manage Menu screen for adding and removing menu items.

 - The Home screen displays the full menu and shows the average price per course.

 - All menu data is stored in a single array in memory, as required.

 - A Remove button allows the chef to delete items.

 - The Filter screen allows guests to filter by course (Starters, Mains, Dessert).

 - The app’s codebase has been refactored into multiple files for better readability and maintenance.

