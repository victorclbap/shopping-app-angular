import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[] = [
  new Recipe ('Cake', 'Very tasty strawberry cake!', 'https://aclassictwist.com/wp-content/uploads/2020/08/Fresh-Strawberry-Cake-with-Strawberry-Frosting-2.jpg'),
  new Recipe ('Cake', 'Very tasty strawberry cake!', 'https://aclassictwist.com/wp-content/uploads/2020/08/Fresh-Strawberry-Cake-with-Strawberry-Frosting-2.jpg')
];

  constructor() { }

  ngOnInit(): void {
  }

}
