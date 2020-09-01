import { Component, OnInit } from '@angular/core';
import { ClasseStandardService } from "src/app/services/classe-standard/classe-standard.service";
import { ClasseStandard } from 'src/app/modeles/ClasseStandard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-classe-standard',
  templateUrl: './liste-classe-standard.component.html',
  styleUrls: ['./liste-classe-standard.component.css']
})
export class ListeClasseStandardComponent implements OnInit {

  
  listeClasseStandard  =[
    { idClasse:1,typeBiens:"Maison",modeOffre:"Location",prixMax:300,superficieMin:55 }
    ,{ idClasse:2,typeBiens:"Terrain",modeOffre:"Achat",prixMax:30000,superficieMin:75 }];

  constructor(private classeStandardService : ClasseStandardService, private router : Router) { }

  ngOnInit(): void {
    //this.classeStandardService.getAllClasseStandard().subscribe(data=>this.listeClasseStandard=data);
  }

  deleteClasseStandard(event:Event , idClasseStandard : number){
    event.preventDefault();
    this.classeStandardService.deleteClasseStandard(idClasseStandard).subscribe(() => this.ngOnInit());
    this.router.navigate(["list/classeStandard"]);
  }

  //Redirection
  navigateToAddClasseStandard(event:Event){
    event.preventDefault();
    this.router.navigateByUrl("edit/classeStandard/0");
  }

  navigateToDetailsClasseStandard(event:Event, idClasseStandard:number){
    event.preventDefault();
    this.router.navigateByUrl("look/classeStandard/"+idClasseStandard);
  }

}
