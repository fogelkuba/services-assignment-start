import { Component, Input } from '@angular/core';
import { UsersService } from "../users.service";
import { CounterService } from "../counter.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: [CounterService]
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ){}

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
    this.counterService.updateCounter();
  }
}
