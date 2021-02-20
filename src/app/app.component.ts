import { Component } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

import { Task } from './task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todo: Task[] = [
    { title: 'But Router', description: 'Go to store and buy router' },
    {
      title: 'Create a kanban board',
      description: 'Develop a kanban board app with angular and firebase',
    },
  ];
  inProgress: Task[] = [];
  done: Task[] = [];

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  edit(list: string, task: Task): void {}
}
