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

    clients : null,
    biensImmobilier : null
  };

  listeClientsAll : Array<Client> = [];
  listeBien : Array<any> =[];
  

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

    this.clientService.getAllClientFromWsRest().subscribe(liste=>this.listeClientsAll=liste);
    this.bienImmoService.getAllLocation().subscribe(liste=>this.listeBien=liste);
  }

  

  saveOrUpdateClasseStandard(){
    let listeBienImmo : Array<any>=[];
    let listeClient : Array<Client>=[];

    if (this.classeStandard.idClasse==null) {

      this.classeStandard.biensImmobilier.forEach(element => {
        this.bienImmoService.getAchatById(element).subscribe(data=>listeBienImmo.push(data));
      });
      this.classeStandard.biensImmobilier=listeBienImmo;

      this.classeStandard.clients.forEach(element => {
        this.clientService.findClientByIdFromWsRest(element).subscribe(data=>listeClient.push(data)); 
      });
      this.classeStandard.clients=listeClient;

      console.log("Ajout")
      console.log(this.classeStandard)
      this.classeStandardService.addClasseStandard(this.classeStandard).subscribe();
      
    } else {

      this.classeStandardService.updateClasseStandard(this.classeStandard).subscribe();
      this.router.navigateByUrl("look/classeStandard/"+this.classeStandard.idClasse).then(() => window.location.reload());
    }
    this.router.navigateByUrl("list/classeStandard");
  }

  fileToUpload: File = null;
  test : string ;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    var reader = new FileReader();
   reader.readAsDataURL(this.fileToUpload);
   reader.onload = () => {
     console.log(reader.result)
      this.test= <string>reader.result;
   };
   
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}

 

}



