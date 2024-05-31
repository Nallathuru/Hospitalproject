import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  apiendpoint: string =
    'https://freeapi.miniprojectideas.com/api/HospitalAppointment';

  constructor(private http: HttpClient) {}

  createNew(obj: any){
    return this.http.post(this.apiendpoint + 'AddNewAppointment', obj);
  }
}
