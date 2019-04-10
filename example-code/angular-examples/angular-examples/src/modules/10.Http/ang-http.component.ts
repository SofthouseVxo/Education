import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-ang-http',
  templateUrl: './ang-http.component.html'
})
export class AngHttpComponent {

  todos = [];

  constructor(private todoService:TodoService){

  }

  getTodo() {
    this.todoService.getTodo()
      .subscribe(
        (response) => {
          console.log(response)
          this.todos = response;
        },
        (error) => console.log('error', error),
        ()=> console.log('completed')
    );
  }

  // With ordinary functions instead of arrow functions
  // onGetTodoButtonClick() {
  //   this.todoService.getTodo()
  //     .subscribe(
  //       function(response){console.log('response', response);},
  //       function(error){console.log('error', error);},
  //       function(){console.log('completed')}
  //   );
  // }

  createNewTodo(){
    this.todoService.addTodo()
    .subscribe(
      (response) => console.log('response', response),
      (error) => console.log('error', error),
      ()=> console.log('completed')
  );
  }
}
