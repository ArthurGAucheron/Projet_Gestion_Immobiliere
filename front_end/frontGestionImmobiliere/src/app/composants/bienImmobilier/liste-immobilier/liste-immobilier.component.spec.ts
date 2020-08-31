import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeImmobilierComponent } from './liste-immobilier.component';

describe('ListeImmobilierComponent', () => {
  let component: ListeImmobilierComponent;
  let fixture: ComponentFixture<ListeImmobilierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeImmobilierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
