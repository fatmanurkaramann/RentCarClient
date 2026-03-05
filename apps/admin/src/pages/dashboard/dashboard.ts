import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb';
import BlankComponent from '../../components/blank/blank';


@Component({
  imports: [BlankComponent],
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
