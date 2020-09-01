import { Component, OnInit } from '@angular/core';
import { ClasseStandardService } from "src/app/services/classe-standard/classe-standard.service";
import { ClasseStandard } from 'src/app/modeles/ClasseStandard';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-classe-standard',
  templateUrl: './create-classe-standard.component.html',
  styleUrls: ['./create-classe-standard.component.css']
})
export class CreateClasseStandardComponent implements OnInit {

  classeStandard : ClasseStandard = {
    idClasse : null,
    typeBiens : null,
    modeOffre : null,
    prixMax : null,
    superficieMin : null
  }

  constructor(private classeStandardService : ClasseStandardService,
              private router : Router,
              private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      
      const id = +param.get("id");
      if (id!=0) {
        this.classeStandardService.getClasseStandardById(id)
                                  .subscribe(toUpdate=>this.classeStandard=toUpdate);
      }

    })
  }

  saveOrUpdateClasseStandard(){
    if (this.classeStandard.idClasse==null) {
      this.classeStandardService.addClasseStandard(this.classeStandard).subscribe;
      
    } else {

      this.classeStandardService.updateClasseStandard(this.classeStandard).subscribe();
    }
    this.router.navigateByUrl("");
  }

}
