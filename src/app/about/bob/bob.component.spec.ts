import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BobComponent } from './bob.component';

describe('BobComponent', () => {
  let component: BobComponent;
  let fixture: ComponentFixture<BobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BobComponent]
    });
    fixture = TestBed.createComponent(BobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
