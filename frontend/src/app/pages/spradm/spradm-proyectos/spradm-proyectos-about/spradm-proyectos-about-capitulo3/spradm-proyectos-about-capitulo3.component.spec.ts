import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosAboutCapitulo3Component } from './spradm-proyectos-about-capitulo3.component';

describe('SpradmProyectosAboutCapitulo3Component', () => {
  let component: SpradmProyectosAboutCapitulo3Component;
  let fixture: ComponentFixture<SpradmProyectosAboutCapitulo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosAboutCapitulo3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosAboutCapitulo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
