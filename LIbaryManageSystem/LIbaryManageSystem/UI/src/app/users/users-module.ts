import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOrders } from './user-orders/user-orders';
import { share } from 'rxjs';
import { SharedModule } from '../shared/shared-module';
import { Profile } from './profile/profile';
import { AllOrders } from './all-orders/all-orders';



@NgModule({
  declarations: [
    UserOrders,
    Profile,
    AllOrders
  ],
  imports: [
    SharedModule
  ]
})
export class UsersModule { }


