import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AdService } from '../../services/ad.service';
import { SessionService } from "../../services/session";
import { UserService } from "../../services/user.service";
import { FileUploader } from 'ng2-file-upload';
import { environment } from "../../environments/environment";


@Component({
  selector: 'app-myprofile-edit',
  templateUrl: './myprofile-edit.component.html',
  styleUrls: ['./myprofile-edit.component.css']
})
export class MyprofileEditComponent implements OnInit {
  user;
  
  uploader: FileUploader = new FileUploader({
    url: `${environment.BASEURL}/api/user/edit`,
    method: 'POST'
  });
  

  constructor(
    private sessionService: SessionService,
    private adService: AdService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.route.params.subscribe(params =>
      this.sessionService.isLogged().subscribe(user => {
        this.user = user;
      })
    )
  }

  ngOnInit() { }
  

  edit() {
    if (this.uploader.queue.length === 0) {
      this.userService.edit(this.user).subscribe(us => {
        this.user = us;
        this.router.navigate(['/profile']);
      }); 
    } else {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('username', this.user.username);
      form.append('email', this.user.email);
      form.append('_id', this.user._id);
    };
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = () => {
      this.router.navigate(['/profile']);
    };}
  }
}
