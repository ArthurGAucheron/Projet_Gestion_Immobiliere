import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsClasseStandardComponent } from './details-classe-standard.component';

describe('DetailsClasseStandardComponent', () => {
  let component: DetailsClasseStandardComponent;
  let fixture: ComponentFixture<DetailsClasseStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsClasseStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsClasseStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
