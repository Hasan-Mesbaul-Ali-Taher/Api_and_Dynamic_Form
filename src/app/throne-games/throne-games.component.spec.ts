import { ComponentFixture, TestBed } from '@angular/core/testing';

import ThroneGamesComponent from './throne-games.component';

describe('ThroneGamesComponent', () => {
  let component: ThroneGamesComponent;
  let fixture: ComponentFixture<ThroneGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThroneGamesComponent]
    });
    fixture = TestBed.createComponent(ThroneGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
