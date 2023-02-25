import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
todoList:any[]=[]
addTodo(todoVal:any){
 this.todoList.push({id:this.todoList.length,todo:todoVal});
}
deleteItem(idVal:number){
  this.todoList=this.todoList.filter(item=>item.id!=idVal)
  console.log(this.todoList);
}
}