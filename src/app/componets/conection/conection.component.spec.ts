import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConectionComponent } from './conection.component';

describe('ConectionComponent', () => {
  let component: ConectionComponent;
  let fixture: ComponentFixture<ConectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConectionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
