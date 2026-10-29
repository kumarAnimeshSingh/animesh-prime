import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactDetails } from '../../../../core/models/services.models';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-inquiry-cta',
  standalone: true,
  imports: [RouterLink, IconComponent, SectionHeadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './inquiry-cta.component.html',
  styleUrl: './inquiry-cta.component.scss',
})
export class InquiryCtaComponent {
  readonly contact = input.required<ContactDetails>();
  /** Service or practice the visitor came from, used to pre-fill the enquiry. */
  readonly topic = input<string | null>(null);

  protected readonly mailtoHref = computed(() => {
    const topic = this.topic();
    const subject = topic ? `Project enquiry: ${topic}` : 'Project enquiry';
    const body = topic
      ? `Hello,\n\nI'd like to discuss a project involving ${topic}.\n\nCompany:\nTimeline:\nProject details:\n`
      : `Hello,\n\nI'd like to discuss a project.\n\nCompany:\nTimeline:\nProject details:\n`;
    return `mailto:${this.contact().email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  protected readonly telHref = computed(() => `tel:${this.contact().phone.replace(/[^\d+]/g, '')}`);
  protected readonly whatsappHref = computed(
    () => `https://wa.me/${this.contact().whatsapp.replace(/\D/g, '')}`,
  );
}
