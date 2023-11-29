import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouteGuardService } from '../service/route-guard.service';
import { ManageCategoryComponent } from './manage-category/manage-category.component';


export const MaterialRoutes: Routes = [
    {
        path:'category' ,
        component: ManageCategoryComponent,
        canActivate: [RouteGuardService],
        data: {
            expectedRole: ['admin']
        }
    }
];
