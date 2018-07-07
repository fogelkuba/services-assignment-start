export class UsersService{
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  setToActive(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    alert(this.inactiveUsers[id] + ' was set to active')
    this.inactiveUsers.splice(id, 1);
  }
  setToInactive(id: number){
    this.inactiveUsers.push(this.activeUsers[id]);
    alert(this.activeUsers[id] + ' was set to Inactive');
    this.activeUsers.splice(id, 1);
  }
}
