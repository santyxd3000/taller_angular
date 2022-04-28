import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import {dataSeries} from './dataSeries';
import {SerieService} from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  series: Array<Serie> = [];
  avgSeason: number = 0;
  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.average(this.series);
    });
  }

 average(series: Array<Serie>){
    let suma: number = 0;
    series.forEach(serie => {
      suma = suma + serie.seasons;
    });
    this.avgSeason = suma / series.length;
  }

  ngOnInit() {
    this.getSeries();
  }
}
