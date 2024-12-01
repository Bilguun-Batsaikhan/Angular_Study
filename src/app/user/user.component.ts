import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input decorator is used to pass data from parent component to child component. In our case user is the child component of app component.
  @Input({required: true}) avatar: string ='';
  @Input({required: true}) name: string = '';
  @Input({required: true}) id: string = '';
  @Output() userSelected = new EventEmitter<string>();
  get imgPath() {
    return `assets/users/${this.avatar}`;
  }

  // When user is selected I want to emit an event to the parent component.
  onSelectUser() {
    this.userSelected.emit(this.id);
  }
}
