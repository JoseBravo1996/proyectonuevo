import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  
  constructor(private dataService: DataService) {}
  c1: number;
  c2: number;
  c3: number;
  logR2: number;
  temp: number;
  chart:Array<any> = []; 



  lineChartData: Array<any> = [
    { data: this.chart, label: 'Temperatura' }
  ];
  lineChartLabels: Array<any> = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30'

  ];
  lineChartOptions: any = {
    responsive: true
  };
  lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  lineChartLegend = true;
  lineChartType = 'line';

  ngOnInit() {
    this.getTemperatura();
  }
  chartClicked(e: any): void {
    console.log(e.active);
    console.log(e.event);
  }

  chartHovered(e: any): void {
    console.log(e);
  }

  getTemperatura(){
    //this.dataService.getTemperatura().subscribe(responseData => console.log(responseData));
    
    // setInterval(() => {
    //   this.dataService.getTemperatura().subscribe((data: number)=>{
    //     console.log(this.CalTemperatura(data,false,100000).toFixed(2));
    //   })
    // }, 10000)
    setInterval(() => {
    this.dataService.getTemperatura().subscribe((data: any)=> {
     // console.log(data);
      // var valor:string = data;
      // valor.split('*');
      // console.log(valor[0].toString()+'si es ese');
       this.chart.push(this.CalTemperatura(data,false,100000).toFixed(2));
       console.log(this.CalTemperatura(data,false,100000).toFixed(2));
   })
  }, 10000)
}

   CalTemperatura(vin: number,kelvin: Boolean,termistor: number ){
     
     this.c1 = 2.114990448e-03;
     this.c2 = 0.3832381228e-04;  
     this.c3 = 5.228061052e-07;
     this.logR2= Math.log(termistor * (1023 / vin- 1.0));
     this.temp= (1.0 / (this.c1 + this.c2 * this.logR2 + this.c3 * this.logR2 * this.logR2 * this.logR2));
     if(!kelvin)
      {
       this.temp= this.temp - 273.15;
      }
      return this.temp;
    }

}
