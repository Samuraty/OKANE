import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinEvolutionComponent } from './coin-evolution.component';

describe('CoinEvolutionComponent', () => {
  let component: CoinEvolutionComponent;
  let fixture: ComponentFixture<CoinEvolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinEvolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
