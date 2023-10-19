import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { device } from '../device';
import { ServicefileService } from '../servicefile.service';

@Component({
  selector: 'app-router',
  templateUrl: './searchrouter.component.html',
  styleUrls: ['./searchrouter.component.css']
})
export class SearchrouterComponent {

  deviceadd:device = new device();
  selected:String;
  password:String;
  name!:String;
  constructor(private spinner: NgxSpinnerService, private router:Router,private service:ServicefileService) {

  }
  ngOnInit()
  { 
    this.selected=this.service.getssid();
    console.log(this.selected);
  }

  load()
  {
    // /** spinner starts on init */
    // this.spinner.show();

    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 1000);
    // setTimeout(()=>{this.router.navigate(['/connected'])},850)
    console.log(this.name)
    console.log(this.password)

    this.deviceadd.ssid=this.selected;
    this.deviceadd.mac=this.name;
    this.deviceadd.password=this.password;
    console.log(this.deviceadd);


    this.service.adddevice(this.deviceadd).subscribe(
      response=>{
        console.log('device added');
      }
    )

    //this.router.navigate(['/connected'])
  }
  
}
