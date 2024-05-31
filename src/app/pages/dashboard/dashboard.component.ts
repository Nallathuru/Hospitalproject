import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  show= false
  openpopup(){
    this.show = true
  }
  closepopup(){
    this.show= false
  }
  closeoverlay(e:any){
    if(e.target.classList.contains("overlay")){
      this.show= false
    }

  }
  signin(){
    alert("loggedin")
  }

}
