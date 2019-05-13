import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MiddlecontentComponent } from './middlecontent/middlecontent.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortpolioComponent } from './portpolio/portpolio.component';
import { BlogComponent } from './blog/blog.component';
import { UidevelopmentComponent } from './uidevelopment/uidevelopment.component';
import { MobiledevelopmentComponent } from './mobiledevelopment/mobiledevelopment.component';
import { TestingComponent } from './testing/testing.component';
import { RegistrationComponent } from './registration/registration.component';
import { CrudeserviceService } from './crudeservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiddlecontentComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortpolioComponent,
    BlogComponent,
    UidevelopmentComponent,
    MobiledevelopmentComponent,
    TestingComponent,
    RegistrationComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CrudeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
