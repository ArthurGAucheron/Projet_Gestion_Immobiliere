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

  classeStandard : ClasseStandard= { idClasse:1,typeBiens:"Maison",modeOffre:"Location",prixMax:300,
  superficieMin:55, listeClients: [{ idClient : 1,
                                    nom: "Georges",
                                    telephone: "030303030330",
                                    adresse : {idAdresse: 1,
                                              numero: "13",
                                              rue: "rue du mont",
                                              codePostal : 70999,
                                              localite : "Somewhere",
                                              pays: "France",},
                                    listeVisites : null,
                                    listeContrat : null}],
   listeBienImmobilier:null};
  

  constructor(private classeStandardService : ClasseStandardService,
              private router : Router,
              private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      
      const id = +param.get("id");
      this.classeStandardService.getClasseStandardById(id)
                                .subscribe(toUpdate=>this.classeStandard=toUpdate);

    })
  }

  //Redirection
  navigateToUpdateClasseStandard($event : Event,idClasse:number){
    event.preventDefault();
    this.router.navigateByUrl("edit/classeStandard/"+idClasse);
  }
  

}
