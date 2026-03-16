# 📝 TaskFlow – Modern Angular Task Manager

A premium, visually stunning, and highly interactive Task Manager built with Angular and Tailwind CSS 4.0.

## 🔗 Live Application Link

https://task-manager-zeta-wheat.vercel.app/

## ✨ Latest Update: Modern UI Overhaul

The application has been completely redesigned with a focus on premium aesthetics and user experience:

*   **Design System**: Powered by **Tailwind CSS 4.0** and the **Inter** font family for a professional look.
*   **Glassmorphism**: Sleek, translucent containers with blur effects.
*   **Interactive Cards**: Task items now feature hover-based action buttons and color-coded status indicators.
*   **Responsive Grid**: A dynamic layout that adapts seamlessly to desktop, tablet, and mobile devices.
*   **Micro-animations**: Subtle transitions and hover effects for a premium feel.

## Features

*   **Create Tasks**: Easily add tasks with custom names and initial status.
*   **Visual Organization**: View tasks grouped into To-Do, In Progress, and Completed columns.
*   **One-Click Transitions**: Move tasks between states instantly with intuitive action icons.
*   **Real-time Updates**: Changes are reflected across the UI immediately via Angular signals/services.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/nikhilvanama/Angular_routine.git
cd Angular_routine/task-manager
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser.

## Project Structure and Feature Usage

| Feature                   | Angular Concept     | Description                                                                                                                              |
| ------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Task State Management** | `Service`           | Used to store and update tasks globally. The service is injected into components using Angular's dependency injection.                   |
| **Task Model**            | `Interface (Model)` | Created a `Task` model to define the shape of the data (e.g., `{ task: string, status: string }`). Ensures strong typing across the app. |
| **Individual Task UI**    | `Component`         | Each task is rendered by a `TaskListItemComponent`, featuring a design with status-aware indicators and interactive icons.                |
| **Task Form**             | `Component`         | The `TaskFormComponent` handles task creation using premium glassmorphism styling and validation.                                         |
| **Status Containers**     | `Component`         | The `TaskListComponent` displays tasks in structured columns with dynamic count badges.                                                  |
| **Main Wrapper**          | `AppComponent`      | Hosts the modern header and the responsive grid layout.                                                                                  |

---

## Folder Structure

```
task-manager/
│
├── src/
│   ├── app/
│   │   ├── models/
│   │   │   └── task-item.model.ts       # Task interface definition
│   │   ├── services/
│   │   │   └── task.service.ts          # Task state service
│   │   ├── components/
│   │   │   ├── task-list-item/          # TaskListItemComponent
│   │   │   ├── task-form/               # TaskFormComponent
│   │   │   └── task-list/               # TaskListComponent
│   │   └── app.component.ts             # Main app wrapper
│   │
│   └── main.ts
├── angular.json
└── package.json
```

## How It Works

1.  **Add a Task:**
    *   Enter a task name in the "New Task" card.
    *   The task is instantly distributed to the appropriate status column.

2.  **Manage States:**
    *   Hover over any task to see potential status transitions.
    *   Click an icon (Move to In Progress, Complete, etc.) to shift the task state.

3.  **Automatic Reflow:**
    *   The responsive grid automatically adjusts columns based on your screen size.

## 🏗️ Project Architecture & Usage Guide

TaskFlow is designed with a **Component-Driven Architecture** and **Unidirectional Data Flow**.

### Core Architecture
The app centers around a centralized **TaskService** that acts as the "Source of Truth" for all task-related data. 

1.  **Data Management**: The `TaskService` holds a reactive list of tasks. Any component that needs to read or modify tasks interacts directly with this service.
2.  **Layout**: The `AppComponent` defines the global structure (Header + Main Grid). It listens to the service and distributes filtered task lists to the column components.
3.  **Encapsulation**: Each component is responsible for a specific UI slice, ensuring a clean separation of concerns.

### How Components Work Together

#### 📝 TaskFormComponent
*   **Purpose**: Handles user input for new tasks.
*   **Usage**: Uses a `ReactiveForm` with validation to capture the task name and initial status.
*   **Interaction**: Upon submission, it calls `taskService.addTask()`. It doesn't need to know about the lists; it simply sends data to the central store.

#### 📊 TaskListComponent
*   **Purpose**: Represents a single status column (e.g., "In Progress").
*   **Usage**: Receives a title (`Heading`) and a list of tasks (`Tasks`) via Angular inputs.
*   **Logic**: It iterates over the tasks and renders an `app-task-list-item` for each. It also handles the "Empty" state visual.

#### 🗂️ TaskListItemComponent
*   **Purpose**: The individual task card.
*   **Usage**: Displays the task name, a status badge, and dynamic action buttons.
*   **Logic**: It uses a `computed` property to determine which status icons to show (excluding its own current status).
*   **Interaction**: When an icon is clicked, it calls `taskService.markAsStatus()`, which updates the global state and automatically triggers a UI reflow.

### Feature Workflow
*   **Adding**: Form -> Service -> Signal Update -> UI Reflow in all Columns.
*   **Moving**: Item Icon Click -> Service Update -> UI Reflow (task "jumps" to the correct column).
*   **Responsiveness**: The grid system uses CSS Grid to stack columns on mobile and expand on desktop, ensuring a premium experience on any device.

---

## Technical Details

*   **Framework**: Angular 19
*   **Styling**: Tailwind CSS 4.0 (utilizing the latest @theme and CSS variables features)
*   **Component Architecture**: Signal-based inputs and computed properties for high performance and reactivity.
*   **Typography**: Inter (imported via Google Fonts)
