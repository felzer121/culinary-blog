import {CategoryRecipeGroup} from '../model/category-recipe-group';

export class CategoryRecipeGroupsMockClass {
  static CategoryRecipeGroupsMock: CategoryRecipeGroup[] = [
    {
      disabled: false,
      name: 'Грузия',
      result: [
        {value: 'bulbasaur-0', viewValue: 'Супы'},
        {value: 'oddish-1', viewValue: 'Второе блюдо'},
        {value: 'bellsprout-2', viewValue: 'Хенкали'}
      ]
    },
    {
      disabled: false,
      name: 'Россия',
      result: [
        {value: 'squirtle-3', viewValue: 'Супы'},
        {value: 'psyduck-4', viewValue: 'Напитки'},
        {value: 'horsea-5', viewValue: 'Пироги'}
      ]
    },
    {
      disabled: true,
      name: 'Украина',
      result: [
        {value: 'squirtle-3', viewValue: 'Сало'},
        {value: 'psyduck-4', viewValue: 'Украинки'},
        {value: 'horsea-5', viewValue: 'Сало'}
      ]
    }
  ];
}
