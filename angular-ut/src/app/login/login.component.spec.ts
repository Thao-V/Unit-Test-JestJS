import { ComponentFixture, TestBed } from '@angular/core/testing';
import {expect, jest, test} from '@jest/globals';

import { LoginComponent, forEach } from './login.component';

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
  test('mock call back', () => {
    const mockCallback = jest.fn<typeof forEach>();
    mockCallback.mockImplementation(x => x + 100);
    forEach([0, 1], mockCallback);
    expect(mockCallback.mock.calls).toHaveLength(2);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    expect(mockCallback.mock.results[0].value).toBe(100);
  });
});
