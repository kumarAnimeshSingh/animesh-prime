import {
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  NgZone,
  afterNextRender,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterLink, RouterLinkActive, Scroll } from '@angular/router';
import { filter } from 'rxjs';
import { SITE } from '../core/content/site.content';

interface NavLink {
  readonly label: string;
  readonly path: string;
  readonly fragment?: string;
}

@Component({
  selector: 'app-site-shell',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-shell.component.html',
  styleUrl: './site-shell.component.scss',
})
export class SiteShellComponent {
  readonly site = SITE;
  readonly year = new Date().getFullYear();
  menuOpen = false;

  readonly links: readonly NavLink[] = [
    { label: 'Experience', path: '/', fragment: 'experience' },
    { label: 'Capabilities', path: '/', fragment: 'capabilities' },
    { label: 'Services', path: '/services' },
    { label: 'Education', path: '/', fragment: 'education' },
    { label: 'Contact', path: '/', fragment: 'contact' },
  ];

  private readonly topbar = viewChild.required<ElementRef<HTMLElement>>('topbar');
  private readonly sections = signal<readonly HTMLElement[]>([]);
  private readonly current = signal<string | null>(null);
  /** Id of the home section in view; always null on pages without those sections. */
  readonly activeSection = computed(() => (this.sections().length ? this.current() : null));

  // While pinned, the router's smooth anchor scroll can't flicker the highlight
  // through the sections in between; scroll input or the scroll ending releases it.
  private pinned = false;

  constructor() {
    const destroyRef = inject(DestroyRef);
    const zone = inject(NgZone);

    inject(Router)
      .events.pipe(
        filter((e): e is Scroll => e instanceof Scroll),
        takeUntilDestroyed()
      )
      .subscribe((e) => {
        this.pinned = !e.position;
        if (this.pinned) this.current.set(e.anchor);
      });

    afterNextRender(() => {
      const sections = this.links.flatMap((l) => (l.fragment && document.getElementById(l.fragment)) || []);
      if (!sections.length) return;
      this.sections.set(sections);
      if (!this.pinned) this.spy();

      let frame = 0;
      const onScroll = () => {
        if (!this.pinned && !frame) {
          frame = requestAnimationFrame(() => {
            frame = 0;
            this.spy();
          });
        }
      };
      const release = () => (this.pinned = false);
      const settle = () => {
        release();
        onScroll();
      };
      const listeners = new AbortController();
      const opts = { passive: true, signal: listeners.signal };

      zone.runOutsideAngular(() => {
        addEventListener('scroll', onScroll, opts);
        addEventListener('resize', onScroll, opts);
        addEventListener('scrollend', settle, opts);
        for (const type of ['wheel', 'touchstart', 'keydown', 'mousedown']) {
          addEventListener(type, release, opts);
        }
      });
      destroyRef.onDestroy(() => {
        listeners.abort();
        cancelAnimationFrame(frame);
      });
    });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  private spy(): void {
    const sections = this.sections();
    const atBottom = scrollY + innerHeight >= document.documentElement.scrollHeight - 2;
    const line = this.topbar().nativeElement.offsetHeight + innerHeight * 0.25;
    const active = atBottom
      ? sections.at(-1)
      : sections.filter((s) => s.getBoundingClientRect().top <= line).at(-1);
    this.current.set(active?.id ?? null);
  }
}
