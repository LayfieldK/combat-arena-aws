import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatantSearchComponent } from './combatant-search.component';

describe('CombatantSearchComponent', () => {
  let component: CombatantSearchComponent;
  let fixture: ComponentFixture<CombatantSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatantSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatantSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
