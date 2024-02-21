import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {HomeComponent} from './components/home/home.component';
import {AboutMeComponent} from './components/about-me/about-me.component';
import { MyArtComponent } from './components/my-art/my-art.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
     RouterOutlet,
      ToolbarComponent,
       HomeComponent,
       AboutMeComponent,
       MyArtComponent,
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-portfolioart';
}
