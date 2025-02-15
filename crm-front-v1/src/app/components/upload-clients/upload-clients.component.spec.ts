import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCLientsComponent } from './upload-clients.component';

describe('UploadCLientsComponent', () => {
  let component: UploadCLientsComponent;
  let fixture: ComponentFixture<UploadCLientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadCLientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadCLientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
