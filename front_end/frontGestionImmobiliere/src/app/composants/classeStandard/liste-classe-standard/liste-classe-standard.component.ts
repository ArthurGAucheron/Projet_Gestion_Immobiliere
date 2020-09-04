import { Component, OnInit,OnDestroy } from '@angular/core';
import { ClasseStandardService } from "src/app/services/classe-standard/classe-standard.service";
import { ClasseStandard } from 'src/app/modeles/ClasseStandard';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-liste-classe-standard',
  templateUrl: './liste-classe-standard.component.html',
  styleUrls: ['./liste-classe-standard.component.css']
})
export class ListeClasseStandardComponent implements OnDestroy,OnInit {

  listeClasseStandard :ClasseStandard[] =[];
  dtTrigger: Subject<any> = new Subject();

  constructor(private classeStandardService : ClasseStandardService, private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.classeStandardService.getAllClasseStandard()
                              .subscribe(data=>{
                                                this.listeClasseStandard=data;
                                                this.dtTrigger.next();
                                              });
  }

  deleteClasseStandard(event:Event , idClasseStandard : number){
    event.preventDefault();
    this.classeStandardService.deleteClasseStandard(idClasseStandard).subscribe(() => this.ngOnInit());
  }

  //Redirection
  navigateToAddClasseStandard(event:Event){
    event.preventDefault();
    this.router.navigateByUrl("edit/classeStandard/0");
  }

  navigateToDetailsClasseStandard(event:Event, idClasseStandard:number){
    event.preventDefault();
    this.router.navigateByUrl("look/classeStandard/"+idClasseStandard).then(() => window.location.reload() );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
