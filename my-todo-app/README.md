# Todo Application

## Lesson: React UI Components

This project is a practical implementation of integrating React UI components to build a dynamic and interactive Todo application.

### Overview

The Todo application allows users to add tasks with associated information, duration, and price. Tasks can be marked as complete, and additional information can be viewed by clicking an info button. A modal provides feedback on task completion status.

### Key Concepts

1. **Component-Based Architecture**:
   - The application is divided into reusable components: `App`, `AddTodo`, `TodoList`, `TodoItem`, and `Modal`.
   - Each component handles specific functionality, promoting clean and maintainable code.

2. **State Management**:
   - State is managed using the `useState` hook.
   - State and functions are passed as props to child components for interaction.

3. **Event Handling**:
   - Form submission in `AddTodo` captures user input.
   - Click events in `TodoItem` handle task completion, info display, and deletion.

4. **Conditional Rendering**:
   - Additional task info is conditionally rendered in `TodoItem`.
   - The `Modal` component conditionally displays messages based on task completion.

5. **Styling and Layout**:
   - CSS flexbox is used for layout, ensuring elements are properly spaced.
   - Dynamic styling changes the appearance of tasks based on their status.

### Project Structure
