import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentnewsComponent } from './entertainmentnews.component';

describe('EntertainmentnewsComponent', () => {
  let component: EntertainmentnewsComponent;
  let fixture: ComponentFixture<EntertainmentnewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntertainmentnewsComponent]
    });
    fixture = TestBed.createComponent(EntertainmentnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
