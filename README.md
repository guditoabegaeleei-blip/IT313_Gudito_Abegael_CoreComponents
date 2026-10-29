IT313 React State & Hooks — Lab Timer & Practice Tracker

Problem

This project is a small React Native app for tracking solved practice problems and the time spent during a laboratory session.

Approach

The app uses useState to manage the solved count and running state.
A custom useStopwatch hook uses useEffect and setInterval to count the seconds.

The cleanup function uses clearInterval to properly stop the timer when it is stopped or unmounted.

Conditional rendering is used for the Great job! message and the Running... or Paused status.

State is lifted to LabScreen so that PracticeTracker and Stopwatch can share the same state.

Main Components

LabScreen — manages the shared state.

PracticeTracker — displays and updates the solved count.

Stopwatch — displays the elapsed time and status.

useStopwatch — handles the stopwatch logic.

How to Run

Open the project in VS Code.

Open the terminal in the project folder.

Run:

npx expo start

Open Expo Go on a mobile device.

Scan the QR code.

Test the Solve +1, Reset, Start, and Stop buttons.

Requirements Demonstrated

useState

useEffect

Effect dependency array

Cleanup with clearInterval

Conditional rendering

Event handling

Lifting state up

Custom hooks
