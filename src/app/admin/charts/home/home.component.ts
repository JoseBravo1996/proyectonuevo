import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LoginRoutingModule } from 'src/app/login/login-routing.module';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  
  ngOnInit() {
    
  }

  
}
