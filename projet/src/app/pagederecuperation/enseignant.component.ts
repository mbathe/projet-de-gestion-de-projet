import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CheckemailService } from '../checkemail.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  answer;
  constructor(private checkemail : CheckemailService) { }

  ngOnInit() {
  }  

  onSubmit(f :NgForm){
    let email = f.value['userEmail'];
    this.checkemail.sendEmailToServer(email);
    this.checkemail.receiveConfirmation()
    .subscribe(
      (response)=>{
        this.answer =response;
      }
    ),
    (error)=>{
      console.log("Erreur !"+Error);
    }

    if(this.answer =='true'){
      alert('Un lien vous a été envoyé sur votre compte gmail veuillez le vérifier et suivre les directives');
    }
 
    if(this.answer=='false'){
      alert("Vous n'etes pas enregistré comme un utilisateur");
    }
        }
    

}
