import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  private username: string;
  private clientid='d2649e66fe52c00ab7cd';
  private clientsecret='9cbfdf677fd9265b14c540c456a9eaab4e672222';

  constructor(private http:Http) { 
    console.log("service in now ready!"); 
    this.username = 'Antonioisrooted';
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret )
    .map(res => res.json());
  }
}




// @Injectable({
//   providedIn: 'root'
// })