import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TechStackGroup } from '../../../../core/models/services.models';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [IconComponent, SectionHeadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="stack" id="technologies" aria-labelledby="technologies-title">
      <div class="container">
        <app-section-heading
          eyebrow="Technology stack"
          title="Technologies We Work With"
          headingId="technologies-title"
          lead="A focused, proven stack — chosen for security, performance, and long-term maintainability rather than trends."
          align="center"
        />

        <ul class="stack__grid">
          @for (group of groups(); track group.id) {
            <li class="group">
              <div class="group__head">
                <span class="group__icon"><app-icon [name]="group.icon" /></span>
                <div>
                  <h3 class="group__name">{{ group.name }}</h3>
                  <p class="group__desc">{{ group.description }}</p>
                </div>
              </div>
              <ul class="group__items" [attr.aria-label]="group.name + ' technologies'">
                @for (item of group.items; track item) {
                  <li>{{ item }}</li>
                }
              </ul>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styleUrl: './tech-stack.component.scss',
})
export class TechStackComponent {
  readonly groups = input.required<readonly TechStackGroup[]>();
}
