import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { TasksService } from '@services/tasks/tasks.service';

@Component({
  selector: 'add-task-modal',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-task-modal.component.html',
  styleUrl: './add-task-modal.component.css'
})
export class AddTaskModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  taskTitle = new FormControl('');
  taskDescription = new FormControl('');
  isDisabled = true;
  isSubmitting = false;
  submitButtonText = 'Add Task';

  constructor (private tasksService: TasksService) {}

  ngOnInit() {
    this.taskTitle.valueChanges.subscribe(() => this.updateIsDisabled());
    this.taskDescription.valueChanges.subscribe(() => this.updateIsDisabled());
  }
  
  updateIsDisabled() {
    this.isDisabled = this.taskTitle.value === '' || this.taskDescription.value === '';
  }

  closeModal() {
    this.close.emit();
  }

  onSubmit() {
    this.isDisabled = true;
    this.isSubmitting = true;
    this.submitButtonText = 'Adding Task...';
    const task = {
      title: this.taskTitle.value,
      description: this.taskDescription.value
    }

    this.tasksService.addTask(task).subscribe({
      next: (newTask) => {
        this.tasksService.tasks.unshift(newTask);
        this.closeModal();
      },
      complete: () => {
        this.isSubmitting = false;
        this.submitButtonText = 'Add Task';
      }
    });
  }
}
