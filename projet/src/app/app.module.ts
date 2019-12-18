import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* début de modification de foko*/
import { MatTableModule } from '@angular/material/table'; /****************************/
import { MatPaginatorModule } from '@angular/material/paginator'; /****************************/
import { MatSortModule } from '@angular/material/sort'; /****************************/
import { MatFormFieldModule } from '@angular/material/form-field'; /****************************/
import { MatInputModule } from '@angular/material/input'; /****************************/
import { CdkColumnDef } from '@angular/cdk/table'; /****************************/

import { TableComponent } from './components/table/table.component'; /****************************/
import { RemplissageService } from './services/remplissage.service'; /****************************/
/* fin de la modification de foko*/


import { EnseignantComponent } from './pagederecuperation/enseignant.component'; /**biend simon */
import{CheckemailService} from './checkemail.service'; /**biend simon */
import{FormsModule} from '@angular/forms' /**biend simon */
import { from } from 'rxjs'; /**biend simon */
import { HttpClientModule } from '@angular/common/http'; /**biend simon */
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password/reset-password.component';/**biend simon */

/********** debut de la modification de tikeng     ***********/
import { FormBuilderComponent } from './components/form-builder/form-builder.component'; /* tikeng*/
import { SingleFieldComponent } from './components/single-field/single-field.component'; /* tikeng*/
import { ReactiveFormsModule } from '@angular/forms';
import { FieldService } from './services/field.service';
import { EntitysService } from './services/entitys.service';
import { Routes, RouterModule } from '@angular/router';
import { SingleModalComponent } from './components/single-modal/single-modal.component';
import { BrouillonComponent } from './components/__cache/brouillon.component';
import { AppFormComponent } from './components/app-form/app-form.component';
import { FormHeaderComponent } from './components/form-header/form-header.component';
import { ViewEntityComponent } from './components/view-entity/view-entity.component';
import { ViewSingleEntityComponent } from './components/view-entity/view-single-entity/view-single-entity.component';
import { ViewDataOfEntityComponent } from './components/view-entity/view-data-of-entity/view-data-of-entity.component';
import { AuthService } from './services/auth.service'; 
//import { AuthGuardService } from './services/auth-guard.service';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from '../environments/environment';
if (environment.production) {
  enableProdMode();
}
/**********  fin de la modification de tikeng     ********************/
import { LoginComponent } from './components/login/login.component';
import { EnregistreurComponent } from './enregistreur/enregistreur.component';
/** modification de sining  */


/** fin de la modification de signing  *******/
@NgModule({
  declarations: [
    AppComponent,
    TableComponent, /****************************/


    EnseignantComponent, ResetPasswordComponent, /**biend simon */

    FormBuilderComponent,/*tikent */
    SingleFieldComponent,/*tikent */
    SingleModalComponent,/*tikent */
    BrouillonComponent,/*tikent */
    AppFormComponent,/*tikent */
    FormHeaderComponent,/*tikent */
    ViewEntityComponent,/*tikent */
    ViewSingleEntityComponent,/*tikent */
    ViewDataOfEntityComponent,/*tikent */
    SigninComponent,/*tikent */
    SignupComponent,/*tikent */
    FourOhFourComponent,/*tikent */


    LoginComponent, EnregistreurComponent /*sining*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatTableModule, /****************************/
    MatPaginatorModule, /****************************/
    MatSortModule, /****************************/
    MatFormFieldModule, /****************************/
    MatInputModule, /****************************/

    FormsModule, /**biend simon */
    HttpClientModule, /**biend simon */
    CommonModule, /**biend simon */

  
    FormsModule,/*tikent */
    ReactiveFormsModule,/*tikent */
    

  ], exports: [
    RouterModule
  ] ,
  providers: [
    RemplissageService, /****************************/
    CdkColumnDef, /****************************/
    FieldService, /*tikent */
    EntitysService, /*tikent */
    AuthService/*tikent */
],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
