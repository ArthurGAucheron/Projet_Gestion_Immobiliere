import { Component, OnInit } from '@angular/core';
import { ClasseStandardService } from "src/app/services/classe-standard/classe-standard.service";

@Component({
  selector: 'app-liste-classe-standard',
  templateUrl: './liste-classe-standard.component.html',
  styleUrls: ['./liste-classe-standard.component.css']
})
export class ListeClasseStandardComponent implements OnInit {

  constructor(private classeStandardService : ClasseStandardService) { }

  ngOnInit(): void {
  }

}
