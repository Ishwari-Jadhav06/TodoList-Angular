import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistComponentComponent } from './todolist-component.component';

describe('TodolistComponentComponent', () => {
  let component: TodolistComponentComponent;
  let fixture: ComponentFixture<TodolistComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
