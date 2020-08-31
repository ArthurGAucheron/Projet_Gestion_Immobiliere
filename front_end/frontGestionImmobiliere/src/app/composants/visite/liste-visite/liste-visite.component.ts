import { Component, OnInit } from '@angular/core';

import { VisiteService} from "src/app/services/visite/visite.service";

@Component({
  selector: 'app-liste-visite',
  templateUrl: './liste-visite.component.html',
  styleUrls: ['./liste-visite.component.css']
})
export class ListeVisiteComponent implements OnInit {

  constructor(private visiteService:VisiteService) { }

  ngOnInit(): void {
  }

}
