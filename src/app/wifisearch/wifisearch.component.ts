import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

export class PeriodicElement {
  name!: string;
 }
@Component({
  selector: 'app-wifisearch',
  templateUrl: './wifisearch.component.html',
  styleUrls: ['./wifisearch.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [MatTableModule,CommonModule]
})

export class WifisearchComponent {
  constructor(private spinner: NgxSpinnerService, private router:Router) {

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
   /** spinner starts on init */
   this.spinner.show();

   setTimeout(() => {
     /** spinner ends after 5 seconds */
     this.spinner.hide();
   }, 2000);
  setTimeout(()=>{ this.showtable = true},2500);
}
connectclick()
{
  this.router.navigate(['/searchrouter']);
}

}
