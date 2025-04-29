import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformsComponent } from './templateforms.component';

describe('TemplateformsComponent', () => {
  let component: TemplateformsComponent;
  let fixture: ComponentFixture<TemplateformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
