import { Injectable, signal } from '@angular/core';
import { TaskItem } from '../models/task-item.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = signal<TaskItem[]>([]);

  addTask(task: string, status: string) {
    this.tasks.update((previousState) => {
      return [...previousState, { task, status }];
    })
  }

markAsStatus(text: string, updatestatus: string) {
  this.tasks.update((existingCollection) => {
    const findTask = existingCollection.find((item) => item.task === text);

    if (findTask) {
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
