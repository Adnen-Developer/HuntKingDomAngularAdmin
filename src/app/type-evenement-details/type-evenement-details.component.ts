

import { Component, OnInit } from '@angular/core';
import {TypeEvenement} from "../model/typeEvenement";
import {TypeEvenementService} from "../services/type-evenement.service";

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-type-evenement-details',
  templateUrl: './type-evenement-details.component.html',
  styleUrls: ['./type-evenement-details.component.css']
})
export class TypeEvenementDetailsComponent implements OnInit {
  
  typeEvenement: TypeEvenement;

  _id: string;

  constructor(private route: ActivatedRoute, private typeEvenementService:TypeEvenementService) { }

  
    

    ngOnInit() : void{

      this.typeEvenement= new TypeEvenement();
      
      this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this._id = params._id;
        console.log(this._id); // price
      }
    );
    


  }
  save(){
    //
 //   this.book.nbrLike=0;
    this.typeEvenementService.addTypeEvenement(this.typeEvenement).subscribe();
    //notify

  }

}


