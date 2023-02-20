import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { ModalComponent } from './components/modal/modal.component';
import { PageComponent } from './components/page/page.component';

import { OrdersComponent } from './pages/dashboard/orders/orders.component';
import { WebshopComponent } from './pages/dashboard/webshop/webshop.component';
import { ProductsComponent } from './pages/dashboard/webshop/products/products.component';
import { AccountingComponent } from './pages/dashboard/accounting/accounting.component';
import { CustomersComponent } from './pages/dashboard/customers/customers.component';
import { CategoriesComponent } from './pages/dashboard/webshop/categories/categories.component';
import { DiscountsComponent } from './pages/dashboard/webshop/discounts/discounts.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { EmployeesComponent } from './pages/dashboard/employees/employees.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        WebshopComponent,
        OrdersComponent,
        AccountingComponent,
        HeaderComponent,
        ListComponent,
        SidebarComponent,
        ContentComponent,
        PageComponent,
        CustomersComponent,
        CategoriesComponent,
        DiscountsComponent,
        LandingPageComponent,
        DashboardComponent,
        LoginComponent,
        EmployeesComponent,
        ModalComponent,
        ProductsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        LayoutModule,
        OverlayModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
