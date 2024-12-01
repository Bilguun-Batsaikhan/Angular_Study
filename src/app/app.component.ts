import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

// Decorators like @Component are used by Angular to add metadata & configuration to classes.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html', // Content that should be displayed by this component.
  styleUrl: './app.component.css',
})
// Components are created as classes, which are then exported as modules. Angular that actually initiates the classes and creates the components.
export class AppComponent {
  // Now exposed to the template, so that it can be passed to the child component.
  users = DUMMY_USERS;
  name: string | undefined = 'Angular';
  onSelectUser(id:string) {
    console.log("Selected user with id: ", id);
    this.name = this.users.find(user => user.id === id)?.name;
  }
}
