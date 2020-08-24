import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
/** Импорты Компонентов */
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
/** Импорты сервисов */
import { TitleChangesService } from './services/titleChanges/title-changes.service';
import { HttpCoreServiceService } from './services/http/core/http-core-service.service';
import { RecipeService } from './services/http/recipe/recipe-service.service';
/** Импорты материал дизайна */
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from './components/footer/footer.component';
import { ResultComponent } from './components/result/result.component';
import { MatCardModule } from '@angular/material/card';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeTabsComponent } from './components/home/recipe-tabs/recipe-tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RecipeHistoryComponent } from './components/home/recipe-history/recipe-history.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SlidebarComponent } from './components/header/slidebar/slidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    ResultComponent,
    RecipeComponent,
    RecipeTabsComponent,
    RecipeHistoryComponent,
    SlidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
  providers: [
    Title,
    TitleChangesService,
    HttpCoreServiceService,
    RecipeService,
    FormControl,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
