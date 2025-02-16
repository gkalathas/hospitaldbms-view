import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
import { AnimateEnterDirective } from './animateenter.directive';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ScrollTopModule } from 'primeng/scrolltop';
import { RippleModule } from 'primeng/ripple';

@NgModule({
    imports: [CommonModule, LandingRoutingModule, ButtonModule, RouterModule, StyleClassModule, AppConfigModule, DialogModule, DynamicDialogModule, FormsModule, InputTextModule, ScrollTopModule, RippleModule],
    declarations: [LandingComponent, AnimateEnterDirective]
})
export class LandingModule {}
