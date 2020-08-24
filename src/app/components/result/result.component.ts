import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../../services/http/recipe/recipe-service.service';
import {Recipe} from '../../model/recipe';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  recipes: Recipe[];

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit() {
    setTimeout(() => {
        this.activatedRoute.queryParams.subscribe(value => {
          this.recipeService.searchRecipe(value).subscribe(recipes => {
              this.recipes = recipes;
            }
          );
        });
      },
      1500);
  }
}
