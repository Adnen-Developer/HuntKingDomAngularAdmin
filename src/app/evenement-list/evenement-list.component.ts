




import { Component, OnInit } from '@angular/core';
import {Evenement} from "../model/evenement";
import {EvenementService} from "../services/evenement.service";
// import {CalculService} from "../services/calcul.service";

@Component({
  selector: 'app-evenement-list',
  templateUrl: './evenement-list.component.html',
  styleUrls: ['./evenement-list.component.css']
})
export class EvenementListComponent implements OnInit {
  title: string;
  list: Evenement[];
  currentAdmin : any;
  constructor(private evenementService: EvenementService ) {
  }
  ngOnInit(): void {
    this.title = "test";

    this.evenementService.getList().subscribe(
      (data:Evenement[])=> this.list=data
    );



    
  }


  delete(_id: string): void {

     this.evenementService.deleteEvenement(_id).subscribe();

     this.evenementService.getList().subscribe(
      (data:Evenement[])=> this.list=data
    );

  }

}


