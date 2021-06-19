import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadesPageComponent } from './modalidades-page.component';

describe('ModalidadesPageComponent', () => {
  let component: ModalidadesPageComponent;
  let fixture: ComponentFixture<ModalidadesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
