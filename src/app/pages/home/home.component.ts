import { Component } from '@angular/core';
import { SITE } from '../../core/content/site.content';
import { SiteShellComponent } from '../../shell/site-shell.component';
import { CareerTimelineComponent } from './components/career-timeline/career-timeline.component';
import { TechStrengthsComponent } from './components/tech-strengths/tech-strengths.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SiteShellComponent, CareerTimelineComponent, TechStrengthsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly site = SITE;
}
