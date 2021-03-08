import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs';
import {IDog} from '../interfaces/dog.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  details$: Observable<IDog>;

  constructor(
    private _route: ActivatedRoute,
    private _dataService: DataService) {
  }

  ngOnInit(): void {
    this.details$ = this._route.params.pipe(
      switchMap(params => this._dataService.getAll().pipe(map(dogs => dogs.find(dog => dog.id === params.id))))
    );
  }

}
