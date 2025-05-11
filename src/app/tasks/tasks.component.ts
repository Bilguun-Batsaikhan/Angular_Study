import { Component, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';

import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';

// this is a service class I've implemented, therefore it needs to be instantiated "private tasksService = new TasksService()", however, this approach will create different instance for different components. Therefore, it's not recommended.
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // constructor is a special type of method which runs whenever the class is instantiated. In Angular whenever a component used the instantiation happens automatically. By specifying the dependencies in the constructor, DI happens automatically by Angular
  constructor(private tasksService: TasksService) {}

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;

  isTaskDialogueClosed: boolean = false;

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string) {
  //   this.tasksService.removeTask(id);
  // }

  onClickAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    // will remove <app-new-tasks> component
    this.isAddingTask = false;
  }
  // just adding new task to the dummy_tasks array
  // onAddTask(task: NewTaskData) {
  //   // if I want to add it to the beginning of the array use "unshift()"
  //   this.tasksService.addTask(task, this.userId);
  //   this.isAddingTask = false;
  // }
}
