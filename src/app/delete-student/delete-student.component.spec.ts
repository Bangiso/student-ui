import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStudentComponent } from './delete-student.component';

describe('DeletStudentComponent', () => {
  let component: DeleteStudentComponent;
  let fixture: ComponentFixture<DeleteStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
