import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import { log } from 'util';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import {switchMap} from 'rxjs/operators/switchMap';

import { Pessoa } from './../pessoa';
import * as URL from './url';
import { tap } from 'rxjs/operators/tap';


@Injectable()
export class PessoasService {

  private _pessoas: Pessoa[] = [];

  pessoas$: ReplaySubject<Pessoa[]> = new ReplaySubject<Pessoa[]>(1);

  constructor(private _http: HttpClient) { 
    this.obtemTodasAsPessoas();
  }

  addPessoas(pessoa: Pessoa) {
    this.gravaPessoa(pessoa);
    //this.obtemTodasAsPessoas();
  }

  removePessoas(p2: Pessoa){
    // const index = this._pessoas.indexOf(pessoa);
    // this._pessoas.splice(index, 1);
    // this.pessoas$.next([...this._pessoas]);
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

  gravaPessoa(p: Pessoa): void {
    const url = URL.baseUrl + URL.pessoaSave_POST;
    this._http
      .post<Pessoa>(url, p)
      .pipe(
        tap((pSalva: Pessoa)=> this.obtemTodasAsPessoas())
      )
      .subscribe();
  }
}
