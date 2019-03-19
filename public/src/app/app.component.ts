import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'public';
  title = "Restful Tasks API";
  sub_title_1 = "All the tasks:";
  sub_title_2 = "The Third Task:";
  tasks:any = [];
  show_task :any ='';
  constructor (private _httpService: HttpService){
  }
  getAllTasks():void{
    this._httpService.getTasks()
    .subscribe(data=>{
      this.tasks=data;
    })
  }
  getTaskById(ID: any){
    this._httpService.getTaskById(ID)
    .subscribe(data=>{
      this.show_task = data;
    })
  }
}

