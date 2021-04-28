import { Component, OnInit } from '@angular/core';
import { UsedcreateService } from './usedcreate.service';

@Component({
  selector: 'app-usedcreate',
  templateUrl: './usedcreate.component.html',
  styleUrls: ['./usedcreate.component.scss'],
})

export class UsedcreateComponent implements OnInit {
    public used = {
        name: '',
        email: '',
        address: '',
        phone: '',
    }

    constructor (
        private usedcreateService: UsedcreateService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.usedcreateService.GpCreate(this.used).subscribe(data => {
            this.used.name = ''
 	 	this.used.email = ''
 	 	this.used.address = ''
 	 	this.used.phone = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}