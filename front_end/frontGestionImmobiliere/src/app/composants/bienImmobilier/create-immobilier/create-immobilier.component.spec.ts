import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateImmobilierComponent } from './create-immobilier.component';

describe('CreateImmobilierComponent', () => {
  let component: CreateImmobilierComponent;
  let fixture: ComponentFixture<CreateImmobilierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateImmobilierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
