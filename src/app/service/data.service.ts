import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  createNew(obj: any) {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/HospitalAppointment' +
        'AddNewAppointment',
      obj
    );
  }
}
