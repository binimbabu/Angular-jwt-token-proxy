import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: any[] = [];
  constructor(private http: HttpClient) {
    this.loadUsers();
  }


  ngOnInit(): void {
  }
  loadUsers() {
    this.http.get('/api/User/GetAllUsers').subscribe((res: any) => {
      if (res.result) {
        this.users = res.data;
        console.log(this.users, "users")
      }

    })
  }
}
