import { Injectable, signal, effect } from '@angular/core';
import { TaskItem } from '../models/task-item.model';

@Injectable({
  providedIn: 'root'
})
// Centralized service for managing task state across the application
export class TaskService {

  // Load initial tasks from session storage or default to empty array
  private storageKey = 'taskflow_tasks';
  tasks = signal<TaskItem[]>(this.loadTasks());

  constructor() {
    // Automatically save tasks to session storage whenever the signal changes
    effect(() => {
      sessionStorage.setItem(this.storageKey, JSON.stringify(this.tasks()));
    });
  }

  private loadTasks(): TaskItem[] {
    const savedTasks = sessionStorage.getItem(this.storageKey);
    return savedTasks ? JSON.parse(savedTasks) : [];
  }

  addTask(task: string, status: string) { // Create and add a new task to the collection
    this.tasks.update((previousState) => {
      return [...previousState, { task, status }];
    })
  }

  markAsStatus(text: string, updatestatus: string) { // Update status of an existing task by its name
    this.tasks.update((existingCollection) => {
      const findTask = existingCollection.find((item) => item.task === text);

      if (findTask) {
        // Return new collection with the updated task
        return [
          ...existingCollection.filter((item) => item.task !== text),
          { task: text, status: updatestatus },
        ];
      } else {
        return existingCollection;
      }
    });
  }
}
