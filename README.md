Here’s a detailed `README.md` file for your Angular Task Manager app:


# 📝 Task Manager – Angular App

This project is a simple yet efficient Task Manager built using Angular. It allows users to create tasks with a name and status (`Todo`, `Inprogress`, or `Completed`), displays them in their respective status containers, and enables status transitions.

## 🔗 Live Application Link

https://task-manager-zeta-wheat.vercel.app/


## Features

* Create tasks with a title and initial status
* View tasks grouped by status
* Change the status of a task anytime
* Reusable components for better maintainability
* Centralized task management using Angular services

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
| **Individual Task UI**    | `Component`         | Each task is rendered by a `TaskComponent`, which receives the task data and provides an option to change its status.                    |
| **Task Form**             | `Component`         | The `TaskFormComponent` handles task creation using Angular forms.                                                                       |
| **Status Containers**     | `Component`         | The `TaskContainerComponent` displays tasks based on their current status (`Todo`, `Inprogress`, `Completed`).                           |
| **Main Wrapper**          | `AppComponent`      | Hosts all components and wires them together.                                                                                            |

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
│   │   │   └── task.service.ts     # Task state service
│   │   ├── components/
│   │   │   ├── task-list-item/     # TaskListItemComponent
│   │   │   ├── task-form/          # TaskFormComponent
│   │   │   └── task-list/          # TaskListComponent
│   │   └── app.component.ts        # Main app wrapper
│   │
│   └── main.ts
├── angular.json
└── package.json
```

## How It Works

1. **Add a Task:**

   * Enter a task name and choose a status from the dropdown (`Todo`, `Inprogress`, `Completed`).
   * Task is added to the global service.

2. **Display Tasks by Status:**

   * The service filters tasks by their status.
   * Each container component displays tasks belonging to one status.

3. **Change Task Status:**

   * A dropdown within each task lets you change the task's status.
   * The component triggers the service to update the status, which then re-renders the UI.


## Angular Concepts in Use

* **Component Communication**: `@Input()` and `@Output()` used between child and parent components.
* **Service Injection**: Angular's DI is used to share a single task service across the app.
* **Reactive Updates**: The task list is automatically refreshed when the service state changes.
* **Form Handling**: The form component captures user input using Angular’s template-driven or reactive forms.
