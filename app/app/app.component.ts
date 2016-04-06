import {Component, OnInit} from 'angular2/core';
import {Wakanda} from '../service/wakanda';

@Component({
  selector: 'app',
  templateUrl: 'app/app/template.html',
  providers: [Wakanda]
})
export class AppComponent  {
  
  public tasks: any;
  public newTask: string;
  
  constructor(private _wakanda: Wakanda) {
  }
  
  public add() {
    if (this.newTask) {
      this._wakanda.catalog.then(c => {
        let Task =  c['Task'];
        
        let nt = Task.create({
          label: this.newTask,
          done: false
        });
        
        nt.save().then(() => {
          this.refreshTasks();
          this.newTask = null;
        });
      });
    }
  }
  
  public prev() {
    this.tasks.prevPage();
  }
  
  public next() {
    this.tasks.nextPage();
  }
  
  private refreshTasks() {
    this._wakanda.catalog.then(c => {
      let Task = c['Task'];

      Task.query({pageSize: 3}).then(collection => {
        this.tasks = collection;
        console.log(collection);
      });
    });
  }
  
  ngOnInit() {
    this.refreshTasks();
  }
}
