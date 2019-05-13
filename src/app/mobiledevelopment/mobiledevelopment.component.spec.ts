import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiledevelopmentComponent } from './mobiledevelopment.component';

describe('MobiledevelopmentComponent', () => {
  let component: MobiledevelopmentComponent;
  let fixture: ComponentFixture<MobiledevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobiledevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiledevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
