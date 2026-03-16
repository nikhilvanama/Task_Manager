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

## Technical Details

*   **Framework**: Angular 19
*   **Styling**: Tailwind CSS 4.0
*   **Typography**: Inter
*   **Component Architecture**: Signal-based inputs and computed properties for high performance.
