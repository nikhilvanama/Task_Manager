import { Component, input } from '@angular/core';
import { TaskItem } from '../../models/task-item.model';
import { TaskListItemComponent } from '../task-list-item/task-list-item.component';

@Component({
  selector: 'app-task-list',
  imports: [TaskListItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  Heading = input.required<string>();

  Tasks = input.required<TaskItem[]>();
}
