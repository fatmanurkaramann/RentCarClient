import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb';

@Component({
  imports: [],
  templateUrl: './dashboard.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Dashboard {
readonly #bradcrumb = inject(BreadcrumbService);

constructor() {
  this.#bradcrumb.setDashboard();
}
}
