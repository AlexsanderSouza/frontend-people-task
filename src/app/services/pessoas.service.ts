import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {ReplaySubject} from 'rxjs/ReplaySubject';
import { tap } from 'rxjs/operators/tap';

import { Pessoa } from './../pessoa';
import * as URL from './url';



@Injectable()
export class PessoasService {

  pessoas$: ReplaySubject<Pessoa[]> = new ReplaySubject<Pessoa[]>(1);

  constructor(private _http: HttpClient) { 
    this.obtemTodasAsPessoas();
  }

  removePessoas(p2: Pessoa){
    const url = URL.baseUrl + URL.pessoaDelete;
    const x = new HttpParams().set('params', p2.id.toString());

    this._http
      .delete<Pessoa>(url,{params : x})
      .subscribe((pSalva: Pessoa) => {
       this.obtemTodasAsPessoas();
      });
  }
    
  obtemTodasAsPessoas() {
    const url = URL.baseUrl + URL.pessoaObtemTodas_GET;
    
    this._http
      .get<Pessoa[]>(url)
      .subscribe((ps: Pessoa[]) => {
        this.pessoas$.next(ps);
      });
  }

  addPessoas(p: Pessoa): void {
    const url = URL.baseUrl + URL.pessoaSave_POST;
    this._http
      .post<Pessoa>(url, p)
      .pipe(
        tap((pSalva: Pessoa)=> this.obtemTodasAsPessoas())
      )
      .subscribe();
  }
}
