import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { PlaceholderDirective } from 'src/app/shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit,OnDestroy{
  isLoginMode = true;

  isLoading = false;

  error: string = null;

  email: string;

  password: string;

  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;

  private closeSub: Subscription;

  constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  ngOnInit(): void {
  }


  onSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;


    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
        (resData) => {
          this.isLoading = false;
          this.router.navigate(['/recipes']);
          this.error = null;
        },
        (errorMessage) => {
          this.error = errorMessage;
          this.showErrorAlert(errorMessage);
          this.isLoading = false;
        }
      );

    authForm.reset();
  }



  onHandleError(){
    this.error = null;
  }

  private showErrorAlert(errorMessage: string){

    // const alertCmp = new AlertComponent(); // This is not the way

    const alertcmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );

    const hostViewContainerRef = this.alertHost.viewcontainerRef;

    hostViewContainerRef.clear();

    const componentRef= hostViewContainerRef.createComponent(alertcmpFactory);

    componentRef.instance.message = errorMessage;

    this.closeSub = componentRef.instance.closed.subscribe(()=> {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  ngOnDestroy(): void {
    if(this.closeSub)
    {
      this.closeSub.unsubscribe();
    }
  }
}