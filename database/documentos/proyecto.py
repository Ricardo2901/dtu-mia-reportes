"""
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
Instalacion de Python
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
Hacer una REST API con Django
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    ============================================================
        Instalaciones con PIP
    ============================================================
    Para instalar Django, necesitamos tener Python instalado en nuestro sistema operativo. Una vez ya instalado hay que hacer lo siguiente:
    1. Abrir la terminal o consola de comandos.
    2. Instalar pip, que es necesario para instalar paquetes de Python.
    3. Instalar Django con pip.
        pip install django
    4. Instalar Django REST API:
        pip install djangorestframework
    5. 
    
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
Hacer documentos en Word con Python
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    ============================================================
        Importaciones para que funcione bien el codigo
    ============================================================
        S= es el número de especies presentes

    ============================================================
        Variables
    ============================================================


    ============================================================
        Contenido
    ============================================================


    ============================================================
        Tablas y Celdas
    ============================================================
    #########################
    ### Título de la tabla del capítulo 16 ###
    #########################
    tituloTabla16b = doc.add_paragraph()
    dti16b = tituloTabla16b.add_run('\n')
    dti16b_format = tituloTabla16b.paragraph_format
    dti16b_format.line_spacing = 1.15
    dti16b_format.space_after = 0

    dti16b.font.name = 'Bookman Old Style'
    dti16b.font.size = Pt(12)
    tituloTabla16b.alignment = WD_ALIGN_PARAGRAPH.CENTER

    #########################
    ### Tabla del capítulo 16 ###
    #########################
    filas = 1
    columnas = 2
    tabla16b = doc.add_table(rows=filas, cols=columnas, style='Table Grid')

    for cols in range(columnas):
        cell = tabla16b.cell(0, cols)
        cell_background_color(cell, '0070C0')

        for rows in range(filas):
            cell = tabla16b.cell(rows, cols)
            t16b = cell.paragraphs[0].add_run(' ')
            t16b.font.size = Pt(12)

    ============================================================
        Guardar Documento
    ============================================================


"""