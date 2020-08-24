import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CategoryRecipeGroup} from '../../model/category-recipe-group';
import {RecipeService} from '../../services/http/recipe/recipe-service.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  myFirstReactiveForm: FormGroup;
  categoryRecipeGroups: CategoryRecipeGroup[];
  queryParams: Params;

  constructor(private recipeService: RecipeService, private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.recipeService.getCategoryRecipeGroup().subscribe(value => this.categoryRecipeGroups = value);
      this.initForm();
  }

  initForm() {
    this.activatedRoute.queryParams.subscribe(value => {
      this.queryParams = value;
      this.myFirstReactiveForm = this.fb.group({
        name: [this.queryParams.name],
        category: [this.queryParams.category]
      });
    });
  }

  onSubmit() {
    this.router.navigate([`/result`], { queryParams: this.myFirstReactiveForm.value });
  }

}
