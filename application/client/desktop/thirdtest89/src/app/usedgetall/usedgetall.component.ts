import { Component, OnInit } from '@angular/core';
import { UsedgetallService } from './usedgetall.service';

@Component({
  selector: 'app-usedgetall',
  templateUrl: './usedgetall.component.html',
  styleUrls: ['./usedgetall.component.scss'],
})

export class UsedgetallComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'email', field: 'email'  },{ headerName: 'address', field: 'address'  },{ headerName: 'Phone', field: 'phone'  },];
    public used = {
        name: '',
        email: '',
        address: '',
        phone: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private usedgetallService: UsedgetallService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.usedgetallService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}