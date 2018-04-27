import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListComponent} from './list/list.component';
import { HomeComponent} from './home/home.component';
import {AnotherComponent} from './another/another.component';
import { NewComponent } from './new/new.component';
import { ChildComponent } from './child/child.component';

const routes : Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'another',
        component:AnotherComponent
        
    },
    {
        // path:'another/:id/:name'
        path :'another/:id',
        component:ListComponent,
        children: [
            {path:'child',
             component: ChildComponent
            }
        ]
    },
    {
        path:'new',
        component:NewComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }