import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Router } from '@angular/router';

// declare var moveAbout: any;
declare var $: any;
declare const myTest: any;
declare const myFunction: any;
declare const on: any;
declare const off: any;
declare var particlesJS: any;
declare var toAbout: any;
declare var toHome: any;
declare var toPortfolio: any;
declare var toContact: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'js-demo';
  user = {
    name: '',
    email: '',
    comment: '',
  }
  errors: any=[];

  constructor(
    private _http: HttpService,
    private _router: Router
  ) { }

  ngOnInit(){
    this.user = {name: "", email: "", comment: ""};

    $(".about").click(function(){
      $(".aboutTitle").animate({left: '44%'}, 'slow');
    });
    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 300) {
        $('.aboutTitle').animate({left: '44%'}, 'slow');
      }
    });
    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 1400) {
        $('.projects').animate({left: '44%'}, 'slow');
      }
    });
    $(".portfolio").click(function(){
      $(".projects").animate({left: '44%'}, 'slow');
    });
    $(".logo1").hover(function(){
      $(this).animate({left: '29%'});
      }, function(){
      $(this).animate({left: '0px'});
    });
    $(".logo2").hover(function(){
      $(this).animate({right: '72%'});
      }, function(){
      $(this).animate({left: '0px'});
    });
    $(".logo3").hover(function(){
      $(this).animate({right: '31%'});
      }, function(){
      $(this).animate({left: '0px'});
    });
    $(".logo4").hover(function(){
      $(this).animate({right: '85%'});
      }, function(){
      $(this).animate({right: '62%'});
    });
    $(".logo5").hover(function(){
      $(this).animate({right: '50%'});
      }, function(){
      $(this).animate({right: '20%'});
    });
    $(".button").click(function(){
      $(".aboutTitle").animate({left: '44%'}, 'slow');
    });
  }
  down2(){
    toPortfolio();
  }
  onClick(){
    myTest();
  }
  hide(){
    off();
  }
  show(){
    on();
  }
  down1(){
    toAbout()
  }
  up(){
    toHome();
  }
  down3(){
    toContact();
  }
  handleSubmit(){
    $(function() {
         alert("Success!");
    })
    toHome();
    this.errors = [];
    console.log("handle");
    this._http.createUser(this.user).subscribe(data => {
      if(data['errors']){
         console.log(data['errors']);
        for (var key in data['errors']){
          this.errors.push(data['errors'][key]['message']);
        }
        console.log(this.errors);
      }else {
//         toHome();
        this.user = {name: "", email: "", comment: ""};
        this._router.navigate(['']);
      }
    });
  }
}
