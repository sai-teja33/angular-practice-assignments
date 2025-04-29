import { CanDeactivateFn } from '@angular/router';
import { EditpriceComponent } from './routing/editprice/editprice.component';

export const changesGuard: CanDeactivateFn<EditpriceComponent> = (component) => {
  // return !component.dirty ? true:confirm('changes will be lost.Are you sure');
  return component.dirty ? confirm('Changes will be lost. Are you sure you want to leave?') : true;
};
