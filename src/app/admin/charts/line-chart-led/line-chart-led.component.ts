import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-line-chart-led',
  templateUrl: './line-chart-led.component.html',
  styleUrls: ['./line-chart-led.component.scss']
})
export class LineChartLedComponent implements OnInit {

  isChecked = true;
  formGroup: FormGroup;
  checked = false;
  chart:Array<any> = []; 

  constructor(private dataService: DataService, formBuilder: FormBuilder) { 
    this.formGroup = formBuilder.group({
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  lineChartData: Array<any> = [
    { data: this.chart , label: 'LED' }
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
    setInterval(() => {
      this.dataService.getLed().subscribe((data: any)=> {
        console.log(data);
        this.chart.push(data);
     })
    }, 4000)
  }
  chartClicked(e: any): void {
    console.log(e.active);
    console.log(e.event);
  }

  chartHovered(e: any): void {
    console.log(e);
  }

  changed(){
    if(this.checked){
      console.log('es uno');
      this.dataService.setLed(1);
    }
    else{
      this.dataService.setLed(0);
    }
  }
}
