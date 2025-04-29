import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicallsComponent } from './apicalls.component';

describe('ApicallsComponent', () => {
  let component: ApicallsComponent;
  let fixture: ComponentFixture<ApicallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApicallsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApicallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
