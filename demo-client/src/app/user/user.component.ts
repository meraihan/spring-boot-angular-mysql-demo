import { Component, OnInit } from '@angular/core';
import { User } from '../_model/user';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  getUsers(){
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  updateUser(id: number){
    this.router.navigate(['update-user', id]);
  }

  createUser(){
    this.router.navigate(['create-user']);
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe( data => {
      console.log(data);
      this.reloadData();
    })
  }

  reloadData() {
    this.userService.getUsers();
  }
}
