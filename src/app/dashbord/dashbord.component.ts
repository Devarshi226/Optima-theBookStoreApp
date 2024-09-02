import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit  {
  
  ngOnInit(): void {
    this.chart();
    this.stacked()
  }
  
  chart(){
    new Chart("doughnet",{
      type: 'doughnut',
      data: {
        labels: [
          'Instagram',
          'Facebook',
          'Twitter'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [250, 90, 100],
          backgroundColor: [
            'rgb(202, 166, 166)',
            'rgb(180, 123, 132)',
            'rgb(148, 78, 99)'
          ],
          hoverOffset: 4
        }]
      }
    })
  }

  stacked(){
    
    new Chart("stacked",{
      type:'line',
      data: {
        labels: [
          'ABC',
          'PQR',
          'XYZ',
          'MNO'
        ],
        datasets: [
          {
            label: 'My First dataset',
            data: [180, 30, 150, 50,],
            borderColor: 'rgb(148, 78, 99, 0.7)',
            backgroundColor:'rgb(148, 78, 99, 0.5)',
            fill: true
          },
          {
            label: 'My second dataset',
            data: [125, 70, 190, 135, ],
            borderColor: 'rgb(180, 123, 132,0.7)',
            backgroundColor:'rgb(180, 123, 132, 0.5)',
            fill: true
          },
          {
            label: 'My third dataset',
            data: [40, 180, 100, 80,],
            borderColor: 'rgb(202, 166, 166, 0.7)',
            backgroundColor:'rgb(202, 166, 166, 0.5)',
            fill: true
          },
          {
            label: 'My forth dataset',
            data: [220, 122, 60, 190,],
            borderColor: 'rgb(255, 231, 231, 0.9)',
            backgroundColor:'rgb(255, 231, 231, 0.7)',
            fill: true
          },
          
        ]
      }
    })
  }
}
