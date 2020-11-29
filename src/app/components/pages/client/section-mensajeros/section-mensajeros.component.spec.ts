import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMensajerosComponent } from './section-mensajeros.component';

describe('SectionMensajerosComponent', () => {
  let component: SectionMensajerosComponent;
  let fixture: ComponentFixture<SectionMensajerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMensajerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMensajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
