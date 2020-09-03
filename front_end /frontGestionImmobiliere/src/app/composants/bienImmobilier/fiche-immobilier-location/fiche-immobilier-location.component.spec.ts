import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheImmobilierLocationComponent } from './fiche-immobilier-location.component';

describe('FicheImmobilierLocationComponent', () => {
  let component: FicheImmobilierLocationComponent;
  let fixture: ComponentFixture<FicheImmobilierLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheImmobilierLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheImmobilierLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
