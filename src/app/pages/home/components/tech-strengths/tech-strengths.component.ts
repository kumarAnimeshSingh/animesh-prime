import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';
import { IconName } from '../../../../shared/ui/icon/icons';

export interface SkillGroup {
  readonly title: string;
  readonly icon: IconName;
  readonly summary: string;
  readonly featured?: boolean;
  readonly items: readonly string[];
}

@Component({
  selector: 'app-tech-strengths',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tech-strengths.component.html',
  styleUrl: './tech-strengths.component.scss',
})
export class TechStrengthsComponent {
  readonly groups = input.required<readonly SkillGroup[]>();
  readonly languages = input<readonly string[]>([]);

  /** On the 3-column layout featured cards span two cells; stretch the last card when a single cell would be left empty. */
  protected readonly fillLastRow = computed(() => {
    const groups = this.groups();
    const cells = groups.length + groups.filter((group) => group.featured).length;
    return cells % 3 === 2;
  });
}
