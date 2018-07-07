import { Component, Input } from '@angular/core';
import { UsersService } from "../users.service";
import { CounterService } from "../counter.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: [CounterService]
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ){}

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
    this.counterService.updateCounter();
  }
}
