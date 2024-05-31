import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { MasterService } from '../../service/master.service';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../service/data.service';
  

@Component({
  selector: 'app-newappointment',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './newappointment.component.html',
  styleUrl: './newappointment.component.css'
})
export class NewappointmentComponent {
  appointmentobj: any=
  {
    "name": "",
    "mobileNo": "",
    "city": "",
    "age": 0,
    "gender": "",
    "appointmentDate": "2024-05-27T19:01:53.681Z",
    "appointmentTime": "",
    "isFirstVisit": true,
    "naration": ""
  }
  constructor(private master:DataService){}

  // onSaveappointment(){
  //   this.master.createNew(this.appointmentobj).subscribe((res:any)=>{
  //     console.log(res);
  //     if(res.result){
  //       alert("appointment Done")
  //     }

  //   },error => {
  //     alert("API error/ Please check again")

  //   })

  // }

}
