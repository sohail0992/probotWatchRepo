import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
// material modules
import { MaterialModule } from './material.module';
// dashboard components
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
// routing 
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DionaeaService } from './core/dionaea-service.service';
//for sending/reciving req and res from server
import { Http, Response, RequestOptions, Headers , HttpModule} from '@angular/http';
import { DionaeaSensorComponent } from './dionaea-sensor/dionaea-sensor.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule , MatAutocompleteModule , MatInputModule , MatProgressSpinnerModule , MatSortModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    SidenavbarComponent,
    DionaeaSensorComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSortModule
  ],
  exports: [
    HttpModule,
  ],
  bootstrap: [AppComponent ],
  providers: [DionaeaService]
})
export class AppModule { }
