import { ChangeDetectionStrategy, Component, DestroyRef, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import {
  BUSINESS_SOLUTIONS,
  DIFFERENTIATORS,
  INDUSTRIES,
  PROCESS_STEPS,
  SERVICE_CATEGORIES,
  TECH_STACK,
} from '../../core/content/services.content';
import { SITE } from '../../core/content/site.content';
import { HeroHighlight, ServiceCategory } from '../../core/models/services.models';
import { SiteShellComponent } from '../../shell/site-shell.component';
import { BusinessSolutionsComponent } from './components/business-solutions/business-solutions.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { InquiryCtaComponent } from './components/inquiry-cta/inquiry-cta.component';
import { ProcessStepsComponent } from './components/process-steps/process-steps.component';
import { ServiceExplorerComponent } from './components/service-explorer/service-explorer.component';
import { ServicesHeroComponent } from './components/services-hero/services-hero.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';

const PAGE_DESCRIPTION =
  'Enterprise software, full-stack web development, AI solutions, Microsoft Azure cloud & DevOps, healthcare technology, and long-term support — secure, scalable technology built around your business.';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    SiteShellComponent,
    ServicesHeroComponent,
    ServiceExplorerComponent,
    TechStackComponent,
    BusinessSolutionsComponent,
    IndustriesComponent,
    WhyChooseUsComponent,
    ProcessStepsComponent,
    InquiryCtaComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  protected readonly contact = SITE.contact;
  protected readonly categories = SERVICE_CATEGORIES;
  protected readonly techStack = TECH_STACK;
  protected readonly solutions = BUSINESS_SOLUTIONS;
  protected readonly industries = INDUSTRIES;
  protected readonly differentiators = DIFFERENTIATORS;
  protected readonly processSteps = PROCESS_STEPS;

  protected readonly highlights: readonly HeroHighlight[] = [
    { value: '15+', label: 'Years of engineering experience' },
    { value: `${SERVICE_CATEGORIES.length}`, label: 'Specialised service practices' },
    {
      value: `${SERVICE_CATEGORIES.reduce((total, category) => total + category.services.length, 0)}`,
      label: 'Services delivered end to end',
    },
    { value: '1', label: 'Accountable team, discovery to support' },
  ];

  protected readonly selectedCategory = signal(SERVICE_CATEGORIES[0].id);

  private readonly topicId = toSignal(
    inject(ActivatedRoute).queryParamMap.pipe(map((params) => params.get('service'))),
    { initialValue: null },
  );

  private readonly topicMatch = computed(() => findTopic(this.categories, this.topicId()));
  protected readonly enquiryTopic = computed(() => this.topicMatch()?.label ?? null);

  constructor() {
    effect(() => {
      const categoryId = this.topicMatch()?.categoryId;
      if (categoryId) {
        this.selectedCategory.set(categoryId);
      }
    });

    const meta = inject(Meta);
    const previousDescription = meta.getTag('name="description"')?.content;
    meta.updateTag({ name: 'description', content: PAGE_DESCRIPTION });
    inject(DestroyRef).onDestroy(() => {
      if (previousDescription) {
        meta.updateTag({ name: 'description', content: previousDescription });
      }
    });
  }
}

function findTopic(
  categories: readonly ServiceCategory[],
  id: string | null,
): { label: string; categoryId: string } | null {
  if (!id) {
    return null;
  }
  for (const category of categories) {
    if (category.id === id) {
      return { label: category.name, categoryId: category.id };
    }
    const service = category.services.find((item) => item.id === id);
    if (service) {
      return { label: service.name, categoryId: category.id };
    }
  }
  return null;
}
