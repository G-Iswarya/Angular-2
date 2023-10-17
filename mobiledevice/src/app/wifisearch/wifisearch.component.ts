import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export class PeriodicElement {
  name!: string;
 }
@Component({
  selector: 'app-wifisearch',
  templateUrl: './wifisearch.component.html',
  styleUrls: ['./wifisearch.component.css'],
  standalone: true,
  imports: [MatTableModule,CommonModule]
})

export class WifisearchComponent {
  constructor(private router:Router)
  {

  }
area:String="";
show:boolean = false;
showtable:boolean=false;


public displayedColumns: string[] = ['name','action'];
    public dataSource:any;
    public PeriodicElement!:[];
    ELEMENT_DATA: PeriodicElement[] = [
{ name: 'Velu'},
{name: 'Guru'}]
ngOnInit()
{
this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
}
searchavailable()
{
  this.showtable = !this.showtable
}
connectclick()
{
  this.router.navigate(['/searchrouter']);
}

}
