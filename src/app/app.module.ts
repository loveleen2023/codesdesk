import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OurWorkComponent } from './our-work/our-work.component';
import { TeamComponent } from './team/team.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { WordpressComponent } from './wordpress/wordpress.component';
import { ShopifyComponent } from './shopify/shopify.component';
import { ContactComponent } from './contact/contact.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareerComponent } from './career/career.component';
import { LuxandnyxComponent } from './luxandnyx/luxandnyx.component';
import { DreamersComponent } from './dreamers/dreamers.component';
import { HushComponent } from './hush/hush.component';
import { CardGameComponent } from './card-game/card-game.component';
import { GrippsGlobalComponent } from './gripps-global/gripps-global.component';
import { BandanaComponent } from './bandana/bandana.component';
import { AceStoreComponent } from './ace-store/ace-store.component';
import { AnansiPalaceComponent } from './anansi-palace/anansi-palace.component';
import { EarthandComponent } from './earthand/earthand.component';
import { ParisSelectComponent } from './paris-select/paris-select.component';
import { EgyptianQueenComponent } from './egyptian-queen/egyptian-queen.component';
import { HoodieCollabComponent } from './hoodie-collab/hoodie-collab.component';
import { TheVeganMilkComponent } from './the-vegan-milk/the-vegan-milk.component';
import { CimvoleComponent } from './cimvole/cimvole.component';
import { BarkroadComponent } from './barkroad/barkroad.component';
import { CirclyComponent } from './circly/circly.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PolicyComponent } from './policy/policy.component';
import { CokkiePolicyComponent } from './cokkie-policy/cokkie-policy.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { AppDevelopmentComponent } from './app-development/app-development.component';
import { GraphicDesigningComponent } from './graphic-designing/graphic-designing.component';
import { TanoarJewelryComponent } from './tanoar-jewelry/tanoar-jewelry.component';
import { ShopMersiComponent } from './shop-mersi/shop-mersi.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    OurWorkComponent,
    TeamComponent,
    JobApplyComponent,
    BlogComponent,
    PortfolioComponent,
    WebDesignComponent,
    WordpressComponent,
    ShopifyComponent,
    ContactComponent,
    BlogDetailsComponent,
    ServiceComponent,
    AboutUsComponent,
    CareerComponent,
    LuxandnyxComponent,
    DreamersComponent,
    HushComponent,
    CardGameComponent,
    GrippsGlobalComponent,
    BandanaComponent,
    AceStoreComponent,
    AnansiPalaceComponent,
    EarthandComponent,
    ParisSelectComponent,
    EgyptianQueenComponent,
    HoodieCollabComponent,
    TheVeganMilkComponent,
    CimvoleComponent,
    BarkroadComponent,
    CirclyComponent,
    TermsConditionComponent,
    PolicyComponent,
    CokkiePolicyComponent,
    NotFoundComponent,
    ECommerceComponent,
    AppDevelopmentComponent,
    GraphicDesigningComponent,
    TanoarJewelryComponent,
    ShopMersiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
