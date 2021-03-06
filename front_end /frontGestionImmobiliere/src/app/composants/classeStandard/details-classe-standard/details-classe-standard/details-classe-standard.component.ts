import { Component, OnInit } from '@angular/core';
import { ClasseStandard } from 'src/app/modeles/ClasseStandard';
import { Router, ActivatedRoute } from '@angular/router';
import { ClasseStandardService } from 'src/app/services/classe-standard/classe-standard.service';

@Component({
  selector: 'app-details-classe-standard',
  templateUrl: './details-classe-standard.component.html',
  styleUrls: ['./details-classe-standard.component.css']
})
export class DetailsClasseStandardComponent implements OnInit {

  classeStandard : ClasseStandard= {  idClasse:null,
                                      typeBiens:null,
                                      modeOffre:null,
                                      prixMax:null,
                                      superficieMin:null,
                                      listeClients: null,
                                      listeBienImmobilier:null
  };
  

  constructor(private classeStandardService : ClasseStandardService,
              private router : Router,
              private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      
      const id = +param.get("id");
      this.classeStandardService.getClasseStandardById(id)
                                .subscribe(toLook=>this.classeStandard=toLook);

    });
  }

  //Redirection
  navigateToUpdateClasseStandard($event : Event,idClasse:number){
    event.preventDefault();
    this.router.navigateByUrl("edit/classeStandard/"+idClasse);
  }
  

}
