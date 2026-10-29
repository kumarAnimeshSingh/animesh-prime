import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Differentiator } from '../../../../core/models/services.models';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [RouterLink, IconComponent, SectionHeadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="why" id="why-us" aria-labelledby="why-title">
      <div class="container why__layout">
        <div class="why__intro">
          <app-section-heading
            eyebrow="Why work with us"
            title="Why Businesses Choose Our Technology Solutions"
            headingId="why-title"
            lead="We combine deep engineering experience with a genuine focus on business results — and we stay with you long after launch."
          />

          <div class="why__commit">
            <p class="why__commit-title">Our commitment on every project</p>
            <ul>
              <li><app-icon name="check" />Transparent scope, estimates, and progress</li>
              <li><app-icon name="check" />Clean, documented, maintainable code</li>
              <li><app-icon name="check" />Security and performance from day one</li>
            </ul>
          </div>

          <a class="btn btn--dark" [routerLink]="[]" fragment="inquiry">
            Request a Consultation
            <app-icon name="arrowRight" />
          </a>
        </div>

        <ul class="why__grid">
          @for (item of items(); track item.title) {
            <li class="feature">
              <span class="feature__icon"><app-icon [name]="item.icon" /></span>
              <h3 class="feature__title">{{ item.title }}</h3>
              <p class="feature__desc">{{ item.description }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styleUrl: './why-choose-us.component.scss',
})
export class WhyChooseUsComponent {
  readonly items = input.required<readonly Differentiator[]>();
}
