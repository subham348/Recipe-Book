import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a text',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/08/chole-recipe.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a text',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/08/chole-recipe.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
