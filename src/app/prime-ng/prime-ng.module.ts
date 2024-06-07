import { NgModule } from '@angular/core';
/*Imports para prime ng*/
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { CarouselModule } from 'primeng/carousel';


@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ToolbarModule,
    TableModule,
    CarouselModule,
  ]
})
export class PrimeNgModule { }
