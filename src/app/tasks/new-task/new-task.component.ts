import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Output() Close = new EventEmitter<boolean>();
  @Input({ required: true }) id!: string;
  private taskService = inject(TaskService);

  enteredTitle = '';
  enteredSummary = '';
  enterDate = '';

  onClose() {
    this.Close.emit(true);
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enterDate,
      },
      this.id
    );
    this.Close.emit(true);
  }
}
