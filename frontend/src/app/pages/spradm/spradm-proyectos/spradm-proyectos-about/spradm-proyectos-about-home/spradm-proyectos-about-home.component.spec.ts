import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosAboutHomeComponent } from './spradm-proyectos-about-home.component';

describe('SpradmProyectosAboutHomeComponent', () => {
  let component: SpradmProyectosAboutHomeComponent;
  let fixture: ComponentFixture<SpradmProyectosAboutHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosAboutHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosAboutHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
