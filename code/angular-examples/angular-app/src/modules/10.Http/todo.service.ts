import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, filter} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  urls:any = {
    todos: 'https://jsonplaceholder.typicode.com/todos'
  }

  constructor(private http: HttpClient) {

  }

  public getTodo(): Observable<any>{
    return this.http.get(this.urls.todo);
    // .pipe(
    //   map((todo) => {
    //     console.log('here', todo);
    //     return todo
    //   }),
    //   filter((todo:any) => todo.id === '0')
    // );
  }

  public addTodo(): Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // 'Authorization': 'my-auth-token'
      })
    };

    const body =   {
      "userId": 4,
      "id": 4,
      "title": "delectus aut autem",
      "completed": false
    };

    return this.http.post(this.urls.todos, body, httpOptions);

  }
}
