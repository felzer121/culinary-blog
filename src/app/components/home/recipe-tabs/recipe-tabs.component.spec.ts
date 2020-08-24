import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeTabsComponent } from './recipe-tabs.component';

describe('RecipeTabsComponent', () => {
  let component: RecipeTabsComponent;
  let fixture: ComponentFixture<RecipeTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
