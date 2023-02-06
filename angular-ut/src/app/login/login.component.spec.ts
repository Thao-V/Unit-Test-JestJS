import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let dom: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    dom = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(dom.querySelector('button')?.textContent).toBe('Submit');
    expect(component.name).toBe('hello');
    component.click();
    expect(component.name).toBe('clicked');
  });
});
