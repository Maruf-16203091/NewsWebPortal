import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciencenewsComponent } from './sciencenews.component';

describe('SciencenewsComponent', () => {
  let component: SciencenewsComponent;
  let fixture: ComponentFixture<SciencenewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SciencenewsComponent]
    });
    fixture = TestBed.createComponent(SciencenewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
