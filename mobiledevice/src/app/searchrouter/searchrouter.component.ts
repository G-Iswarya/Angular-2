import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-router',
  templateUrl: './searchrouter.component.html',
  styleUrls: ['./searchrouter.component.css']
})
export class SearchrouterComponent {

  constructor(private spinner: NgxSpinnerService, private router:Router) {

  }
  load()
  {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
    setTimeout(()=>{this.router.navigate(['/wifisearch'])},2500)
    
  }
  ngOnInit()
  {

  }
}
