import { Routes } from '@angular/router';
import { SignUp } from './sign-up/sign-up';
import { SignIn } from './sign-in/sign-in';
import { ErrorPage } from './error-page/error-page';
import { MainLayout } from './main-layout/main-layout';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';
import { authGuard } from './guards/guard';

export const routes: Routes = [
    {
        path:'',
        component: MainLayout,
        children: [
            {path:'home' , component:Home},
            {path:'about' , component:About},
            {path:'contact' , component:Contact}
        ]
    },
    {
        path:'auth',
        component: MainLayout,
        children: [
            {path:'signin' , component:SignIn},
            {path:'signup' , component:SignUp}
        ]
    },
    {
        path:'task',
        component: MainLayout,
        canActivate: [authGuard],
        children: [
            {path:'addtask' , component:TaskForm},
            {path:'mytasks' , component:TaskList}
        ]
    },
    {
        path:'**',
        component:ErrorPage
    }
];
