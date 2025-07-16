import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateIdcardComponent } from './create-idcard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('CreateIdcardComponent', () => {
  let component: CreateIdcardComponent;
  let fixture: ComponentFixture<CreateIdcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateIdcardComponent],
      imports: [ReactiveFormsModule,
        HttpClientModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIdcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.form).toBeTruthy();
    expect(component.cards).toBeTruthy();
    expect(component.cards.length).toBeGreaterThan(0);
  });
});
