import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDisplayComponent } from './todo-display.component';

describe('TodoDisplayComponent', () => {
  let component: TodoDisplayComponent;
  let fixture: ComponentFixture<TodoDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoDisplayComponent]
    });
    fixture = TestBed.createComponent(TodoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
