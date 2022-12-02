import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ActiveComponent } from './components/active/active.component';
import { NoActiveComponent } from './components/no-active/no-active.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { HighlightsDirective } from './directives/highlights.directive';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';


const routes: Route[] = [
  {
      path: "active" ,
      component: ActiveComponent,
  },
  {
      path: "noActive",
      component: NoActiveComponent
  },

  {
      path: "home",
      component: HomeComponent
  },
  {
      path: "active/:id",
      component: PostDetailComponent
  },
  {
      path: "inactive/:id",
      component: PostDetailComponent
  },
  {
    path: "users" ,
    component: UsersComponent,
    children: [
      {
        path: ":id" ,
        component: UserDetailComponent,
      },
    ]
  },

  {
    path: "**" ,
    redirectTo: '',
  }

]

@NgModule({
  declarations: [
    AppComponent,
    ActiveComponent,
    NoActiveComponent,
    NavbarComponent,
    HomeComponent,
    PostCardComponent,
    UsersComponent,
    UserDetailComponent,
    PostDetailComponent,
    HighlightsDirective,
    MaiuscoloPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
