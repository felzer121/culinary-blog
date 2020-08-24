import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../../services/http/recipe/recipe-service.service';
import {RecipeHistory} from '../../../model/recipe-history';

@Component({
  selector: 'app-recipe-history',
  templateUrl: './recipe-history.component.html',
  styleUrls: ['./recipe-history.component.css']
})
export class RecipeHistoryComponent implements OnInit {
  recipeHistory: RecipeHistory;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecomendedHistoryRecipe().subscribe(value => this.recipeHistory = value);
  }

}
