import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistreurComponent } from './enregistreur.component';

describe('EnregistreurComponent', () => {
  let component: EnregistreurComponent;
  let fixture: ComponentFixture<EnregistreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnregistreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregistreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
