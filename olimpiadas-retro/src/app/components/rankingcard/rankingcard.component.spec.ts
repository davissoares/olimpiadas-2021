import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingcardComponent } from './rankingcard.component';

describe('RankingcardComponent', () => {
  let component: RankingcardComponent;
  let fixture: ComponentFixture<RankingcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
