import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyArtComponent } from './my-art.component';

describe('MyArtComponent', () => {
  let component: MyArtComponent;
  let fixture: ComponentFixture<MyArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyArtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
