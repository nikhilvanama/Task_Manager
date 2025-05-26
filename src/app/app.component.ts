import { Component,computed,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskService } from './services/task.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskFormComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
 taskService = inject(TaskService);

 tasks = this.taskService.tasks;

 todoItems = computed(()=> {
  const tasks = this.tasks();
  return tasks.filter(task => task.status === 'todo');
 })

  inProgress = computed(()=> {
  const tasks = this.tasks();
  return tasks.filter(task => task.status === 'inprogress');
 })

  Completed = computed(()=> {
  const tasks = this.tasks();
  return tasks.filter(task => task.status === 'completed');
 })

}
