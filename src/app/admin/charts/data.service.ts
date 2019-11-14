import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class DataService {

  private urlEndPoint:string= 'http://6430064258cb.sn.mynetname.net:3458/node/1/arduino/Ard2/port/14/read/analog'

  private urlEndPointGetLed:string= 'http://6430064258cb.sn.mynetname.net:3458/node/1/arduino/Ard2/port/7/read/digital'

  private urlEndPointSetLed:string= 'http://6430064258cb.sn.mynetname.net:3458/node/1/arduino/Ard2/port/7/output/digital'

  constructor(private http: HttpClient) {}
  
  getGdpData() {
    return [
      {
        name: 'GM',
        series: [
          {
            name: '2010',
            value: 406
          },
          {
            name: '2000',
            value: 369
          },
          {
            name: '1990',
            value: 314
          }
        ]
      },
      {
        name: 'US',
        series: [
          {
            name: '2010',
            value: 497
          },
          {
            name: '2000',
            value: 459
          },
          {
            name: '1990',
            value: 370
          }
        ]
      },
      {
        name: 'FR',
        series: [
          {
            name: '2010',
            value: 367
          },
          {
            name: '2000',
            value: 347
          },
          {
            name: '1990',
            value: 294
          }
        ]
      },
      {
        name: 'CA',
        series: [
          {
            name: '1990',
            value: 337
          },
          {
            name: '2000',
            value: 598
          },
          {
            name: '2010',
            value: 396
          }
        ]
      }
    ];
  }

  getTemperatura(){
    return this.http.get(this.urlEndPoint)
    .pipe(map(res => res))
  }

  getLed(){
    return this.http.get(this.urlEndPointGetLed)
    .pipe(map(res => res))
  }

  setLed(id: number){
   console.log('valor ' + id);
   return this.http.put(this.urlEndPointSetLed+'/'+id.toString(),id).subscribe(res=>
    res.toString()); 
 }
}
