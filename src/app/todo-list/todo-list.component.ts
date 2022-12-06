import { Component, OnInit } from '@angular/core';
import { Todo } from '../core/todo';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  listTodo!:Todo[];
  constructor(private calculService:CalculService) { }

  ngOnInit(): void {
    this.listTodo=[
      {"userId": 1, "id": 1, "title": "delectus aut autem",
      "completed": false},
      {"userId": 1, "id": 2, "title": "quis ut nam facilis etofficia qui", "completed": false},
      {"userId": 1, "id": 3, "title": "fugiat veniamminus", "completed": false},
      {"userId": 1, "id": 4, "title": "quo adipisci enim quam utab", "completed": true}];
      
  }
  nombre!:number;
  Bilan(){
    this.nombre=this.calculService.getNumberOf(this.listTodo,"completed",false);
  }

}
