import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyappWizrootsModule } from './wizroots/wizroots.module';
import { MyappDesignationModule } from './designation/designation.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        MyappWizrootsModule,
        MyappDesignationModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyappEntityModule {}
