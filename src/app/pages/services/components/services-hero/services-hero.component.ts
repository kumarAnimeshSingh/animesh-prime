import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroHighlight, ServiceCategory } from '../../../../core/models/services.models';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';

@Component({
  selector: 'app-services-hero',
  standalone: true,
  imports: [RouterLink, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services-hero.component.html',
  styleUrl: './services-hero.component.scss',
})
export class ServicesHeroComponent {
  readonly categories = input.required<readonly ServiceCategory[]>();
  readonly highlights = input.required<readonly HeroHighlight[]>();
  readonly categorySelect = output<string>();
}
