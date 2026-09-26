# IT313 Components and JSX

## Problem

The task is to create a React Native student roster screen using reusable components and JSX. Each student is displayed using a StudentCard component, while the StudentRoster component manages the student data and renders the cards.

## Component Structure

### StudentCard

StudentCard is a reusable functional component that receives name, course, units, and isFullLoad as props. The props are destructured in the function parameter and displayed using JSX.

The Full Load label is conditionally displayed using the && operator when isFullLoad is true.

### StudentRoster

StudentRoster is the parent component. It contains the student data and uses the map() method to render one StudentCard for every student.

Each card uses the student's unique id as the key.

The total number of students is displayed using a JSX expression based on the length of the students array.

## Key Experiment

The array index was temporarily used as the key while reversing the roster. Although the simple cards may still appear to update correctly, index keys can cause component identity problems when list items are reordered, inserted, or removed. The stable student id was restored as the key.

## How to Run

1. Open the project folder.
2. Start Expo:

npx expo start

3. Scan the QR code using Expo Go or run the project using an emulator.
