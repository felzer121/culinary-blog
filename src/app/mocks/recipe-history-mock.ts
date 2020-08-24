import {Recipe} from '../model/recipe';
import {RecipeHistory} from '../model/recipe-history';

export class RecipeHistoryMockClass {
  static RecipeHistoryMock: RecipeHistory = {
    id: 1,
    title: 'Алкоголизм по-захаровски',
    body: ' История этого коктейля берёт своё начало в нью-йоркском клубе «Манхэттен» в начале 1870-х годов. По легенде, во время банкета, бармен Ян Маршалл (Iain Marshall) в случайном порядке смешал американский виски, итальянский вермут и бит- тер Ангостура, когда гостям надоели привычные напитки.\n' +
      '\n' +
      'Он решил подать своё творение привередливой толпе, которая незамедлительно пришла в восторг от созданного на их глазах коктейля. После невероятного успеха банкета присутствующие гости стали наперебой.... ',
    complexity: 9,
    taste: 6,
    strength: 10,
    name: 'Оргсинтез'
  };
}