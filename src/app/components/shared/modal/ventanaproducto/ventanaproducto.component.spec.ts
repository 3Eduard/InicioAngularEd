import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaproductoComponent } from './ventanaproducto.component';

describe('VentanaproductoComponent', () => {
  let component: VentanaproductoComponent;
  let fixture: ComponentFixture<VentanaproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
