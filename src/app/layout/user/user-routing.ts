import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user.component";
import {NgModule} from "@angular/core";

const UsersRoute: Routes = [
  {
    path: '', component: UserComponent,
    children:[
      { path: 'tasks',
        loadChildren: () => import('./tasks/tasks.module').then(ta => ta.TasksModule)},
      { path: 'client',
        loadChildren: () => import('./client/client.module').then(c => c.ClientModule)},
      { path: 'text',
        loadChildren: () => import('./type-text/type-text.module').then(t => t.TypeTextModule)},
      { path: 'wallet',
        loadChildren: () => import('./wallet/wallet.module').then(w => w.WalletModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(UsersRoute)],
  exports: [
    RouterModule
  ]
})
export class UsersRouting { }
