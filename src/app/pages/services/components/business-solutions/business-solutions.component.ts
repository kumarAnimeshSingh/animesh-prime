import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BusinessSolution } from '../../../../core/models/services.models';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-business-solutions',
  standalone: true,
  imports: [IconComponent, SectionHeadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="solutions" id="solutions" aria-labelledby="solutions-title">
      <div class="solutions__bg" aria-hidden="true"></div>
      <div class="container">
        <app-section-heading
          eyebrow="Business solutions"
          title="Technology that solves real business problems"
          headingId="solutions-title"
          lead="We start from the business requirement, not the tool. These are the transformations our clients most often ask us to deliver."
          [inverse]="true"
        />

        <ul class="solutions__grid">
          @for (item of solutions(); track item.title; let i = $index) {
            <li class="solution">
              <div class="solution__top">
                <span class="solution__icon"><app-icon [name]="item.icon" /></span>
                <span class="solution__num" aria-hidden="true">{{ (i + 1).toString().padStart(2, '0') }}</span>
              </div>
              <h3 class="solution__title">{{ item.title }}</h3>
              <p class="solution__desc">{{ item.description }}</p>
              <p class="solution__outcome">
                <app-icon name="trending" />
                <span><span class="visually-hidden">Outcome: </span>{{ item.outcome }}</span>
              </p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styleUrl: './business-solutions.component.scss',
})
export class BusinessSolutionsComponent {
  readonly solutions = input.required<readonly BusinessSolution[]>();
}
