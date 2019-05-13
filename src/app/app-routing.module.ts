import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortpolioComponent } from './portpolio/portpolio.component';
import { BlogComponent } from './blog/blog.component';
import { UidevelopmentComponent } from './uidevelopment/uidevelopment.component';
import { MobiledevelopmentComponent } from './mobiledevelopment/mobiledevelopment.component';
import { TestingComponent } from './testing/testing.component';
import { RegistrationComponent } from './registration/registration.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portpolio', component: PortpolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'ui-development', component: UidevelopmentComponent },
  { path: 'mobile-development', component: MobiledevelopmentComponent },
  { path: 'testing', component: TestingComponent },
  { path: 'registration', component: RegistrationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
