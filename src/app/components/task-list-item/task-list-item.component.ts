import { Component, computed, input, inject } from '@angular/core';
import { TaskItem } from '../../models/task-item.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list-item',
  imports: [],
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css'
})
// Individual task card component with status action buttons
export class TaskListItemComponent {
  taskItem = input.required<TaskItem>(); // The task data object

  statusOptions = ['todo', 'inprogress', 'completed'];

  taskService = inject(TaskService); // Service for updating task status

  action = computed(() => { // Calculate available status changes (filtering out current)
    const TaskItemValue = this.taskItem();

    return this.statusOptions.filter(x => x !== TaskItemValue.status);
  })

  markAs(text: string, updatestatus: string) { // Trigger status update in service
    this.taskService.markAsStatus(text, updatestatus);
  }
}
