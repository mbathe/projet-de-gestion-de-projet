import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'util';

@Injectable({
  providedIn :"root",
})

export class CheckemailService {

  constructor(private httpClient : HttpClient) { }
  
  answer = new String('false');

  sendEmailToServer(email : String){
     this.httpClient.post('url vers le serveur',email)
    .subscribe(
      ()=>{
        
        console.log("email envoyé au serveur");

      },
   
      (error)=>{
        console.log("Erreur ! :"+error);
      }
    );
                  }

  receiveConfirmation(){
        return this.httpClient.get<String>("Url du serveur");
        
          }
        }
        