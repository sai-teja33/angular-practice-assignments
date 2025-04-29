import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpriceComponent } from './editprice.component';

describe('EditpriceComponent', () => {
  let component: EditpriceComponent;
  let fixture: ComponentFixture<EditpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditpriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
