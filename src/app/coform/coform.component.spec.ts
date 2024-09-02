import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COformComponent } from './coform.component';

describe('COformComponent', () => {
  let component: COformComponent;
  let fixture: ComponentFixture<COformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(COformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
