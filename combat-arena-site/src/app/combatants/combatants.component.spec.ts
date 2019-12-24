import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatantsComponent } from './combatants.component';

describe('CombatantsComponent', () => {
  let component: CombatantsComponent;
  let fixture: ComponentFixture<CombatantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
