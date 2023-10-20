import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
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

const routes: Routes = [
  {path: '' , component: HomepageComponent},
  {path: 'our-work' , component: OurWorkComponent},
  {path: 'team' , component: TeamComponent},
  {path: 'job-apply' , component: JobApplyComponent},
  {path: 'blog' , component: BlogComponent},
  {path: 'portfolio' , component: PortfolioComponent},
  {path: 'web-design' , component: WebDesignComponent},
  {path: 'wordpress' , component: WordpressComponent},
  {path: 'shopify' , component: ShopifyComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'blog-deatils' , component: BlogDetailsComponent},
  {path: 'services' , component: ServiceComponent},
  {path: 'about-us' , component: AboutUsComponent},
  {path: 'career' , component: CareerComponent},
  {path: 'luxandnyx' , component: LuxandnyxComponent},
  {path: 'dreamers' , component: DreamersComponent},
  {path: 'hush' , component: HushComponent},
  {path: 'card-game' , component: CardGameComponent},
  {path: 'gripps-global' , component: GrippsGlobalComponent},
  {path: 'bandana' , component: BandanaComponent},
  {path: 'ace-store' , component: AceStoreComponent},
  {path: 'anansi-palace' , component: AnansiPalaceComponent},
  {path: 'earthand' , component: EarthandComponent},
  {path: 'paris-select' , component: ParisSelectComponent},
  {path: 'egyptian' , component: EgyptianQueenComponent},
  {path: 'hoodie-collab' , component: HoodieCollabComponent},
  {path: 'the-vegan-milk' , component: TheVeganMilkComponent},
  {path: 'cimvole' , component: CimvoleComponent},
  {path: 'barkroad' , component: BarkroadComponent},
  {path: 'circly' , component: CirclyComponent},
  {path: 'terms-condition' , component: TermsConditionComponent},
  {path: 'policy' , component: PolicyComponent},
  {path: 'cokkie-policy' , component: CokkiePolicyComponent},
  {path: 'page-not-found' , component: NotFoundComponent},
  {path: 'e-commerce' , component: ECommerceComponent},
  {path: 'app-development' , component: AppDevelopmentComponent},
  {path: 'graphic-designing' , component: GraphicDesigningComponent},
  {path: 'tanoar-jewelry' , component: TanoarJewelryComponent},
  {path: 'shop-mersi' , component: ShopMersiComponent},

  {path: '**', component: NotFoundComponent, data: 
    {
      title: 'error',
      descrption:"404 error"
  }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
