import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/http/recipe/recipe-service.service';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipe: Recipe;

  public constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipe();
  }

  public getRecipe(): void {
    this.recipeService.get('1').subscribe(value => this.recipe = value);
  }
}
