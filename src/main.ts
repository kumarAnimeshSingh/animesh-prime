import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// A load or reload always starts at the top: the fragment is dropped before the
// router's initial navigation reads the URL, so no anchor scroll is triggered.
history.scrollRestoration = 'manual';
if (location.hash) {
  history.replaceState(history.state, '', location.pathname + location.search);
}
window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
