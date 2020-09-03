import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeImmobilierLocationComponent } from './liste-immobilier-location.component';

describe('ListeImmobilierLocationComponent', () => {
  let component: ListeImmobilierLocationComponent;
  let fixture: ComponentFixture<ListeImmobilierLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeImmobilierLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeImmobilierLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
