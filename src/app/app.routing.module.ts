//Inside your routing module file, import the necessary Angular modules and classes, such as NgModule, RouterModule, and Routes. You'll also need to import your components that you want to route to.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {BobComponent} from './about/bob/bob.component';
import {SusanComponent} from './about/susan/susan.component';
import { ContactComponent } from './contact/contact.component';
import {NotFoundComponent} from './not-found/not-found.component'
//Define Routes:Create an array of route configurations within your routing module. Each route configuration should include a path and a component.
const routes: Routes = [
    { path: '', redirectTo: '/home/about', pathMatch: 'full' }, // Redirect to 'home/about'
    {
      path: 'home',
      component: HomeComponent,
      children: [
        { path: 'about', component: AboutComponent },
        { path: 'about/bob', component: BobComponent },
        { path: 'about/susan', component: SusanComponent },      
        { path: 'contact', component: ContactComponent },
      ],
    },
    { path: '**', component: NotFoundComponent },
  ];
  
//Configure the Routing Module:Use the @NgModule decorator to configure the routing module. Import the RouterModule and pass the routes array to RouterModule.forRoot() within the imports array.  
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule], // Export RouterModule to make it available to other modules
  })
  export class AppRoutingModule {}
  