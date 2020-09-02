import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifImmobilierComponent } from './modif-immobilier.component';

describe('ModifImmobilierComponent', () => {
  let component: ModifImmobilierComponent;
  let fixture: ComponentFixture<ModifImmobilierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifImmobilierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
