import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUsernameComponent } from './register-username.component';

describe('RegisterUsernameComponent', () => {
  let component: RegisterUsernameComponent;
  let fixture: ComponentFixture<RegisterUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUsernameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
