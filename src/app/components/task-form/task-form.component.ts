import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  taskService = inject(TaskService);

  taskForm = new FormGroup({
    task: new FormControl('', {
      nonNullable: true
    }),
    status: new FormControl('todo', {
      nonNullable: true
    })
  })

  onSubmit() {
    const taskValue = this.taskForm.getRawValue();
    this.taskService.addTask(taskValue.task, taskValue.status); // Use the service to add the task

    console.log('Task added:', taskValue);
    this.taskForm.reset(); // Reset the form after submission
  }
}
