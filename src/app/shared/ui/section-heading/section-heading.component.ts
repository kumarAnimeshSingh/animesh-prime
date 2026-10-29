import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-centered]': "align() === 'center'",
    '[class.is-inverse]': 'inverse()',
  },
  template: `
    <p class="eyebrow">{{ eyebrow() }}</p>
    <h2 class="title" [id]="headingId()">{{ title() }}</h2>
    @if (lead()) {
      <p class="lead">{{ lead() }}</p>
    }
    <ng-content />
  `,
  styles: `
    :host {
      display: block;
      max-width: 46rem;
    }

    :host(.is-centered) {
      margin-inline: auto;
      text-align: center;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      margin: 0 0 0.9rem;
      color: var(--gold-ink);
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    .eyebrow::before {
      content: '';
      width: 1.75rem;
      height: 2px;
      border-radius: 2px;
      background: linear-gradient(90deg, var(--gold), transparent);
    }

    .title {
      margin: 0;
      font-family: var(--font-display);
      font-size: clamp(2.1rem, 4vw, 3.1rem);
      font-weight: 700;
      line-height: 1.02;
      letter-spacing: 0.005em;
      text-transform: uppercase;
      color: var(--navy);
      text-wrap: balance;
    }

    .lead {
      margin: 1.1rem 0 0;
      color: var(--muted);
      font-size: 1.1rem;
      line-height: 1.7;
      text-wrap: pretty;
    }

    :host(.is-inverse) .eyebrow {
      color: var(--gold-soft);
    }

    :host(.is-inverse) .title {
      color: #fff;
    }

    :host(.is-inverse) .lead {
      color: rgba(255, 255, 255, 0.72);
    }
  `,
})
export class SectionHeadingComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly headingId = input.required<string>();
  readonly lead = input<string>();
  readonly align = input<'start' | 'center'>('start');
  readonly inverse = input(false);
}
