import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: 'Angular App';
  id: number;

  constructor( private route: Router ) {}

  searchStudent() {
    this.route.navigate(['/find-student', this.id]);
   }

  ngOnInit(): void {
   this.searchStudent()
  }
}
