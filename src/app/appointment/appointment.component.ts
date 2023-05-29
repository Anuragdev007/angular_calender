import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Appointment, AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  @Input() appointment!: Appointment;

  constructor(private appointmentService: AppointmentService) { }

  deleteAppointment(): void {
    this.appointmentService.deleteAppointment(this.appointment);
  }

  drop(event: CdkDragDrop<Appointment[]>): void {
    moveItemInArray(this.appointmentService.getAppointments(), event.previousIndex, event.currentIndex);
  }
}
