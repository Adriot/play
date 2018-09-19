import { NgModule } from '@angular/core';

import { PlaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [PlaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [PlaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PlaySharedCommonModule {}
