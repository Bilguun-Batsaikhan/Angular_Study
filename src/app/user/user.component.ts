import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input decorator is used to pass data from parent component to child component. In our case user is the child component of app component.
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() userSelected = new EventEmitter();
  get imgPath() {
    return `assets/users/${this.user.avatar}`;
  }

  // When user is selected I want to emit an event to the parent component.
  onSelectUser() {
    this.userSelected.emit(this.user.id);
  }
}
