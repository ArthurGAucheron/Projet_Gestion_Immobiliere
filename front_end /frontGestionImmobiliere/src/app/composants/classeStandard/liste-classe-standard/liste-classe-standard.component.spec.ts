import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeClasseStandardComponent } from './liste-classe-standard.component';

describe('ListeClasseStandardComponent', () => {
  let component: ListeClasseStandardComponent;
  let fixture: ComponentFixture<ListeClasseStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeClasseStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeClasseStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
