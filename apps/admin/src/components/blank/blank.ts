import { Location, NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EntityModel } from '../../models/entity.model';

@Component({
  selector: 'app-blank',
  imports: [NgClass,RouterLink],
  templateUrl: './blank.html',
  styleUrl: './blank.css',
})
export default class BlankComponent {
  readonly pageTitle = input.required<string>();
  readonly pageDescription = input<string>('');
  readonly pageIcon = input.required<string>();
  readonly showStatus = input<boolean>(false);
  readonly status = input<boolean>(false);
  readonly showBackBtn = input<boolean>(true);
  readonly #location = inject(Location);
  readonly showEditBtn = input<boolean>(true);
  readonly editBtnUrl = input<string>('');
  readonly audit = input<EntityModel>()
  back() {
    this.#location.back();
  }
}
