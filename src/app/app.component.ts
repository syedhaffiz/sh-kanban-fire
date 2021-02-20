import { Component } from '@angular/core';
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
}
