export class CounterService{
  public counter: number = 0;

  updateCounter(){
    this.counter += 1;
    console.log(this.counter);
  }
}
