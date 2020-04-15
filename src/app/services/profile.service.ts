import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {environment } from '../../environments/environment';



// @Injectable()
@Injectable({
    providedIn: 'root'
  })
export class ProfileService {

  username: string;
  clientid='d2649e66fe52c00ab7cd';
  clientsecret='9cbfdf677fd9265b14c540c456a9eaab4e672222';

  constructor(private http: HttpClient) { 
    console.log("service in now ready!"); 
    this.username = 'Antonioisrooted';
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + 
    "&client_secret=" + this.clientsecret )
    // .map(res => res.json());
    // .map((res: Response) => res.json())
  }


  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + 
    "&client_secret=" + this.clientsecret )
    // .map(res => res.json());
    // .map((res: Response) => res.json())
  }


  updateProfile(username:string){
    this.username = username;

  }



}




// @Injectable({
//   providedIn: 'root'
// })

// .map(res => res.json());

// .map(result => result);
