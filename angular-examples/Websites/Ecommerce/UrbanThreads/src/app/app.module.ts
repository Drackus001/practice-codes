import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SubscribeToEmailComponent } from './components/subscribe-to-email/subscribe-to-email.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ArrivalComponent } from './components/arrival/arrival.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, SubscribeToEmailComponent, AboutUsComponent, TestimonialComponent, ArrivalComponent, ContactUsComponent, HeroComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
