import { Component, OnInit } from '@angular/core';
import { ClasseStandardService } from "src/app/services/classe-standard/classe-standard.service";

@Component({
  selector: 'app-create-classe-standard',
  templateUrl: './create-classe-standard.component.html',
  styleUrls: ['./create-classe-standard.component.css']
})
export class CreateClasseStandardComponent implements OnInit {

  constructor(private classeStandardService : ClasseStandardService) { }

  ngOnInit(): void {
  }

}
