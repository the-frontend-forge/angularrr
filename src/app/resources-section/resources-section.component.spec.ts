import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourcesSectionComponent } from './resources-section.component';

describe('ResourcesSectionComponent', () => {
  let component: ResourcesSectionComponent;
  let fixture: ComponentFixture<ResourcesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourcesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
