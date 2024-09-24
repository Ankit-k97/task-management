import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../../models/task.mode';
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  private taskService = inject(TaskService);

  complete() {
    this.taskService.removeTask(this.task.id);
  }
}
