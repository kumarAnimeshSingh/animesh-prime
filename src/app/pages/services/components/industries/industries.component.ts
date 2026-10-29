import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Industry } from '../../../../core/models/services.models';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [RouterLink, IconComponent, SectionHeadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="industries" id="industries" aria-labelledby="industries-title">
      <div class="container">
        <app-section-heading
          eyebrow="Industries"
          title="Solutions Across Industries"
          headingId="industries-title"
          lead="Industry context matters. We bring domain understanding to every engagement, so solutions fit how your sector really works."
        />

        <ul class="industries__grid">
          @for (industry of industries(); track industry.name) {
            <li class="industry">
              <span class="industry__icon"><app-icon [name]="industry.icon" /></span>
              <h3 class="industry__name">{{ industry.name }}</h3>
              <p class="industry__desc">{{ industry.description }}</p>
            </li>
          }
          <li class="industry industry--cta">
            <h3 class="industry__name">Don't see your industry?</h3>
            <p class="industry__desc">
              Our engineering approach adapts to any domain. Tell us about your requirements.
            </p>
            <a class="btn btn--primary" [routerLink]="[]" fragment="inquiry">
              Discuss Your Project
              <app-icon name="arrowRight" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  `,
  styleUrl: './industries.component.scss',
})
export class IndustriesComponent {
  readonly industries = input.required<readonly Industry[]>();
}
