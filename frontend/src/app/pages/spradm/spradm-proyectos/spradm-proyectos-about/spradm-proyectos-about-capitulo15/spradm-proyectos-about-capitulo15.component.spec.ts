import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosAboutCapitulo15Component } from './spradm-proyectos-about-capitulo15.component';

describe('SpradmProyectosAboutCapitulo15Component', () => {
  let component: SpradmProyectosAboutCapitulo15Component;
  let fixture: ComponentFixture<SpradmProyectosAboutCapitulo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosAboutCapitulo15Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosAboutCapitulo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
