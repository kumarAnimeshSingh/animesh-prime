import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export interface CareerRole {
  readonly start: number;
  readonly end: number | null;
  readonly title: string;
  readonly detail: string;
  readonly focus: readonly string[];
}

@Component({
  selector: 'app-career-timeline',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './career-timeline.component.html',
  styleUrl: './career-timeline.component.scss',
})
export class CareerTimelineComponent {
  readonly roles = input.required<readonly CareerRole[]>();

  private readonly currentYear = new Date().getFullYear();

  protected readonly entries = computed(() =>
    this.roles().map((role) => {
      const isCurrent = role.end === null;
      const years = Math.max(1, (role.end ?? this.currentYear) - role.start);
      return {
        ...role,
        isCurrent,
        duration: `${years}${isCurrent ? '+' : ''} ${years === 1 ? 'year' : 'years'}`,
      };
    }),
  );

  protected readonly firstYear = computed(() => Math.min(...this.roles().map((role) => role.start)));
  protected readonly currentRole = computed(() => this.roles().find((role) => role.end === null));
}
