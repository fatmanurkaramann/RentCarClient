import { Injectable, signal } from '@angular/core';

export interface BreadCrumbmodel {
  title: string;
  url: string;
  icon?: string;
  isActive?: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  readonly data = signal<BreadCrumbmodel[]>([]);

  setBreadcrumbs(breadcrumbs: BreadCrumbmodel[]): void {
    this.data.update((prev) => [...prev, ...breadcrumbs]);
  }
  resetBreadcrumbs(): void {
    const dashboard: BreadCrumbmodel = {
      title: 'Dashboard',
      url: '/',
      icon: 'bi-speedometer2',
    };
    this.data.set([{ ...dashboard }]);
  }
    setDashboard(): void {
    const dashboard: BreadCrumbmodel = {
      title: 'Dashboard',
      url: '/',
      icon: 'bi-speedometer2',
      isActive: true
    };
    this.data.set([{ ...dashboard }]);
  }
}
