import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietaireCardComponent } from './proprietaire-card.component';

describe('ProprietaireCardComponent', () => {
  let component: ProprietaireCardComponent;
  let fixture: ComponentFixture<ProprietaireCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProprietaireCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietaireCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
