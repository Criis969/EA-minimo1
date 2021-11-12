import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PersonasService} from "../../services/personas.service";
import {SeguimientosService} from "../../services/seguimientos.service";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona: any = [];
  id: any;

  constructor(private route:ActivatedRoute, private personasService: PersonasService,
              private seguimientoService:SeguimientosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params ['id'];
      console.log(this.id);
    })
    this.personasService.getPersona(this.id).subscribe(
      res => {
        this.persona = res;
        console.log(this.persona);
      },
      err => console.error(err)
    )
  }

}
