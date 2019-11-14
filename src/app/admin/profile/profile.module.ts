import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [ProfileComponent, ProfileDialogComponent]
})
export class ProfileModule {}
