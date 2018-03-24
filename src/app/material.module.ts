import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  imports: [
 	 MatCardModule,
 	 MatTabsModule,
 	 MatSliderModule,
 	 MatButtonModule,
 	 MatSidenavModule,
 	 MatListModule,
 	 MatCheckboxModule,
 	 MatProgressSpinnerModule,
   MatIconModule,
   MatInputModule,
   MatTableModule,
   MatToolbarModule,
   LayoutModule,
   MatMenuModule,
  ],
  exports: [
  	MatCardModule,
  	MatTabsModule,
  	MatSliderModule,
  	MatButtonModule,
  	MatSidenavModule,
  	MatListModule,
  	MatCheckboxModule,
  	MatProgressSpinnerModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    LayoutModule,
    MatMenuModule,
  ],
})
export class MaterialModule { }
