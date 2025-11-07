"""
    ============================================================
    Archivos de las dependencias del proyecto
    ============================================================
"""
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

"""
    ===========================================================================================================================================================
        Darle color a las celdas de los capitulos
    ===========================================================================================================================================================
"""
def cell_background_color(cell, color_hex):
    # Obtener las propiedades de la celda
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()

    # Crear un nuevo elemento de color de fondo
    shd = OxmlElement('w:shd')
    shd.set(qn('w:val'), 'clear')
    shd.set(qn('w:color'), 'auto')
    shd.set(qn('w:fill'), color_hex)
    tcPr.append(shd)

"""
    ===========================================================================================================================================================
        Numero entero a romano
    ===========================================================================================================================================================
"""
def entero_a_romano(numero):
    valores = [
        (1000, "M"), (900, "CM"), (500, "D"), (400, "CD"),
        (100, "C"), (90, "XC"), (50, "L"), (40, "XL"),
        (10, "X"), (9, "IX"), (5, "V"), (4, "IV"), (1, "I")
    ]

    resultado = ""

    for (arabigo, romano) in valores:
        while numero >= arabigo:
            resultado += romano
            numero -= arabigo
    return resultado

"""
    ===========================================================================================================================================================
        Quitar los bordes de una celda especifica
    ===========================================================================================================================================================
"""
def quitar_bordes_celda(cell):
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()

    # Crear nodo de bordes
    tcBorders = OxmlElement('w:tcBorders')

    # Crear cada borde como 'nil' (sin borde)
    for borde in ('top', 'left', 'bottom', 'right', 'insideH', 'insideV'):
        borde_elem = OxmlElement(f'w:{borde}')
        borde_elem.set(qn('w:val'), 'nil')  
        tcBorders.append(borde_elem)

    tcPr.append(tcBorders)

"""
    ===========================================================================================================================================================
        Quitar los bordes de la tabla
    ===========================================================================================================================================================
"""
def quitar_bordes_tabla(tabla):
    tbl = tabla._tbl  # XML interno de la tabla
    tblPr = tbl.tblPr

    # Buscar o crear la definición de bordes de la tabla
    tblBorders = tblPr.first_child_found_in("w:tblBorders")
    if tblBorders is None:
        tblBorders = OxmlElement('w:tblBorders')
        tblPr.append(tblBorders)

    # Crear todos los bordes invisibles
    for borde in ['top', 'left', 'bottom', 'right', 'insideH', 'insideV']:
        borde_xml = tblBorders.find(qn(f'w:{borde}'))
        if borde_xml is None:
            borde_xml = OxmlElement(f'w:{borde}')
            tblBorders.append(borde_xml)
        borde_xml.set(qn('w:val'), 'nil')  # nil = sin borde

"""
    ===========================================================================================================================================================
        Quitar un borde especifico de una celda
    ===========================================================================================================================================================
"""
def quitar_borde_especifico(cell, borde="top"):
    tcPr = cell._tc.get_or_add_tcPr()
    tcBorders = tcPr.find(qn('w:tcBorders'))
    if tcBorders is None:
        tcBorders = OxmlElement('w:tcBorders')
        tcPr.append(tcBorders)

    # Eliminar bordes existentes con ese nombre
    borde_tag = qn(f"w:{borde}")
    for child in list(tcBorders):
        if child.tag == borde_tag:
            tcBorders.remove(child)

    # Crear borde invisible
    borde_xml = OxmlElement(f"w:{borde}")
    borde_xml.set(qn('w:val'), 'nil')  # 'nil' indica sin borde
    tcBorders.append(borde_xml)
