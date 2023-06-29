import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthnewsComponent } from './healthnews.component';

describe('HealthnewsComponent', () => {
  let component: HealthnewsComponent;
  let fixture: ComponentFixture<HealthnewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthnewsComponent]
    });
    fixture = TestBed.createComponent(HealthnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
