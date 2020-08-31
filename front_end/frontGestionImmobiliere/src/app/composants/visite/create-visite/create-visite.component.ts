import { Component, OnInit } from '@angular/core';

import { VisiteService} from "src/app/services/visite/visite.service";

@Component({
  selector: 'app-create-visite',
  templateUrl: './create-visite.component.html',
  styleUrls: ['./create-visite.component.css']
})
export class CreateVisiteComponent implements OnInit {

  constructor(private visiteService:VisiteService ) { }

  ngOnInit(): void {
  }

}
