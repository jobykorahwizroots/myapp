import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MyappSharedModule } from 'app/shared';
import { MyappAdminModule } from 'app/admin/admin.module';
import {
    DesignationComponent,
    DesignationDetailComponent,
    DesignationUpdateComponent,
    DesignationDeletePopupComponent,
    DesignationDeleteDialogComponent,
    designationRoute,
    designationPopupRoute
} from './';

const ENTITY_STATES = [...designationRoute, ...designationPopupRoute];

@NgModule({
    imports: [MyappSharedModule, MyappAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        DesignationComponent,
        DesignationDetailComponent,
        DesignationUpdateComponent,
        DesignationDeleteDialogComponent,
        DesignationDeletePopupComponent
    ],
    entryComponents: [DesignationComponent, DesignationUpdateComponent, DesignationDeleteDialogComponent, DesignationDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyappDesignationModule {}
