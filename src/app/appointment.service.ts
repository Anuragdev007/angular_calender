import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: Appointment[] = [];

  getAppointments(): Appointment[] {
    return this.appointments;
  }

  addAppointment(appointment: Appointment): void {
    this.appointments.push(appointment);
  }

  deleteAppointment(appointment: Appointment): void {
    const index = this.appointments.indexOf(appointment);
    if (index > -1) {
      this.appointments.splice(index, 1);
    }
  }
}

export interface Appointment {
  id: number;
  title: string;
  date: Date;
}
