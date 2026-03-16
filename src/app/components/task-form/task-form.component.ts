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
// Component for creating new tasks with name and initial status
export class TaskFormComponent {

  taskService = inject(TaskService); // Inject TaskService for state management

  taskForm = new FormGroup({ // Reactive form for task input
    task: new FormControl('', {
      nonNullable: true,
      validators: Validators.required // Task name is mandatory
    }),
    status: new FormControl('todo', {
      nonNullable: true
    })
  })

  get task() {
    return this.taskForm.get('task');
  }

  onSubmit() { // Handle form submission
    const taskValue = this.taskForm.getRawValue();
    this.taskService.addTask(taskValue.task, taskValue.status); // Add task via service
    console.log('Task added:', taskValue);
    this.taskForm.reset(); // Clear form after success
  }
}
