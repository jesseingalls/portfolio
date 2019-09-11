import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  allUsers(){
    return this._http.get('/api/users');
  }
  createUser(user){
    console.log('creating')
    return this._http.post('/api/users', user);
  }
  deleteUser(id){
    return this._http.delete('/api/users/' + id)
  }
}
