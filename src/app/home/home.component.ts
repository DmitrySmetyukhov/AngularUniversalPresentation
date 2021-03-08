import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dogs$: Observable<any[]>;

  constructor(private _dataService: DataService) {

  }

  ngOnInit() {
    this.dogs$ = this._dataService.getAll();
  }

}
