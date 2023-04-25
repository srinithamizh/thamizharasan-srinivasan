import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {
    path:'home', 
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'work',
    component: WorkComponent
  },
  {
    path:'skills',
    component: SkillsComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'**',
    component:HomeComponent,
    redirectTo: ''
  }
];

const routerOptions:ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling:'enabled'
}


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
