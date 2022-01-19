import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipComparerComponent } from './starship-comparer.component';

describe('StarshipComparerComponent', () => {
  let component: StarshipComparerComponent;
  let fixture: ComponentFixture<StarshipComparerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipComparerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipComparerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
