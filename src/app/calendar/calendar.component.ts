import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Appointment, AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  appointments: Appointment[] = [];
  newAppointment: Appointment = {
    id: 0,
    title: '',
    date: new Date()
  };

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointments = this.appointmentService.getAppointments();
  }
  addAppointment(): void {
    this.newAppointment.id = this.appointments.length + 1;
    this.appointmentService.addAppointment(this.newAppointment);
    this.newAppointment = {
      id: 0,
      title: '',
      date: new Date()
    };
  }
  

  deleteAppointment(appointment: Appointment): void {
    this.appointmentService.deleteAppointment(appointment);
  }

  drop(event: CdkDragDrop<Appointment[]>): void {
    moveItemInArray(this.appointments, event.previousIndex, event.currentIndex);
  }
}