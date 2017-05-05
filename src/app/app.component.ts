import {Component, OnInit, ViewChild} from '@angular/core';
import { ModelsService } from './models.service';
import { Model } from './models';
import { MdSidenav} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  models: Model[] = [];
  selectedModel: Model;
  @ViewChild('sidenav') sidenav: MdSidenav;


  constructor(private modelsService: ModelsService) {}

  ngOnInit(){
    this.models = this.modelsService.getAll();
  }

  showDetails(model: Model){
    // 1. set selected models
    this.selectedModel = model;

    // 2. open sidenav
    this.sidenav.open();
  }
}
