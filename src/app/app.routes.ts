import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { Component } from '@angular/core';
import { MainPage } from './features/pages/main-page/main-page';
import { StoragePage } from './features/pages/storage-page/storage-page';
import { SalesPage } from './features/pages/sales-page/sales-page';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'main-page', component: MainPage},
    {path: 'storage-page', component: StoragePage},
    {path: 'sales-page', component: SalesPage}
];
