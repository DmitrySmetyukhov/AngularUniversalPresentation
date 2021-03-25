import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../services/data.service';
import {IDog} from '../interfaces/dog.interface';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  dog: IDog;

  constructor(
    private _route: ActivatedRoute,
    private _dataService: DataService,
    private _title: Title,
    private _meta: Meta) {
  }

  ngOnInit(): void {
    this.dog = this._route.snapshot.data.dog;

    this._title.setTitle(this.dog.breed);
    this._meta.addTag({name: 'description', content: this.dog.shortDescription});
  }
}
