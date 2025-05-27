import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  taskService = inject(TaskService);

  taskForm = new FormGroup({
    task: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),
    status: new FormControl('todo', {
      nonNullable: true
    })
  })

  get task() {
    return this.taskForm.get('task');
  }

  onSubmit() {
    const taskValue = this.taskForm.getRawValue();
    this.taskService.addTask(taskValue.task, taskValue.status); // Use the service to add the task

    console.log('Task added:', taskValue);
    this.taskForm.reset(); // Reset the form after submission
  }
}
