import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { Observable, from } from 'rxjs';
import { AuthPayload, AuthResponse, User } from './model';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  app = initializeApp(environment.firebaseConfig);
  db = getFirestore(this.app);
  api = `https://identitytoolkit.googleapis.com/v1/accounts`;

  constructor(private http: HttpClient) { }

  userRegister(form: AuthPayload): Observable<AuthResponse> {
    console.log(form)
    return this.http.post<AuthResponse>(this.api + `:signUp?key=${environment.firebaseConfig.apiKey}`, form)
  }
  
  async addUser(form: User) {
    console.log(form)
    const ref = doc(this.db, 'users', form.userId);
    return from(setDoc(ref, form));
  }

}
