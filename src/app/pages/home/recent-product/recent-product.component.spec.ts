import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentProductComponent } from './recent-product.component';

describe('RecentProductComponent', () => {
  let component: RecentProductComponent;
  let fixture: ComponentFixture<RecentProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
