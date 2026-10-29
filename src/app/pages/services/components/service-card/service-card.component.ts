import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceOffering } from '../../../../core/models/services.models';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [RouterLink, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss',
})
export class ServiceCardComponent {
  readonly service = input.required<ServiceOffering>();
  readonly headingLevel = input(3);
  readonly ctaLabel = input('Explore service');
  readonly ctaFragment = input('inquiry');
}
