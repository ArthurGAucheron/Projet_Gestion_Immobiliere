import { Component, OnInit } from '@angular/core';
import { BienImmobilierService } from 'src/app/services/bien-immobilier/bien-immobilier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.css']
})
export class TableauDeBordComponent implements OnInit {
  /*____________ props ___________ */
  biensConseiller=[];
  constructor( private bienService : BienImmobilierService, private router: Router) { }

  ngOnInit(): void {
    this.findAllBienByConseiller(1);
    }

    findAllBienByConseiller(pIdConseiller:number){
      this.bienService.getAllBienByConseiller(pIdConseiller).subscribe(data => this.biensConseiller = data);
    }
    

  }


