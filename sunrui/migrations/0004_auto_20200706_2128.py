# Generated by Django 3.0.4 on 2020-07-06 13:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sunrui', '0003_auto_20200706_2122'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Amount',
            new_name='Chunk',
        ),
    ]