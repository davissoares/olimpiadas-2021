import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadeCardComponent } from './modalidade-card.component';

describe('ModalidadeCardComponent', () => {
  let component: ModalidadeCardComponent;
  let fixture: ComponentFixture<ModalidadeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
