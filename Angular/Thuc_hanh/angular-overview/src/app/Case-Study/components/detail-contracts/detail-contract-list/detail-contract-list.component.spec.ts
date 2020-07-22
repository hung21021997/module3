import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailContractListComponent } from './detail-contract-list.component';

describe('DetailContractListComponent', () => {
  let component: DetailContractListComponent;
  let fixture: ComponentFixture<DetailContractListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailContractListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailContractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
