import { Component } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

interface Todo{
  if: number;
  content: string;
  complete: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpclient-httpparams';
  todos: Todo[];
  url = 'http://localhost:3000/todos?id=1&completed=false';

  constructor(public http : HttpClient) { //HttpClient를 컴포넌트에 주입 -> 생성자에서 인자로 선언하는 것은 주입말고는 없나보다
  }

  ngOnInit(){
    /**
     * HttpParams 클래스는 변경 불가능한 객체픞 생성한다.
     * 반드시 set메소드를 이용해야한다
     * set메소드는 항상 새로운 HttpParams 객체를 반환하므로, 반드시 체이닝하여 사용해야한다.
     */
    //쿼리 파라미터 생성
    const params = new HttpParams()
      .set('id', '1')
      .set('completed', 'false');

    this.http.get<Todo[]>(this.url).subscribe(todos=>this.todos=todos);
  }
}
