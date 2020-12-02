import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { PayComponent } from './components/pay/pay.component';
import { PaymentDetailComponent } from './components/payment-detail/payment-detail.component';
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pay', component: PayComponent },
  { path: 'paymentdetail', component: PaymentDetailComponent },
  { path: 'paymenthistory', component: PaymentHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
