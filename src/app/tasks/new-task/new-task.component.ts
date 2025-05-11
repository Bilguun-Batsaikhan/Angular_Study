import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  // FormsModule is imported here to use ngModel for two-way data binding. Also this is a form Angular's form component which takes control of form tag and prevents default form submission. When form is submitted, it will emit (ngSubmit) an event which can be listened to in the parent component.
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() closeAddTask = new EventEmitter();
  // @Output() addNewTask = new EventEmitter<NewTaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  // same as using constructor
  private tasksService = inject(TasksService);

  onClosingTask() {
    this.closeAddTask.emit();
  }

  // onSubmitTask() {
  //   this.addNewTask.emit({
  //     title: this.enteredTitle,
  //     summary: this.enteredSummary,
  //     date: this.enteredDate,
  //   });
  // }

  onSubmitTask() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.closeAddTask.emit();
  }
}
