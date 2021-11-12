import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { PersonasService } from "../../services/personas.service";

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {

  personas: any = [];
  constructor(private personaService: PersonasService, private router: Router) { }

  ngOnInit(){
    this.personaService.getPersonas().subscribe(
      res => {
        this.personas = res;
        console.log(this.personas);
      },
      err => console.error(err)
    );
  }

  getPersona(id : string){
    console.log(id);
    this.router.navigate(['/personas',id]);
  }

}

