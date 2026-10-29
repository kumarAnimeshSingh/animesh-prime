import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProcessStep } from '../../../../core/models/services.models';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-process-steps',
  standalone: true,
  imports: [RouterLink, IconComponent, SectionHeadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="process" id="process" aria-labelledby="process-title">
      <div class="container">
        <app-section-heading
          eyebrow="How we work"
          title="A clear, proven delivery process"
          headingId="process-title"
          lead="Five well-defined stages keep every engagement predictable, transparent, and focused on outcomes."
          align="center"
        />

        <ol class="steps">
          @for (step of steps(); track step.step) {
            <li class="step">
              <div class="step__marker" aria-hidden="true">
                <span class="step__num">{{ step.step }}</span>
              </div>
              <div class="step__body">
                <div class="step__head">
                  <span class="step__icon"><app-icon [name]="step.icon" /></span>
                  <h3 class="step__title">
                    <span class="visually-hidden">Step {{ step.step }}: </span>{{ step.title }}
                  </h3>
                </div>
                <p class="step__desc">{{ step.description }}</p>
                <ul class="step__deliverables" aria-label="Deliverables">
                  @for (item of step.deliverables; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              </div>
            </li>
          }
        </ol>

        <div class="process__cta">
          <p>Ready to start with a discovery conversation?</p>
          <a class="btn btn--dark" [routerLink]="[]" fragment="inquiry">
            Get Started
            <app-icon name="arrowRight" />
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './process-steps.component.scss',
})
export class ProcessStepsComponent {
  readonly steps = input.required<readonly ProcessStep[]>();
}
