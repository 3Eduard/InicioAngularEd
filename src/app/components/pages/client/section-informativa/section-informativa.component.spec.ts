import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInformativaComponent } from './section-informativa.component';

describe('SectionInformativaComponent', () => {
  let component: SectionInformativaComponent;
  let fixture: ComponentFixture<SectionInformativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionInformativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionInformativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
