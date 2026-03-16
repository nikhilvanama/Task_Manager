import { Injectable, signal } from '@angular/core';
import { TaskItem } from '../models/task-item.model';

@Injectable({
  providedIn: 'root'
})
// Centralized service for managing task state across the application
export class TaskService {

  tasks = signal<TaskItem[]>([]); // Reactive signal holding the list of tasks

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
