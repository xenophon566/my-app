// Nebular Global Modules
import {
    NbIconModule,
    NbLayoutModule,
    NbCardModule,
    NbStepperModule,
    NbAccordionModule,
    NbListModule,
    NbFormFieldModule,
} from '@nebular/theme';

// Nebular Navigation Modules
import { NbSidebarModule, NbMenuModule, NbTabsetModule, NbActionsModule } from '@nebular/theme';

// Nebular Forms Modules
import {
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbToggleModule,
    NbRadioModule,
    NbSelectModule,
    NbAutocompleteModule,
    NbDatepickerModule,
} from '@nebular/theme';

// Nebular Modals & Overlays Modules
import {
    NbPopoverModule,
    NbContextMenuModule,
    NbDialogModule,
    NbToastrModule,
    NbTooltipModule,
    NbWindowModule,
} from '@nebular/theme';

// Nebular Extra Modules
import {
    NbSearchModule,
    NbUserModule,
    NbAlertModule,
    NbSpinnerModule,
    NbProgressBarModule,
    NbBadgeModule,
    NbChatModule,
    NbCalendarModule,
    NbCalendarRangeModule,
    NbTreeGridModule,
} from '@nebular/theme';

/**
 * Export Nebular Modules List
 * Customize modules list here for your feature module
 *
 * @export {const} NEBULAR_GLOBAL
 */
export const NEBULAR_GLOBAL = [
    NbIconModule,
    NbLayoutModule,
    NbCardModule,
    NbStepperModule,
    NbAccordionModule,
    NbListModule,
];

/**
 * nebular navigation
 *
 * @export {const} NEBULAR_NAVIGATION
 */
export const NEBULAR_NAVIGATION = [NbTabsetModule, NbActionsModule];

/**
 * nebular forms
 *
 * @export {const} NEBULAR_FORMS
 */
export const NEBULAR_FORMS = [
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbToggleModule,
    NbRadioModule,
    NbSelectModule,
    NbAutocompleteModule,
    NbDatepickerModule,
    NbFormFieldModule,
];

/**
 * nebular modals
 *
 * @export {const} NEBULAR_MODALS
 */
export const NEBULAR_MODALS = [
    NbPopoverModule,
    NbContextMenuModule,
    NbDialogModule.forChild(),
    NbTooltipModule,
    NbWindowModule.forChild(),
];

/**
 * nebular extra
 *
 * @export {const} NEBULAR_EXTRA
 */
export const NEBULAR_EXTRA = [
    NbSearchModule,
    NbUserModule,
    NbAlertModule,
    NbSpinnerModule,
    NbProgressBarModule,
    NbBadgeModule,
    NbChatModule,
    NbCalendarModule,
    NbCalendarRangeModule,
    NbTreeGridModule,
];

/**
 * Nebular Modules for Root
 *
 * @export {const} NEBULAR_ROOT
 */
export const NEBULAR_ROOT = [
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
    NbWindowModule.forRoot(),
    NbDatepickerModule.forRoot(),
];

/**
 * Nebular Modules for Child
 *
 * @export {const} NEBULAR_CHILD
 */
export const NEBULAR_CHILD = [NbSidebarModule, NbMenuModule, NbDialogModule, NbToastrModule, NbWindowModule];

/**
 * Nebular Modules for All
 *
 * @export {const} NEBULAR_ALL
 */
export const NEBULAR_ALL = [
    ...NEBULAR_GLOBAL,
    ...NEBULAR_NAVIGATION,
    ...NEBULAR_FORMS,
    ...NEBULAR_MODALS,
    ...NEBULAR_EXTRA,
];
