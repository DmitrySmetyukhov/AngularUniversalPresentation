import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IDog} from '../interfaces/dog.interface';
import {DataService} from './data.service';
import {Observable} from 'rxjs';

@Injectable()
export class DogResolver implements Resolve<IDog> {

  constructor(
    private _dataService: DataService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IDog> {
    const id = route.params.id;

    return this._dataService.getById(id);
  }
}
