import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  effect,
  input,
  model,
  viewChild,
  viewChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceCategory } from '../../../../core/models/services.models';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';
import { ServiceCardComponent } from '../service-card/service-card.component';

@Component({
  selector: 'app-service-explorer',
  standalone: true,
  imports: [RouterLink, IconComponent, SectionHeadingComponent, ServiceCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './service-explorer.component.html',
  styleUrl: './service-explorer.component.scss',
})
export class ServiceExplorerComponent {
  readonly categories = input.required<readonly ServiceCategory[]>();
  readonly selectedId = model.required<string>();

  protected readonly panelId = 'service-category-panel';

  protected readonly selectedIndex = computed(() =>
    Math.max(
      0,
      this.categories().findIndex((category) => category.id === this.selectedId()),
    ),
  );
  protected readonly selected = computed(() => this.categories()[this.selectedIndex()]);

  private readonly tabList = viewChild<ElementRef<HTMLElement>>('tabList');
  private readonly tabs = viewChildren<ElementRef<HTMLButtonElement>>('tab');

  constructor() {
    effect(() => {
      const list = this.tabList()?.nativeElement;
      const tab = this.tabs()[this.selectedIndex()]?.nativeElement;
      if (list && tab && list.scrollWidth > list.clientWidth) {
        list.scrollTo({ left: tab.offsetLeft - 16, behavior: 'smooth' });
      }
    });
  }

  protected select(id: string): void {
    this.selectedId.set(id);
  }

  protected onTabKeydown(event: KeyboardEvent, index: number): void {
    const count = this.categories().length;
    let next: number;

    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        next = (index + 1) % count;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        next = (index - 1 + count) % count;
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = count - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    this.select(this.categories()[next].id);
    this.tabs()[next]?.nativeElement.focus();
  }

  protected pad(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
