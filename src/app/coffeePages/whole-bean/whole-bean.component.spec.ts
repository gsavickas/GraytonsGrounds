import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeBeanComponent } from './whole-bean.component';

describe('WholeBeanComponent', () => {
  let component: WholeBeanComponent;
  let fixture: ComponentFixture<WholeBeanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholeBeanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeBeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
