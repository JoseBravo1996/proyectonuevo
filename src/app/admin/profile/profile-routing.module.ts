import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
  {
    path: '',
    component: ProfileDialogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
