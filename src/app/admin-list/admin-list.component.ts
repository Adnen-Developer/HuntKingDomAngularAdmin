/*
  selector: 'app-admin-list',

*/


import { Component, OnInit } from '@angular/core';
import {Admin} from "../model/admin";
import {AdminService} from "../services/admin.service";
// import {CalculService} from "../services/calcul.service";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  title: string;
  list: Admin[];
  constructor(private adminService: AdminService ) {
  }
  ngOnInit(): void {
    this.title = "test";

    this.adminService.getList().subscribe(
      (data:Admin[])=> this.list=data
    );
  }

/*
  incrementLike(book: Book): void{
    let i = this.list.indexOf(book);
    if(i!=-1){
      this.list[i].nbrLike++;
    }
  }
  buyBook(i:number):void{
    this.list[i].quantity--;
  }
 getStatBook(){
    return this.calcul.getStat(this.list, 'quantity',0)
 }

 */

  delete(_id: string): void {

     this.adminService.deleteAdmin(_id).subscribe();

     this.adminService.getList().subscribe(
      (data:Admin[])=> this.list=data
    );

  }

}
