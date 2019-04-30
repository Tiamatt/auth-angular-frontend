import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// custom objects
import { AuthFeatureRoutingModule } from '../feature-routing-modules/auth-feature-routing.module'
import * as AuthComponents from '../../../auth';

const providers: any[] = [
];

const components: any[] = [
    AuthComponents.AuthComponent,
    AuthComponents.LoginComponent,
    AuthComponents.SignupComponent,
];

const pipes: any[] = [];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthFeatureRoutingModule,
    ],
    declarations: components.concat(pipes),
    providers: providers
})

export class AuthModule { }