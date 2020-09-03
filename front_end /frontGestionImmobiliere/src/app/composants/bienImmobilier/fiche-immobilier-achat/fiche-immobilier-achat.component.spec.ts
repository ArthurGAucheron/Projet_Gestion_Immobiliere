import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheImmobilierAchatComponent } from './fiche-immobilier-achat.component';

describe('FicheImmobilierAchatComponent', () => {
  let component: FicheImmobilierAchatComponent;
  let fixture: ComponentFixture<FicheImmobilierAchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheImmobilierAchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheImmobilierAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
