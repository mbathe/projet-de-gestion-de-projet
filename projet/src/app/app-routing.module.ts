import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { ViewEntityComponent } from './components/view-entity/view-entity.component';
import { ViewDataOfEntityComponent } from './components/view-entity/view-data-of-entity/view-data-of-entity.component';
import { ViewSingleEntityComponent } from './components/view-entity/view-single-entity/view-single-entity.component';
import { AppFormComponent } from './components/app-form/app-form.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';/**biend simon */
import { EnseignantComponent } from './pagederecuperation/enseignant.component'; /**biend simon */
import { TableComponent } from './components/table/table.component'; /****************************/
import { EnregistreurComponent } from './components/enregistreur/enregistreur.component'
const routes: Routes = [];
export var appRoutes: Routes = [
  
  { path: 'form/404', component: FourOhFourComponent},
  // voir les différentes entités de la base de données
  { path: 'form/view', component:  ViewEntityComponent }, 
  // voir toutes les occurrences de entity_class stockées dans la base de données
  { path: 'form/:entity_class', component:   ViewDataOfEntityComponent },
  // voir les informations de l’entité de type entity_class ayant l’identifiant  entity_id
  { path: 'form/:entity_class/view/:entity_id', component:  ViewSingleEntityComponent },
  // modifier  les informations de l’entité de type entity_class ayant l’id entity_id
  { path: 'form/:entity_class/:entity_id', component:  AppFormComponent },
  // Créer une nouvelle entité de type entity_class
  { path: 'form/:entity_class/new', component:  AppFormComponent },
  // Authentification
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  // Rédirection : par défaut on visualise les données
  { path: '', redirectTo: 'form/view', pathMatch: 'full' },
  { path: '**', redirectTo: 'form/view' },
  { path: 'login', component: LoginComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'pagederecuperation', component: EnseignantComponent },
  { path: 'tables', component: TableComponent },
  {path: 'enregistreur', component: EnregistreurComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
