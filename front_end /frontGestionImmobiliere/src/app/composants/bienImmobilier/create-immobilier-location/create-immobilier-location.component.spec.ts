import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateImmobilierLocationComponent } from './create-immobilier-location.component';

describe('CreateImmobilierLocationComponent', () => {
  let component: CreateImmobilierLocationComponent;
  let fixture: ComponentFixture<CreateImmobilierLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateImmobilierLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateImmobilierLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
