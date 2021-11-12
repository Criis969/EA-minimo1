import { Component, OnInit, HostBinding } from '@angular/core';
import {Seguimiento} from "../../models/seguimiento";
import {SeguimientosService} from "../../services/seguimientos.service";

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {



  ngOnInit(): void {
  }

}
