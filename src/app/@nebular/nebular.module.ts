import { NgModule } from '@angular/core';
import {
  NbAccordionModule,
  NbActionsModule,
  NbAlertModule,
  NbAutocompleteModule,
  NbBadgeModule,
  NbButtonGroupModule,
  NbButtonModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule,
  NbDatepickerModule,
  NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbPopoverModule,
  NbProgressBarModule,
  NbRadioModule,
  NbSearchModule,
  NbSelectModule,
  NbSidebarModule,
  NbSpinnerModule,
  NbStepperModule,
  NbTabsetModule,
  NbTimepickerModule,
  NbToggleModule,
  NbTooltipModule,
  NbTreeGridModule,
  NbUserModule,
} from '@nebular/theme';

@NgModule({
  exports: [
    NbLayoutModule, 
    NbCardModule, 
    NbStepperModule, 
    NbAccordionModule, 
    NbListModule,
    NbSidebarModule,
    NbMenuModule,
    NbTabsetModule,
    NbActionsModule,
    NbInputModule,
    NbButtonModule,
    NbButtonGroupModule,
    NbCheckboxModule,
    NbToggleModule,
    NbRadioModule,
    NbSelectModule,
    NbAutocompleteModule,
    NbDatepickerModule,
    NbTimepickerModule,
    NbPopoverModule,
    NbContextMenuModule,
    NbTooltipModule,
    NbSearchModule,
    NbUserModule,
    NbAlertModule,
    NbIconModule,
    NbSpinnerModule,
    NbProgressBarModule,
    NbBadgeModule,
    NbCalendarModule,
    NbCalendarRangeModule,
    NbTreeGridModule,
    NbFormFieldModule,
    NbDialogModule
  ],
})
export class NebularModule {}
