import { Component, OnInit } from '@angular/core';
import { ClasseStandardService } from "src/app/services/classe-standard/classe-standard.service";
import { ClasseStandard } from 'src/app/modeles/ClasseStandard';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/modeles/Client';
import { BienImmobilier } from 'src/app/modeles/BienImmobilier';
import { ClientService } from 'src/app/services/client/client.service';
import { BienImmobilierService } from 'src/app/services/bien-immobilier/bien-immobilier.service';
import { BienLocation } from 'src/app/modeles/BienLocation';
import { BienAchat } from 'src/app/modeles/BienAchat';


@Component({
  selector: 'app-create-classe-standard',
  templateUrl: './create-classe-standard.component.html',
  styleUrls: ['./create-classe-standard.component.css']
})
export class CreateClasseStandardComponent implements OnInit {

  classeStandard = {
    idClasse : null,
    typeBiens : null,
    modeOffre : null,
    prixMax : null,
    superficieMin : null,

    listeClients : null,
    listeBienImmobilier : null
  };

  listeClients : Array<Client> = [];
  listeBienImmoLoc : Array<BienLocation> =[];
  listeBienImmoAchat : Array<BienAchat> = [];

  constructor(private classeStandardService : ClasseStandardService,
              private clientService : ClientService,
              private bienImmoService : BienImmobilierService,
              private router : Router,
              private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      
      const id = +param.get("id");
      if (id!=0) {
        this.classeStandardService.getClasseStandardById(id)
                                  .subscribe(toUpdate=>this.classeStandard=toUpdate);
      }
    });

    this.clientService.getAllClientFromWsRest().subscribe(liste=>this.listeClients=liste);
    this.bienImmoService.getAllLocation().subscribe(liste=>this.listeBienImmoLoc=liste);
    this.bienImmoService.getAllAchat().subscribe(liste=>this.listeBienImmoAchat=liste);

  }

  saveOrUpdateClasseStandard(){
    if (this.classeStandard.idClasse==null) {
      this.classeStandardService.addClasseStandard(this.classeStandard).subscribe();
      
    } else {

      this.classeStandardService.updateClasseStandard(this.classeStandard).subscribe();
      this.router.navigateByUrl("look/classeStandard/"+this.classeStandard.idClasse);
    }
    this.router.navigateByUrl("list/classeStandard/");
  }

  fileToUpload: File = null;
  test : string ;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    var reader = new FileReader();
   reader.readAsDataURL(this.fileToUpload);
   reader.onload = () => {
      this.test= <string>reader.result;
   };
   
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}

 

}



