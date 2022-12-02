import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/service/users.service';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user!: any;
  id!: number;
  constructor(private userSrv: UsersService, private router: ActivatedRoute) { }

 ngOnInit(): void {
    this.router.params.subscribe(params => {
      const id = +params ['id']
      this.user = this.userSrv.getUser(id)
    })
  }

}
