import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryGamesComponent } from './lottery-games.component';

describe('LotteryGamesComponent', () => {
  let component: LotteryGamesComponent;
  let fixture: ComponentFixture<LotteryGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotteryGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
