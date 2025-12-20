import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { Component } from '@angular/core';
import { MainPage } from './features/pages/main-page/main-page';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'main-page', component: MainPage}
];
