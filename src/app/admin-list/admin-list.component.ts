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
  nameTitle: string = "AdminList";
  constructor(private adminService: AdminService ) {
  }
  ngOnInit(): void {
    this.title = "test";

    this.adminService.getList().subscribe(
      (data:Admin[])=> this.list=data
    );
  }


  delete(_id: string): void {

     this.adminService.deleteAdmin(_id).subscribe();

     this.adminService.getList().subscribe(
      (data:Admin[])=> this.list=data
    );

  }

}
