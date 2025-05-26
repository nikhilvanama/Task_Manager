import { Component, computed, input, inject } from '@angular/core';
import { TaskItem } from '../../models/task-item.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list-item',
  imports: [],
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css'
})
export class TaskListItemComponent {
  taskItem = input.required<TaskItem>();

  statusOptions = ['todo', 'inprogress', 'completed'];

  taskService = inject(TaskService);

  action = computed(() => {
    const TaskItemValue = this.taskItem();

    return this.statusOptions.filter(x => x !== TaskItemValue.status);
  })

  markAs(text: string, updatestatus: string) {
    this.taskService.markAsStatus(text, updatestatus);
  }
}
