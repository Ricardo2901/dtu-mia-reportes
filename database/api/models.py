from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import User

"""
    ##########################################################################################
        TABLAS GENERALES DE DATOS EN LOS CAPITULOS
    ##########################################################################################
"""
class Climas(models.Model):
    fid_micro = models.CharField(max_length=95, blank=True, null=True)
    edo = models.CharField(max_length=45, blank=True, null=True)
    municipio = models.CharField(max_length=45, blank=True, null=True)
    codigo = models.CharField(max_length=45, blank=True, null=True)
    num_micro = models.CharField(max_length=45, blank=True, null=True)
    clase = models.CharField(max_length=45, blank=True, null=True)
    tipo_clima = models.CharField(max_length=45, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'climas'


class DescripcionClimas(models.Model):
    id = models.IntegerField(primary_key=True)
    clima = models.CharField(max_length=100, blank=True, null=True)
    codigo = models.CharField(max_length=45, blank=True, null=True)
    descripcion = models.CharField(max_length=975, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'descripcion_climas'


class DescripcionErosion(models.Model):
    erosion = models.CharField(max_length=100, blank=True, null=True)
    codigo = models.CharField(max_length=45, blank=True, null=True)
    descripcion = models.CharField(max_length=975, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'descripcion_erosion'


class DescripcionGeologia(models.Model):
    geologia = models.CharField(max_length=100, blank=True, null=True)
    codigo = models.CharField(max_length=45, blank=True, null=True)
    descripcion = models.CharField(max_length=975, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'descripcion_geologia'


class DescripcionProvincias(models.Model):
    provincia = models.CharField(max_length=100, blank=True, null=True)
    descripcion = models.CharField(max_length=4500, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'descripcion_provincias'


class DescripcionSubprovincias(models.Model):
    subprovincia = models.CharField(max_length=100, blank=True, null=True)
    descripcion = models.CharField(max_length=5000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'descripcion_subprovincias'


class DescripcionSuelo(models.Model):
    id = models.IntegerField(primary_key=True)
    suelo = models.CharField(max_length=100, blank=True, null=True)
    codigo = models.CharField(max_length=45, blank=True, null=True)
    descripcion = models.CharField(max_length=975, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'descripcion_suelo'


class DescripcionTiposErosion(models.Model):
    erosion = models.CharField(max_length=100, blank=True, null=True)
    codigo = models.CharField(max_length=45, blank=True, null=True)
    descripcion = models.CharField(max_length=975, blank=True, null=True)
    clase = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'descripcion_tipos_erosion'


class DescripcionTopografia(models.Model):
    topografia = models.CharField(max_length=100, blank=True, null=True)
    descripcion = models.CharField(max_length=975, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'descripcion_topografia'


class DescripcionVegetacion(models.Model):
    vegetacion = models.CharField(max_length=100, blank=True, null=True)
    codigo = models.CharField(max_length=45, blank=True, null=True)
    descripcion = models.CharField(max_length=975, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'descripcion_vegetacion'

class ElevacionMicrocuenca(models.Model):
    edo = models.CharField(max_length=45, blank=True, null=True)
    municipio = models.CharField(max_length=45, blank=True, null=True)
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    altitud = models.CharField(max_length=45, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)
    km2 = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'elevacion_microcuenca'

class EspeciesVegetacion(models.Model):
    codigo_veg = models.TextField(blank=True, null=True)
    familia = models.TextField(blank=True, null=True)
    nom_cientifico = models.TextField(blank=True, null=True)
    nombre_comun = models.TextField(blank=True, null=True)
    status = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'especies_vegetacion'

class Evaporacion(models.Model):
    estacion = models.CharField(max_length=45, blank=True, null=True)
    municipio = models.CharField(max_length=45, blank=True, null=True)
    ene = models.CharField(max_length=45, blank=True, null=True)
    feb = models.CharField(max_length=45, blank=True, null=True)
    mar = models.CharField(max_length=45, blank=True, null=True)
    abr = models.CharField(max_length=45, blank=True, null=True)
    may = models.CharField(max_length=45, blank=True, null=True)
    jun = models.CharField(max_length=45, blank=True, null=True)
    jul = models.CharField(max_length=45, blank=True, null=True)
    ago = models.CharField(max_length=45, blank=True, null=True)
    sept = models.CharField(max_length=45, blank=True, null=True)
    oct = models.CharField(max_length=45, blank=True, null=True)
    nov = models.CharField(max_length=45, blank=True, null=True)
    dic = models.CharField(max_length=45, blank=True, null=True)
    total = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'evaporacion'


class ExposicionMicro(models.Model):
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    exposicion = models.CharField(max_length=45, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)
    km2 = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'exposicion_micro'


class Municipios(models.Model):
    estado = models.CharField(max_length=100, blank=True, null=True)
    municipio = models.CharField(max_length=65, blank=True, null=True)
    num_micro = models.CharField(max_length=55, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)
    km2 = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'municipios'


class PendienteMicro(models.Model):
    edo = models.CharField(max_length=45, blank=True, null=True)
    municipio = models.CharField(max_length=45, blank=True, null=True)
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    porcentaje = models.CharField(max_length=45, blank=True, null=True)
    grados = models.CharField(max_length=45, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)
    km2 = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'pendiente_micro'


class Precipitacion(models.Model):
    estacion = models.CharField(max_length=75, blank=True, null=True)
    municipio = models.CharField(max_length=75, blank=True, null=True)
    ene = models.CharField(max_length=45, blank=True, null=True)
    feb = models.CharField(max_length=45, blank=True, null=True)
    mar = models.CharField(max_length=45, blank=True, null=True)
    abr = models.CharField(max_length=45, blank=True, null=True)
    may = models.CharField(max_length=45, blank=True, null=True)
    jun = models.CharField(max_length=45, blank=True, null=True)
    jul = models.CharField(max_length=45, blank=True, null=True)
    ago = models.CharField(max_length=45, blank=True, null=True)
    sept = models.CharField(max_length=45, blank=True, null=True)
    oct = models.CharField(max_length=45, blank=True, null=True)
    nov = models.CharField(max_length=45, blank=True, null=True)
    dic = models.CharField(max_length=45, blank=True, null=True)
    total = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'precipitacion'


def user_directory_path(instance, filename):
    # Los archivos se guardan en media/private_files/<username>/<filename>
    return f'private_files/{instance.owner.username}/{filename}'

class PrivateFiles(models.Model):
    name = models.CharField(max_length=255)           # Nombre del archivo
    path = models.FileField(upload_to='private-files/')     # Archivo
    format = models.CharField(max_length=20)          # Extensión
    size = models.CharField(max_length=20)            # Tamaño
    username = models.CharField(max_length=100)       # Usuario que subió el archivo
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = False
        db_table = 'private_files'


class ProvinciasMicrocuencas(models.Model):
    edo = models.CharField(max_length=45, blank=True, null=True)
    municipio = models.CharField(max_length=45, blank=True, null=True)
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    entidad = models.CharField(max_length=45, blank=True, null=True)
    nombre = models.CharField(max_length=45, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)
    km2 = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'provincias_microcuencas'


class RiesgoCliclones(models.Model):
    edo = models.CharField(max_length=75, blank=True, null=True)
    municipio = models.CharField(max_length=45, blank=True, null=True)
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    riesgo = models.CharField(max_length=45, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)
    km2 = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'riesgo_cliclones'


class RiesgoGranizada(models.Model):
    edo = models.CharField(max_length=75, blank=True, null=True)
    municipio = models.CharField(max_length=45, blank=True, null=True)
    codigo = models.CharField(max_length=45, blank=True, null=True)
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    riesgo = models.CharField(max_length=45, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)
    km2 = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'riesgo_granizada'


class RiesgoHeladas(models.Model):
    edo = models.CharField(max_length=75, blank=True, null=True)
    municipio = models.CharField(max_length=45, blank=True, null=True)
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    riesgo = models.CharField(max_length=45, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)
    km2 = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'riesgo_heladas'


class RiesgoInundacion(models.Model):
    edo = models.CharField(max_length=75, blank=True, null=True)
    municipio = models.CharField(max_length=45, blank=True, null=True)
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    riesgo = models.CharField(max_length=45, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)
    km2 = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'riesgo_inundacion'


class RiesgoPrecipitacion(models.Model):
    edo = models.CharField(max_length=45, blank=True, null=True)
    municipio = models.CharField(max_length=45, blank=True, null=True)
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    rango = models.CharField(max_length=45, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)
    km2 = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'riesgo_precipitacion'


class RiesgoSequia(models.Model):
    edo = models.CharField(max_length=75, blank=True, null=True)
    municipio = models.TextField(blank=True, null=True)
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    riesgo = models.CharField(max_length=45, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)
    km2 = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'riesgo_sequia'


class RiesgoSismo(models.Model):
    edo = models.CharField(max_length=45, blank=True, null=True)
    municipio = models.CharField(max_length=45, blank=True, null=True)
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    zona = models.CharField(max_length=45, blank=True, null=True)
    riesgo = models.CharField(max_length=45, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)
    km2 = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'riesgo_sismo'


class RiesgoTormenta(models.Model):
    edo = models.CharField(max_length=75, blank=True, null=True)
    municipio = models.CharField(max_length=45, blank=True, null=True)
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    riesgo = models.CharField(max_length=45, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)
    km2 = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'riesgo_tormenta'


class RiesgoTornado(models.Model):
    edo = models.CharField(max_length=75, blank=True, null=True)
    municipio = models.CharField(max_length=45, blank=True, null=True)
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    riesgo = models.CharField(max_length=45, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)
    km2 = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'riesgo_tornado'


class SubprovinciasMicrocuencas(models.Model):
    edo = models.CharField(max_length=45, blank=True, null=True)
    municipio = models.CharField(max_length=45, blank=True, null=True)
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    entidad = models.CharField(max_length=45, blank=True, null=True)
    nombre = models.CharField(max_length=45, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)
    km2 = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'subprovincias_microcuencas'


class Temperatura(models.Model):
    id = models.IntegerField(primary_key=True)
    id_estacion = models.CharField(max_length=50, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)
    estacion = models.CharField(max_length=50, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)
    max_ene = models.CharField(db_column='max_Ene', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    max_feb = models.CharField(db_column='max_Feb', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    max_mar = models.CharField(db_column='max_Mar', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    max_abr = models.CharField(db_column='max_Abr', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    max_may = models.CharField(db_column='max_May', max_length=45, blank=True, null=True)  # Field name made lowercase.
    max_jun = models.CharField(db_column='max_Jun', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    max_jul = models.CharField(db_column='max_Jul', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    max_ago = models.CharField(db_column='max_Ago', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    max_sept = models.CharField(db_column='max_Sept', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    max_oct = models.CharField(db_column='max_Oct', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    max_nov = models.CharField(db_column='max_Nov', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    max_dic = models.CharField(db_column='max_Dic', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    max_anual = models.CharField(max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)
    med_ene = models.CharField(db_column='med_Ene', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    med_feb = models.CharField(db_column='med_Feb', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    med_mar = models.CharField(db_column='med_Mar', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    med_abr = models.CharField(db_column='med_Abr', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    med_may = models.CharField(db_column='med_May', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    med_jun = models.CharField(db_column='med_Jun', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    med_jul = models.CharField(db_column='med_Jul', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    med_ago = models.CharField(db_column='med_Ago', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    med_sept = models.CharField(db_column='med_Sept', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    med_oct = models.CharField(db_column='med_Oct', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    med_nov = models.CharField(db_column='med_Nov', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    med_dic = models.CharField(db_column='med_Dic', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    med_anual = models.CharField(max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)
    min_ene = models.CharField(db_column='min_Ene', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    min_feb = models.CharField(db_column='min_Feb', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    min_mar = models.CharField(db_column='min_Mar', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    min_abr = models.CharField(db_column='min_Abr', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    min_may = models.CharField(db_column='min_May', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    min_jun = models.CharField(db_column='min_Jun', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    min_jul = models.CharField(db_column='min_Jul', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    min_ago = models.CharField(db_column='min_Ago', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    min_sept = models.CharField(db_column='min_Sept', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    min_oct = models.CharField(db_column='min_Oct', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    min_nov = models.CharField(db_column='min_Nov', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    min_dic = models.CharField(db_column='min_Dic', max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)  # Field name made lowercase.
    min_anual = models.CharField(max_length=45, db_collation='utf8mb4_0900_ai_ci', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'temperatura'


class TipoErosion(models.Model):
    fid_microcuenca = models.CharField(max_length=45, blank=True, null=True)
    codigo = models.CharField(max_length=45, blank=True, null=True)
    num_micro = models.CharField(max_length=45, blank=True, null=True)
    c_uni_ero = models.CharField(max_length=75, blank=True, null=True)
    t_ero_d = models.CharField(db_column='t_ero-d', max_length=75, blank=True, null=True)  # Field renamed to remove unsuitable characters.
    f_ero_d = models.CharField(max_length=75, blank=True, null=True)
    g_ero_d = models.CharField(max_length=75, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tipo_erosion'


class TipoGeologia(models.Model):
    edo = models.CharField(max_length=45, blank=True, null=True)
    municipio = models.CharField(max_length=45, blank=True, null=True)
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    tipo = models.CharField(max_length=145, blank=True, null=True)
    clase = models.CharField(max_length=145, blank=True, null=True)
    era = models.CharField(max_length=145, blank=True, null=True)
    sistema = models.CharField(max_length=145, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)
    km2 = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tipo_geologia'


class TipoSuelo(models.Model):
    edo = models.CharField(max_length=45, blank=True, null=True)
    municipio = models.CharField(max_length=45, blank=True, null=True)
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    tipo = models.CharField(max_length=99, blank=True, null=True)
    textura = models.CharField(max_length=85, blank=True, null=True)
    f_superficies = models.CharField(db_column='f-superficies', max_length=75, blank=True, null=True)  # Field renamed to remove unsuitable characters.
    superficie = models.CharField(max_length=45, blank=True, null=True)
    km2 = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tipo_suelo'


class TipoTopografia(models.Model):
    edo = models.CharField(max_length=45, blank=True, null=True)
    municipio = models.CharField(max_length=45, blank=True, null=True)
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    tipo = models.CharField(max_length=545, blank=True, null=True)
    descripcion = models.CharField(max_length=545, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)
    km2 = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tipo_topografia'


class TopominosMicro(models.Model):
    edo = models.CharField(max_length=55, blank=True, null=True)
    municipio = models.CharField(max_length=45, blank=True, null=True)
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    nombre = models.CharField(max_length=45, blank=True, null=True)
    terminos_ge = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'topominos_micro'


class CustomUserManager(BaseUserManager):
    def create_user(self, username, email, password=None):
        if not email:
            raise ValueError('El usuario debe tener un email')
        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password):
        user = self.create_user(username, email, password)
        user.is_admin = True
        user.save(using=self._db)
        return user
    

class Users(AbstractBaseUser):
    id = models.BigAutoField(primary_key=True)
    username = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    email = models.CharField(unique=True, max_length=255)
    email_verified_at = models.DateTimeField(blank=True, null=True)
    password = models.CharField(max_length=255)
    avatar = models.CharField(max_length=255, blank=True, null=True)
    remember_token = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    last_login = models.DateTimeField(blank=True, null=True)
    is_active = models.IntegerField()
    type_user = models.CharField(max_length=255)
    rol = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'users'


class Vegetacion(models.Model):
    edo = models.CharField(max_length=45, blank=True, null=True)
    municipio = models.CharField(max_length=45, blank=True, null=True)
    codigo = models.CharField(max_length=45, blank=True, null=True)
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    cue_union = models.CharField(max_length=545, blank=True, null=True)
    descripcion = models.CharField(max_length=545, blank=True, null=True)
    superficie = models.CharField(max_length=45, blank=True, null=True)
    km2 = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vegetacion'

"""
    ##########################################################################################
        TABLAS CON DATOS GENERALES DE LOS CAPITULOS Y PROYECTO
    ##########################################################################################
"""
class Projects(models.Model):
    clave_proyecto = models.CharField(unique=True, max_length=45)
    tipo = models.CharField(max_length=150, blank=True, null=True)
    estacion = models.CharField(max_length=10, blank=True, null=True)
    nom_micro = models.CharField(max_length=45, blank=True, null=True)
    proyecto_name = models.CharField(max_length=750, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'proyectos'
        