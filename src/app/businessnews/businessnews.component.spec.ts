import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessnewsComponent } from './businessnews.component';

describe('BusinessnewsComponent', () => {
  let component: BusinessnewsComponent;
  let fixture: ComponentFixture<BusinessnewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessnewsComponent]
    });
    fixture = TestBed.createComponent(BusinessnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
