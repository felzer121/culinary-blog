import {Injectable} from '@angular/core';
import {HttpCoreServiceService} from '../core/http-core-service.service';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {Recipe} from '../../../model/recipe';
import {CategoryRecipeGroupsMockClass} from '../../../mocks/category-recipe-group';
import {CategoryRecipeGroup} from '../../../model/category-recipe-group';
import {Params} from '@angular/router';
import {RecipeMockClass} from '../../../mocks/recipeMock';
import {RecipeHistory} from '../../../model/recipe-history';
import {RecipeHistoryMockClass} from '../../../mocks/recipe-history-mock';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpCoreService: HttpCoreServiceService) {
  }

  public get(id: string): Observable<Recipe> {
    return this.httpCoreService.get('https://jsonplaceholder.typicode.com/todos/' + id);
  }

  public getCategoryRecipeGroup(): Observable<CategoryRecipeGroup[]> {
    return of(CategoryRecipeGroupsMockClass.CategoryRecipeGroupsMock);
  }

  public searchRecipe(params: Params): Observable<Recipe[]> {
    return of(RecipeMockClass.RecipeMock);
  }

  public getRecomendedHistoryRecipe(): Observable<RecipeHistory> {
    return of(RecipeHistoryMockClass.RecipeHistoryMock);
  }
}
