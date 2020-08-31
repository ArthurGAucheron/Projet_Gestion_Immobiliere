import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietaireCreateComponent } from './proprietaire-create.component';

describe('ProprietaireCreateComponent', () => {
  let component: ProprietaireCreateComponent;
  let fixture: ComponentFixture<ProprietaireCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProprietaireCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietaireCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
