import { Component, input } from '@angular/core';
import { TaskItem } from '../../models/task-item.model';
import { TaskListItemComponent } from '../task-list-item/task-list-item.component';

@Component({
  selector: 'app-task-list',
  imports: [TaskListItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
// Component to display a list of tasks for a specific status
export class TaskListComponent {

  Heading = input.required<string>(); // Title of the column (e.g., "Todo")

  Tasks = input.required<TaskItem[]>(); // Array of tasks to display in this list
}
